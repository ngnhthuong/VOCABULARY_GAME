import userImg1 from "../../assets/images/player/user1.png";
import userImg2 from "../../assets/images/player/user2.png";
import userImg3 from "../../assets/images/player/user3.png";
import userImg4 from "../../assets/images/player/user4.png";
import userImg5 from "../../assets/images/player/user5.png";
import userImg6 from "../../assets/images/player/user6.png";
import userImg7 from "../../assets/images/player/user7.png";
import { useRef, useState, useEffect } from "react";

export default function ChatInGame() {
  const getPlayerDataFromStorage = () => {
    try {
      const playerDataString = localStorage.getItem("player");
      const playerData = JSON.parse(playerDataString);
      return playerData;
    } catch (error) {
      console.error("Error retrieving player data from LocalStorage:", error);
      return null;
    }
  };

  const playerAuth = getPlayerDataFromStorage();

  const [message, setMessage] = useState({});
  const [messages, setMessages] = useState([]);
  const [defaultMessage, setDefaultMessage] = useState("");
  const handleInputChange = (event) => {
    setDefaultMessage(event.target.value);
    const chatValue = event.target.value;
    const messageValue = {
      avatar: playerAuth.avatar,
      name: playerAuth.playerName,
      chat: chatValue,
    };
    setMessage(messageValue);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      setMessages([...messages, message]);
      setDefaultMessage("");
    }
  };
  useEffect(() => {
    const chatList = document.querySelector(".room-chat__list");
    chatList.scrollTop = chatList.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-ingame box--shadow">
      <div className="chat-ingame__title box--shadow"></div>
      <div className="chat-ingame__message">
        <ul className="room-chat__list room-chat__ingame--list">
          {messages.map((messages, index) => {
            return (
              <li className="room-chat__message box--shadow">
                <div className="room-chat__message--avatar box--shadow">
                  <img src={message.avatar} alt="error" />
                </div>
                <p className="font-chat_ingame">
                  <label className="box--shadow">{messages.name}</label>
                  <> </>{messages.chat}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="room-chat__ingame--chatbox">
        <input
          className="chat-ingame-textarea box--shadow"
          type="text"
          value={defaultMessage}
          onChange={handleInputChange}
          onKeyDown={handleEnterPress}
          placeholder="Enter your message here!"
        ></input>
        <button box--shadow>
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
}
