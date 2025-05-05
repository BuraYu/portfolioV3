import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Bentobox2() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [nameSet, setNameSet] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          "http://www.burakyueksel.com/api/readChat"
        );
        if (response.ok) {
          const data = await response.json();
          const sortedMessages = data.sort(
            (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
          );

          setMessages(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchMessages();
    const interval = setInterval(fetchMessages, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async () => {
    if (!nameSet) {
      if (input.trim()) {
        setName(input.trim());
        setNameSet(true);
        setInput("");
      }
    } else {
      if (input.trim()) {
        const newMessage = { username: name, message: input };

        setMessages([newMessage, ...messages]);
        setInput("");

        try {
          const response = await fetch(
            "http://www.burakyueksel.com/api/sendMessage",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(newMessage),
            }
          );

          if (response.ok) {
            const data = await response.json();
            console.log("Message sent:", data);
          } else {
            console.error("Failed to send message");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }
  };

  return (
    <motion.div
      className="div2 bento-box"
      animate={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      }}
      initial={{ x: "100vh", opacity: 0 }}
    >
      <div className="chat-container">
        {messages
          .slice()
          .reverse()
          .map((msg, index) => (
            <div className="super-chat" key={index}>
              <p>
                <span>{msg.username}: </span>
                {msg.message}
              </p>
            </div>
          ))}
      </div>

      <div className="input-container">
        <input
          type="text"
          placeholder={nameSet ? "Type a message..." : "Enter your name..."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button onClick={handleSubmit}>{nameSet ? "Send" : "Set Name"}</button>
      </div>
    </motion.div>
  );
}
