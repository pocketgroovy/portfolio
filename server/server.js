import express from "express";
// import cors from "cors";
import 'dotenv/config.js';
import emails from "./routes/emailrouter.js";
import logger from "./logger.js";

const MAILSERVERPORT = process.env.MAILSERVERPORT || 5000;
const app = express();
const mailogger = logger('info', 'logs/email.log')

app.use(express.json());
app.use("/", emails);

// app.use((req, res, next) => {
//   // Log an info message for each incoming request
//   logger.info(`Received a ${req.method} request for ${req.url}`);
//   next();
// });

// // Handle HTTP GET requests to the root path
// app.get("/", (req, res) => {
//   // Log messages at different log levels
//   logger.error("This is an error message");
//   logger.warn("This is a warning message");
//   logger.info("This is an info message");
//   logger.verbose("This is a verbose message");
//   logger.debug("This is a debug message");
//   logger.silly("This is a silly message");
//   // Send a response to the client
//   res.send("Hello, world!");
// });

// // Handle errors using the logger
// app.use((err, req, res, next) => {
//   // Log the error message at the error level
//   logger.error(err.message);
//   res.status(500).send();
// });

// start the Express server
app.listen(MAILSERVERPORT, () => {
  mailogger.info(`Server listening on port ${MAILSERVERPORT}`);
});
