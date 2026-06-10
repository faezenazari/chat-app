import img from '../assets/img.jpg'
function ChatHeader() {
  return (
    <div className="header">
      <div className="user">
        <img
          src={img}
          alt="img"
          className="avatar"
        />


        <div>
          <h2>Ali</h2>
          <p>Online</p>
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;