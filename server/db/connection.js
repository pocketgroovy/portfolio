import { MongoClient, ServerApiVersion } from "mongodb";
import 'dotenv/config.js';

// import * as fs from "fs";
// import * as tls from "tls";

const uri = process.env.DB_URI || "";
// const secureContext = tls.createSecureContext({
//   key: fs.readFileSync('/etc/ssl/mongodb-test-ca-keys.pem'),
//   cert: fs.readFileSync('/etc/ssl/mongodb-test-ca.pem'),
// });

// const client = new MongoClient(uri,{tls: true, secureContext,
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });
const client = new MongoClient(uri,{
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log(
   "Pinged your deployment. You successfully connected to MongoDB!"
  );
} catch(err) {
  console.error(err);
}

let db = client.db("projects");

export default db;
