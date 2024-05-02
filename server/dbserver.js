import express from "express";
import cors from "cors";
import crud from "./routes/crud.js";
import winston from "winston";
import fs from 'fs';
import https from 'https';
import 'dotenv/config.js';


const DB_PORT = process.env.DB_PORT || 3660;
const db = express();

// app.get('/', (req, res) => {
//   if (!req.client.authorized) {
//     return res.status(401).send('Invalid client certificate authentication.');
//   }
//     return res.send('hi you are authorized users');
// });

db.use(cors({
  origin: "https://pocketgroovy.com",
  methods: "GET,POST,PUT,DELETE, PATCH",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  maxAge: 3600,
  allowedHeaders: ['Content-Type'],
  credentials: true
}));
db.use(express.json());
db.use("/projects", crud);

const logger = winston.createLogger({
  level: "info",
  // Use timestamp and printf to create a standard log format
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(
      (info) => `${info.timestamp} ${info.level}: ${info.message}`
    )
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/dbserver.log" }),
  ],
});

db.use((req, res, next) => {
  // Log an info message for each incoming request
  logger.info(`Received a ${req.method} request for ${req.url}`);
  next();
});
// Handle HTTP GET requests to the root path
db.get("/", (req, res) => {
  // Send a response to the client
  res.send("Hello, DB user!");
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
  .listen(DB_PORT);