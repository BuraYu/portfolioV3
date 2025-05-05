import { connectToDatabase } from "@/app/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json(); 
    const { username, message } = body;

    if (!username || !message) {
      return new Response(
        JSON.stringify({ error: "Username and message are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { db } = await connectToDatabase();

    const result = await db.collection("chat").insertOne({
      username,
      message,
      timestamp: new Date(),
    });

    return new Response(JSON.stringify({ success: true, message: result }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending message:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
