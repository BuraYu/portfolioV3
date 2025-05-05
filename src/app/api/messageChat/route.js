import { connectToDatabase } from "@/app/lib/mongodb";

export async function GET(request) {
  try {
    const { db } = await connectToDatabase();
    const chats = await db.collection("chat").find({}).toArray();
    return new Response(JSON.stringify(chats), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed fetch chats" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
