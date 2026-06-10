function Message({ message }) {
  return (
    <div
      className={`message-wrapper ${
        message.sender === "me"
          ? "sent"
          : "received"
      }`}
    >
      <div
        className={`message ${
          message.sender === "me"
            ? "my-message"
            : "other-message"
        }`}
      >
        <p>{message.text}</p>
        <span>{message.time}</span>
      </div>
    </div>
  );
}

export default Message;