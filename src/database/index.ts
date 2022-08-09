import { Db } from "mongodb";

const { MongoClient } = require("mongodb");


function dbConnection() {
  return new Promise<{client: any, db: Db}>(async (resolve, reject)=>{
    // Connection URI
    // const uri =  "mongodb://localhost:27017";

    const client = new MongoClient(process.env.DB_URI);
    try {
        // Connect the client to the server
        await client.connect();
        // Establish and verify connection
        await client.db("my-portfolio-db").command({ping: 1});
        console.log("Connected successfully to server");
        
        resolve({client: client, db: client.db()})
        
    } catch (ex){
      console.log(ex.message)
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
      }
  })
}

export default dbConnection