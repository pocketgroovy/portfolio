import winston from "winston";
const { combine, timestamp, json, errors } = winston.format;
const { createLogger, transports} = winston;

const logger = createLogger(logelevel='info', logpath)({
  level: logelevel,
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
    new transports.File({ filename: logpath }),
  ],
});

export default logger;