"use client";

import React, { useState, useEffect } from "react";

import Bentobox1 from "./Bentobox1";
import Bentobox2 from "./Bentobox2";
import Bentobox3 from "./Bentobox3";
import Bentobox4 from "./Bentobox4";
import Bentobox5 from "./Bentobox5";
import Bentobox6 from "./Bentobox6";
import Bentobox7 from "./Bentobox7";

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // useEffect(() => {
  //   const fetchMessages = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/messages");
  //       const data = await response.json();
  //       setMessages(data);
  //     } catch (error) {
  //       console.error("Error fetching messages:", error);
  //     }
  //   };

  //   fetchMessages();
  // }, [messages]);

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      const response = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: "BerlinDieter", message: newMessage }),
      });

      if (response.ok) {
        const savedMessage = await response.json();
        setMessages((prevMessages) => [savedMessage, ...prevMessages]);
        setNewMessage("");
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="main-content-wrapper">
      <div className="parent">
        <Bentobox1 />
        <Bentobox2
          messages={messages}
          newMessage={newMessage}
          sendMessage={sendMessage}
        />{" "}
        <Bentobox3 />
        <Bentobox4 />
        <Bentobox5 />
        <Bentobox6 />
        <Bentobox7 />
      </div>
    </div>
  );
};

export default Main;
