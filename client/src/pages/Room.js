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
import winnerRoundEvenImg from "../assets/images/formgame/winnerRoundEven.png";
import winnerRoundOddImg from "../assets/images/formgame/winnerRoundOdd.png";
import backgroundWinnerImg from "../assets/images/formgame/backgroundWinRound.gif";
import winnerGameRightImg from "../assets/images/formgame/winnerMatchRight.png";
import winnerGameLeftImg from "../assets/images/formgame/winnerMatchLeft.png";

// import sound
import gameSound from "../assets/sounds/creepy-devil-dance-166764.mp3";
import championRealSound from "../assets/sounds/championreal.mp3";
import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Room({ socket }) {
  // datamap
  // Call dataMap form database here

  // ------------------------------
  const [dataMap, setDataMap] = useState([
    {
      word: "Sun",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "Clouds",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "Ocean",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "Mountains",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "Rose",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "Piano",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "Books",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "Mobile",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "Earth",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "Hero",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "Moon",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "City",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "Family",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "Park",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "Street",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "Artist",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "food",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "Computer",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "lights",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "Travel",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "Adventure",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "Coffee",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "worker",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
    {
      word: "Rainbow",
      wordSeparate: null,
      round: null,
      score: null,
      winner: null,
      location: null,
    },
  ]);
  const [resetMatchMap, setResetMatchMap] = useState(false);
  const [dataUsingMatch, setDataUsingMatch] = useState(null);
  const [dataRound, setDataRound] = useState(null);
  // ----
  const [dataRoom, setDataRoom] = useState(null);
  const location = useLocation();
  //
  const [timeoutId, setTimeoutId] = useState(null);
  const [volume, setVolume] = useState(false);
  const [audioElement, setAudioElement] = useState(new Audio(gameSound));
  const [championreal, setChampionreal] = useState(
    new Audio(championRealSound)
  );
  // championreal.volume = 0.2;
  const [hiddenInputAnswer, setHiddenInputAnswer] = useState(true);

  useEffect(() => {
    if (volume === true) {
      audioElement.volume = 0.1; // Set volume to 10%
      // Gán sự kiện kết thúc âm thanh để tự động phát lại khi kết thúc
      audioElement.addEventListener("ended", () => {
        if (volume) {
          audioElement.currentTime = 0; // Đặt thời gian về đầu để khi phát lại, nó sẽ bắt đầu từ đầu
          audioElement.play();
        }
      });

      // Xử lý sự thay đổi volume để tắt hoặc bật âm thanh
      if (volume) {
        audioElement.play();
      } else {
        audioElement.pause();
        audioElement.currentTime = 0; // Đặt thời gian về đầu để khi phát lại, nó sẽ bắt đầu từ đầu
      }

      // Cleanup sự kiện khi component unmount
      return () => {
        audioElement.removeEventListener("ended", () => {});
      };
    } else {
      audioElement.pause();
      audioElement.currentTime = 0; // Đặt thời gian về đầu để khi phát lại, nó sẽ bắt đầu từ đầu
    }
  }, [volume]); // Lắng nghe sự thay đổi của volume

  const handleChangeVolume = () => {
    setVolume(!volume);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const inputValue = searchParams.get("inputValue");
    console.log(inputValue);
    if (inputValue === null) {
      socket.emit("create-room", playerAuth);
      socket.on("successfull", (data) => {});
      socket.on("return-room", (data) => {
        setDataRoom(data);
      });
    } else if (inputValue !== null) {
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
    console.log("dataroom here", dataRoom);
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
  if (playerAuth === null) {
    window.location.href = "/";
  }
  // Chat room

  const [messages, setMessages] = useState([]);
  const [roomMatch, setRoomMatch] = useState(false);

  socket.on("server-sendchat", (message) => {
    setMessages([...messages, message]);
  });

  socket.on("server-sendchat-ingame", (message) => {
    setMessages([...messages, message]);
  });

  console.log(messages);

  // send start game
  function handleRoomMatch() {
    socket.emit("start-game-client", dataMap);
  }

  // về lại phòng
  socket.on("end-game-server", (data) => {
    // gọi axios update data match had been played

    // ============================================
    console.log("end game");
    setWinnerGame(true);
    championreal.play();
    setTimeout(() => {
      championreal.pause();
      if (volume) {
        handleChangeVolume();
      }
      setHiddenInputAnswer(true);
      setDataRoomScore(null);
      setWinnerGame(false);
      setDataRound(null);
      setDataUsingMatch(null);
      timeoutId && clearTimeout(timeoutId);
      setTimeoutId(null);
      setResetMatchMap(!resetMatchMap);
      setDataRoomScore(null);
      setRoomMatch(!roomMatch);
    }, 10000);
  });

  // bắt đầu game
  socket.on("start-game-server", (data) => {
    console.log(data);
    handleChangeVolume();
    setDataUsingMatch(data);
    setRoomMatch(!roomMatch);
  });

  socket.on("receive-round-server", (round) => {
    setDataRound(round);
  });

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

  // winner round
  const [winnerRound, setWinnerRound] = useState(null);
  const [winnerGame, setWinnerGame] = useState(false);
  socket.on("return-player-player", (data) => {
    setDataRoomScore(data);
  });
  const [dataRoomScore, setDataRoomScore] = useState(null);
  const [modalWinnerRound, setModalWinnerRound] = useState(false);
  socket.on("receive-correct-answer", (data) => {
    setWinnerRound(data);
  });

  useEffect(() => {
    if (winnerGame !== null && winnerGame === true) {
      console.log("winner game:", dataRoomScore);
      const queryImgWin = document.querySelector(".winner__game--imgWin");
      var changeWin = 1;
      const flagSetTime = setInterval(() => {
        if (changeWin % 2 === 0) {
          queryImgWin.setAttribute("src", winnerGameRightImg);
        } else {
          queryImgWin.setAttribute("src", winnerGameLeftImg);
        }
        changeWin++;
      }, 700);
      setTimeout(() => {
        clearInterval(flagSetTime);
        changeWin = 1;
      }, 10000);
    }
  }, [winnerGame]);

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
              <button className="box--shadow">
                ID: {dataRoom ? dataRoom.roomID : null}
              </button>
            </div>
          </div>
          <div className="room-body">
            <div className="room-body__left box--shadow">
              <FriendList />
            </div>
            <div className="room-body__middle box--shadow">
              <MiddleRoom
                handleRoomMatch={handleRoomMatch}
                dataRoom={dataRoom}
                playerAuth={playerAuth}
              />
            </div>
            <div className="room-body__right box--shadow">
              <ChatRoom
                playerAuth={playerAuth}
                messages={messages}
                setMessages={setMessages}
                socket={socket}
              />
            </div>
          </div>
        </div>
      </div>
      {/* match */}
      <div id="match-form">
        <div className="match-form__left box--shadow">
          {/* winner round */}
          <div
            className={`winner__round ${modalWinnerRound ? "open" : "close"}`}
          >
            <div className="winner__round--img">
              <img
                className="winner__round--imgBackground"
                src={backgroundWinnerImg}
                alt=""
              />
              {winnerRound !== null && (winnerRound.round + 1) % 2 === 0 ? (
                <img
                  className="winner__round--imgWin"
                  src={winnerRoundEvenImg}
                  alt=""
                />
              ) : (
                <img
                  className="winner__round--imgWin"
                  src={winnerRoundOddImg}
                  alt=""
                />
              )}
            </div>
            <div className="match-element__active winner__round--infor">
              <p>ROUND: {winnerRound !== null ? winnerRound.round + 1 : ""}</p>
              <p style={{ fontSize: "0.7rem" }}>
                Word: {winnerRound !== null ? winnerRound.word : ""} | Score:{" "}
                {winnerRound !== null ? winnerRound.score : ""}{" "}
              </p>
              <p style={{ fontSize: "0.7rem" }}>
                Winner: {winnerRound !== null ? winnerRound.winner : ""}
              </p>
            </div>
          </div>
          {/* winner */}
          <div className={`winner__round ${winnerGame ? "open" : "close"}`}>
            <div className="winner__round--img">
              <img
                className="winner__round--imgBackground"
                src={backgroundWinnerImg}
                alt=""
              />
              <img className="winner__game--imgWin" src="" alt="" />
            </div>
            <div className="match-element__active winner__round--infor">
              <p>
                Winner:{" "}
                {dataRoomScore !== null
                  ? dataRoomScore.roomMember[0].playerName
                  : ""}
              </p>
              <p>
                Total Score:{" "}
                {dataRoomScore !== null
                  ? dataRoomScore.roomMember[0].playerScore
                  : ""}
              </p>
            </div>
          </div>
          <MatchMap
            dataMap={dataMap}
            roomMatch={roomMatch}
            playerAuth={playerAuth}
            dataUsingMatch={dataUsingMatch}
            dataRound={dataRound}
            socket={socket}
            dataRoom={dataRoom}
            setTimeoutId={setTimeoutId}
            timeoutId={timeoutId}
            setDataRound={setDataRound}
            winnerRound={winnerRound}
            setWinnerRound={setWinnerRound}
            modalWinnerRound={modalWinnerRound}
            setModalWinnerRound={setModalWinnerRound}
            hiddenInputAnswer={hiddenInputAnswer}
            setHiddenInputAnswer={setHiddenInputAnswer}
          />
        </div>
        <div className="match-form__right">
          <div className="math-form__right-chatrank box--shadow">
            <RankInGame
              dataRoomScore={dataRoomScore}
              dataRoom={dataRoom}
              playerAuth={playerAuth}
            />
            <ChatInGame
              playerAuth={playerAuth}
              messages={messages}
              setMessages={setMessages}
              socket={socket}
            />
          </div>
          <div
            className="ingame-setting box--shadow"
            onClick={handleChangeVolume}
          >
            <button className="box--shadow">
              {volume ? (
                <i className="fas fa-volume-up"></i>
              ) : (
                <i className="fas fa-volume-mute"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
