import connectToDatabase from "@/app/lib/mongodb";

export async function GET(req) {
  try {
    await connectToDatabase();
    const { db } = await connectToDatabase();
    console.log("Database connected:", db);
    return new Response(
      JSON.stringify({ message: "Connected to MongoDB successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to connect to MongoDB" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}


// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;

// async function testConnection() {
//   try {
//     const client = new MongoClient(uri);
//     await client.connect();
//     console.log("Connected to database:", client.db().databaseName);
//     await client.close();
//   } catch (error) {
//     console.error("Connection failed:", error);
//   }
// }

// testConnection();
