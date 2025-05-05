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
        const response = await fetch("http://localhost:3000/api/messageChat");
        if (response.ok) {
          const data = await response.json();
          setMessages(data);
        } else {
          console.log(console.error("Failed to fetch data"));
        }
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchMessages();
  }, []);

  const handleSubmit = () => {
    if (!nameSet) {
      if (input.trim()) {
        setName(input.trim());
        setNameSet(true);
        setInput("");
      }
    } else {
      if (input.trim()) {
        setMessages([{ username: name, message: input }, ...messages]);
        setInput("");
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
