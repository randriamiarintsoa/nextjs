// pages/chat.js
import { useState } from "react";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: "You" }]);
            setInput("");
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <h1>Chat Application</h1>
            <div
                style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    height: "300px",
                    overflowY: "scroll",
                    marginBottom: "10px",
                }}
            >
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.sender}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <form onSubmit={sendMessage} style={{ display: "flex" }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message"
                    style={{ flex: 1, padding: "10px" }}
                />
                <button type="submit" style={{ padding: "10px 20px" }}>
                    Send
                </button>
            </form>
        </div>
    );
};

export default Chat;
