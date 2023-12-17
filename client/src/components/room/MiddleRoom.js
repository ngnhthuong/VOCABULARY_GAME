import userImg1 from "../../assets/images/player/user1.png";
import userImg2 from "../../assets/images/player/user2.png";
import userImg3 from "../../assets/images/player/user3.png";
import userImg4 from "../../assets/images/player/user4.png";
import userImg5 from "../../assets/images/player/user5.png";
import userImg6 from "../../assets/images/player/user6.png";
import userImg7 from "../../assets/images/player/user7.png";
import inRoomGame from "../../assets/images/formgame/inroom.gif";
import captainImg from "../../assets/images/formgame/captain.png";
import { useState, useRef, useEffect } from "react";
export default function MiddleRoom({ handleRoomMatch, dataRoom, playerAuth }) {
  if (dataRoom !== null) {
    console.log(dataRoom.roomMember.length);
  }
  console.log("here", dataRoom);
  useEffect(() => {
    const playerMemberJoin = document.querySelectorAll(".player-game");
    const playerGameAvt = document.querySelectorAll(".player-game-avt");
    const playerGameName = document.querySelectorAll(".player-game-name");
    const startGame = document.querySelectorAll(
      ".room-body__middle--start-btn"
    );
    if (dataRoom !== null) {
      for (var i = 0; i < dataRoom.roomMember.length; i++) {
        if (dataRoom.roomMember[i].playerName === playerAuth.playerName) {
          playerMemberJoin[i].classList.add("player__current");
          playerMemberJoin[i].classList.remove("opacity__0");
          playerGameAvt[i].setAttribute(
            "src",
            dataRoom.roomMember[i].playerAvatar
          );
          playerGameName[i].textContent = dataRoom.roomMember[i].playerName;
        } else {
          playerMemberJoin[i].classList.remove("player__current");
          playerMemberJoin[i].classList.remove("opacity__0");
          playerGameAvt[i].setAttribute(
            "src",
            dataRoom.roomMember[i].playerAvatar
          );
          playerGameName[i].textContent = dataRoom.roomMember[i].playerName;
        }
      }
      for (let i = dataRoom.roomMember.length; i < 4; i++) {
        console.log("here", i);
        if (playerMemberJoin[i]) {
          playerMemberJoin[i].classList.add("opacity__0");
          playerMemberJoin[i].classList.remove("player__current");
        }
      }
    }
  }, [dataRoom]);
  return (
    <>
      <div className="room-body__middle--players">
        <div className="room-body__middle--player">
          <div className="player-game room-body__middle--player_1 box--shadow opacity__0">
            <img className="captain" src={captainImg} alt="" />
            <img className="player-game-avt" src="" alt="error" />
            <p className="player-game-name">Cow Cow</p>
            <div className="room-body__middle--function">
              {/* <button className="room-body__middle--delete box--shadow">
                <i className="fas fa-user-times"></i>
              </button> */}
            </div>
          </div>
        </div>
        <div className="room-body__middle--player">
          <div className="player-game room-body__middle--player_2 box--shadow opacity__0">
            <img className="player-game-avt" src="" alt="error" />
            <p className="player-game-name">Cow Cow</p>
            <div className="room-body__middle--function">
              {/* <button className="room-body__middle--delete box--shadow">
                <i className="fas fa-user-times"></i>
              </button> */}
            </div>
          </div>
          <div className="room-body__middle--img">
            <img src={inRoomGame} alt="error gif" />
          </div>
          <div className=" player-game room-body__middle--player_3 box--shadow opacity__0">
            <img className="player-game-avt" src="" alt="error" />
            <p className="player-game-name">Cow Cow</p>
            <div className="room-body__middle--function">
              {/* <button className="room-body__middle--delete box--shadow">
              <i className="fas fa-user-times"></i>
            </button> */}
            </div>
          </div>
        </div>
        <div className="room-body__middle--player">
          <div className="player-game room-body__middle--player_4 box--shadow opacity__0">
            <img className="player-game-avt" src="" alt="error" />
            <p className="player-game-name">Cow Cow</p>
            <div className="room-body__middle--function">
              {/* <button className="room-body__middle--delete box--shadow">
                <i className="fas fa-user-times"></i>
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="room-body__middle--functions">
        <div className="room-body__middle--function-game">
          <button className="invite-player box--shadow">Invite</button>
          <button className="leave-room box--shadow">
            <i className="fas fa-sign-out-alt"></i>
          </button>
        </div>
        <div
          className={`room-body__middle--start box-animation ${
            dataRoom !== null &&
            dataRoom.roomMember[0].playerName === playerAuth.playerName
              ? "open"
              : "close"
          }`}
        >
          <button
            className="room-body__middle--start-btn box--shadow"
            onClick={handleRoomMatch}
          >
            START
          </button>
        </div>

        <div
          className={`room-body__middle--start box-animation ${
            dataRoom !== null &&
            dataRoom.roomMember[0].playerName !== playerAuth.playerName
              ? "open"
              : "close"
          }`}
        >
          <button className="room-body__middle--start-btn startroom__ban--btn box--shadow">
            <i className="fas fa-times close--icon"></i>
          </button>
        </div>
      </div>
    </>
  );
}
