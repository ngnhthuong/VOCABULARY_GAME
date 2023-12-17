import io from "socket.io-client";
import "../components/room/room.css";
import "../components/match/match.css";
import ChatRoom from "../components/room/Chat";
import FriendList from "../components/room/FriendList";
import MiddleRoom from "../components/room/MiddleRoom";
import MatchMap from "../components/match/MatchMap.js";
import ChatInGame from "../components/match/ChatInGame";
import RankInGame from "../components/match/RankInGame";
import userImg1 from "../assets/images/player/user1.png";
import userImg2 from "../assets/images/player/user2.png";
import userImg3 from "../assets/images/player/user3.png";
import userImg4 from "../assets/images/player/user4.png";
import userImg5 from "../assets/images/player/user5.png";
import userImg6 from "../assets/images/player/user6.png";
import userImg7 from "../assets/images/player/user7.png";
import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Room({ socket }) {
  const [dataRoom, setDataRoom] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const inputValue = searchParams.get("inputValue");
    console.log(inputValue);
    if (inputValue === null) {
      socket.emit("create-room", playerAuth);
      socket.on("return-room", (data) => {});
      socket.on("successfull", (data) => {
      });
      socket.on("return-room", (data) => {
          setDataRoom(data);
      });
    } else if(inputValue !== null){
      var playerMemberJoin = {
        roomID: inputValue,
        playerID: playerAuth._id,
        playerName: playerAuth.playerName,
        playerScore: 0,
        playerAvatar: playerAuth.avatar,
      };
      socket.emit("join-room", playerMemberJoin);
      socket.on("successfull", (data) => {});
      socket.on("return-room", (data) => {
        setDataRoom(data);
    });
    }
  }, []);


  useEffect(() => {
    console.log(dataRoom);
  }, [dataRoom]);
  function backToHomePage() {
    window.location.href = "/homepage";
  }
  // Call data from local storage
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
  if(playerAuth === null){
    window.location.href = "/";
  }
  // Chat room

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState({});
  const [roomMatch, setRoomMatch] = useState(false);

    socket.on("server-sendchat", (message) => {
      setMessages([...messages, message]);
    });

  console.log(messages);

  function handleRoomMatch() {
    setRoomMatch(!roomMatch);
  }

  

  // useEffect for change map
  useEffect(() => {
    if (roomMatch === true) {
      document.querySelector("#match-form").classList.remove("close");
      document.querySelector("#match-form").classList.add("open");
      document.querySelector(".background-modal__room").classList.add("close");
      document
        .querySelector(".background-modal__room")
        .classList.remove("open");
    } else {
      document.querySelector("#match-form").classList.remove("open");
      document.querySelector("#match-form").classList.add("close");
      document.querySelector(".background-modal__room").classList.add("open");
      document
        .querySelector(".background-modal__room")
        .classList.remove("close");
    }
  }, [roomMatch]);
  return (
    <>
      <div id="room-form" className="background-modal__room">
        <div className="room box--shadow">
          <div className="room-header">
            <div className="room-title">
              <div className="room-title__child">
                <p>R O O M</p>
              </div>
            </div>
            <div className="room-close">
              <button className="box--shadow" onClick={backToHomePage}>
                <i className="fas fa-times close--icon"></i>
              </button>
            </div>
            <div className="room-id">
            <button className="box--shadow">ID: {dataRoom ? dataRoom.roomID : null}</button>
            </div>
          </div>
          <div className="room-body">
            <div className="room-body__left box--shadow">
              <FriendList />
            </div>
            <div className="room-body__middle box--shadow">
              <MiddleRoom handleRoomMatch={handleRoomMatch} dataRoom={dataRoom} playerAuth={playerAuth}/>
            </div>
            <div className="room-body__right box--shadow">
              <ChatRoom
                playerAuth={playerAuth}
                message={message}
                setMessage={setMessage}
                messages={messages}
                setMessages={setMessages}
                socket = {socket}
              />
            </div>
          </div>
        </div>
      </div>
      {/* match */}
      <div id="match-form">
        <div className="match-form__left box--shadow">
          <MatchMap roomMatch={roomMatch} />
        </div>
        <div className="match-form__right">
          <div className="math-form__right-chatrank box--shadow">
            <RankInGame />
            <ChatInGame
              playerAuth={playerAuth}
              message={message}
              setMessage={setMessage}
              messages={messages}
              setMessages={setMessages}
            />
          </div>
          <div className="ingame-setting box--shadow">
            <button className="box--shadow">
              <i className="fas fa-cog"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
