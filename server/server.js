import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import winston from "winston";
import fs from 'fs';
import https from 'https';

const PORT = process.env.PORT || 3660;
const app = express();

// app.get('/', (req, res) => {
//   if (!req.client.authorized) {
//     return res.status(401).send('Invalid client certificate authentication.');
//   }
//     return res.send('hi you are authorized users');
// });

app.use(cors({
  origin: "https://pocketgroovy.com",
  methods: "GET,POST,PUT,DELETE, PATCH",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  maxAge: 3600,
  allowedHeaders: ['Content-Type'],
  credentials: true
}));
app.use(express.json());
app.use("/record", records);

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
    new winston.transports.File({ filename: "logs/app.log" }),
  ],
});

app.use((req, res, next) => {
  // Log an info message for each incoming request
  logger.info(`Received a ${req.method} request for ${req.url}`);
  next();
});
// Handle HTTP GET requests to the root path
app.get("/", (req, res) => {
  // Log messages at different log levels
  logger.log("error", "This is an error message");
  logger.log("warn", "This is a warning message");
  logger.log("info", "This is an info message");
  logger.log("verbose", "This is a verbose message");
  logger.log("debug", "This is a debug message");
  logger.log("silly", "This is a silly message");
  // Send a response to the client
  res.send("Hello, world!");
});

// Handle errors using the logger
app.use((err, req, res, next) => {
  // Log the error message at the error level
  logger.error(err.message);
  res.status(500).send();
});

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
    app
  )
  .listen(PORT);

// start the Express server
// app.listen(PORT, () => {
//   logger.log("info", `Server listening on port ${PORT}`);
// });
