
import { useState } from "react";
import ChatHeader from "./Component/ChatHeader";
import Message from "./Component/Message";
import MessageInput from "./Component/MessageInput";
import "./App.css";

function App() {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi there 👋",
            sender: "other",
            time: "11:28",
        },
        {
            id: 2,
            text: "How are you doing?",
            sender: "other",
            time: "11:29",
        },
    ]);


    const sendMessage = (text) => {
        if (!text.trim()) return;

        const newMessage = {
            id: Date.now(),
            text,
            sender: "me",
            time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            }),
        };

        setMessages((prev) => [...prev, newMessage]);
    };

    return (
        <div className="chat-container">

            <ChatHeader />

            <div className="chat-body">
                {messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </div>

            <MessageInput sendMessage={sendMessage} />
        </div>


    );
}

export default App;