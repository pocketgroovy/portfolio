import winston from "winston";
const { combine, timestamp, json, errors } = winston.format;
const { createLogger, transports} = winston;

const logger = createLogger({
  level: process.env.LOG_LEVEL || "info",
  // Use timestamp and printf to create a standard log format
  format: combine(
    errors({ stack: true }),
    timestamp(),
    json(
      (info) => `${info.timestamp} ${info.level}: ${info.message}`
    )
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/email.log" }),
  ],
});

export default logger;