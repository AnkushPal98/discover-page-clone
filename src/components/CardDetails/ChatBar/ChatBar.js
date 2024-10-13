import React, { useState } from "react";
import "./ChatBar.css";

const ChatBar = () => {
  const [message, setMessage] = useState(""); // State to store the input value

  const handleSend = () => {
    if (message.trim()) {
      console.log("Message sent:", message); // Handle the sending message logic here
      setMessage(""); // Reset the input field after sending
    }
  };
  return (
  
      <div className="chat-bar">
        <input
          type="text"
          placeholder="Ask follow-up"
          value={message} // Controlled input value
          onChange={(e) => setMessage(e.target.value)} // Update state on input change
        />
        <button onClick={handleSend}>Send</button>
      </div>

  );
};

export default ChatBar;
