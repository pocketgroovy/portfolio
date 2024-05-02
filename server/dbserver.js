import express from "express";
import crud from "./routes/crud.js";
import fs from 'fs';
import https from 'https';
import 'dotenv/config.js';
import logger from "./dblogger.js";


const DB_PORT = process.env.DB_PORT || 3660;
const db = express();

db.use(express.json());
db.use("/projects", crud);


db.use((req, res, next) => {
  // Log an info message for each incoming request
  logger.info(`Received a ${req.method} request for ${req.url}`);
  next();
});
// Handle HTTP GET requests to the root path
db.get("/", (req, res) => {
  // Send a response to the client
  res.status(403).send("Forbidden PG");
});

// Handle errors using the logger
db.use((err, req, res, next) => {
  // Log the error message at the error level
  logger.error(err.message);
  res.status(500).send();
});

// express server https
https
  .createServer(
    {
      // ...
      cert: fs.readFileSync('/etc/ssl/mongodb-test-server1.crt'),
      key: fs.readFileSync('/etc/ssl/mongodb-test-server1.key'),
      // requestCert: true,
      // rejectUnauthorized: false,
      // ca: fs.readFileSync('/etc/ssl/mongodb-test-ca.crt')
      // ...
    },
    db
  )
  .listen(DB_PORT, () => {
    logger.info(`Server listening on port ${DB_PORT}`)
});