import userImg1 from "../../assets/images/player/user1.png";
import userImg2 from "../../assets/images/player/user2.png";
import userImg3 from "../../assets/images/player/user3.png";
import userImg4 from "../../assets/images/player/user4.png";
import userImg5 from "../../assets/images/player/user5.png";
import userImg6 from "../../assets/images/player/user6.png";
import userImg7 from "../../assets/images/player/user7.png";
import { useRef, useState, useEffect } from "react";

export default function ChatInGame({ playerAuth, socket, messages }) {
  const [defaultMessage, setDefaultMessage] = useState("");
  const [messageIngame, setMessageIngame] = useState("");
  const handleInputChange = (event) => {
    setDefaultMessage(event.target.value);
    setMessageIngame((pre) => {
      return {
        avatar: playerAuth.avatar,
        name: playerAuth.playerName,
        chat: event.target.value,
      };
    });
  };

  const handleEnterPresss = (event) => {
    // console.log(messageIngame);
    event.preventDefault();
    function isEmptyOrSpaces(str) {
      return str === null || str.match(/^ *$/) !== null;
    }
    if (event.key === "Enter" && !event.shiftKey) {
      if (
        messageIngame.chat !== undefined &&
        !isEmptyOrSpaces(messageIngame.chat)
      ) {
        console.log("send chat here, ", messageIngame.chat);
        socket.emit("client-sendchat-ingame", messageIngame);
        setMessageIngame("");
        setDefaultMessage("");
      }
    }
  };

  useEffect(() => {
    const chatList = document.querySelector(".room-chat__ingame--list");
    chatList.scrollTop = chatList.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-ingame box--shadow">
      <div className="chat-ingame__title box--shadow">
        <p>CHATBOX</p>
      </div>
      <div className="chat-ingame__message">
        <ul className="room-chat__list room-chat__ingame--list">
          {messages.map((message, index) => {
            return (
              <li key={index} className="room-chat__message box--shadow">
                <div className="room-chat__message--avatar box--shadow">
                  <img src={message.avatar} alt="error" />
                </div>
                <p className="font-chat_ingame">
                  <label
                    className={`box--shadow ${
                      message.name === playerAuth.playerName
                        ? "player__current"
                        : ""
                    }`}
                  >
                    {message.name}
                  </label>
                  <> </>
                  {message.chat}
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
          onKeyUp={handleEnterPresss}
          placeholder="Enter your message here!"
        ></input>
        <button box--shadow>
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
}
