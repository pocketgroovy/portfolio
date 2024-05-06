import mongoose from "mongoose";
import logger from "../dblogger.js";
import 'dotenv/config.js';

export default function connectDB() {
    const url = process.env.DB_URI || "";
   
    try {
      mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (err) {
      logger.error(err.message);
      process.exit(1);
    }
    const dbConnection = mongoose.connection;
    dbConnection.once("open", (_) => {
        logger.info(`Database connected successfully`);
    });
   
    dbConnection.on("error", (err) => {
        logger.error(`connection error: ${err}`);
    });
    return;
  }