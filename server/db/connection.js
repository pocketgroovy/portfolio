import { MongoClient, ServerApiVersion } from "mongodb";
import logger from "../dblogger.js";
import 'dotenv/config.js';

const uri = process.env.DB_URI || "";

const client = new MongoClient(uri,{
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  logger.info('try connecting DB');
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("portfolio").command({ ping: 1 });
  logger.info(
   "Pinged your deployment. You successfully connected to MongoDB!"
  );
} catch(err) {
  logger.error(err);
}

let db = client.db("portfolio");

export default db;
