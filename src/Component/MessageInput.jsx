import { useState } from "react";

function MessageInput({ sendMessage }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    sendMessage(input);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="Type a message..."
        value={input}
        onChange={(e) =>
          setInput(e.target.value)
        }
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleSend}>
        Send
      </button>
    </div>
  );
}

export default MessageInput;