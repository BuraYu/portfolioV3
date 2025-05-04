import { motion } from "framer-motion";

export default function Bentobox2({ messages, newMessage, sendMessage }) {
  return (
    <>
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
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </motion.div>
    </>
  );
}
