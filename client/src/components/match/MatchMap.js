import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

export default function MatchMap({
  dataMap,
  roomMatch,
  playerAuth,
  dataUsingMatch,
  dataRound,
  socket,
  dataRoom,
  setTimeoutId,
  timeoutId,
  resetMatchMap,
}) {
  const [roundUsed, setRoundUsed] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ]);
  console.log(roundUsed);
  console.log(dataUsingMatch !== null ? dataUsingMatch : "");
  var preElement = null;
  var intervalClear = 0;
  // var stopintro = true;

  var introRound = () => {
    return new Promise((resolve) => {
      var intro = setInterval(() => {
        const matchElements = document.querySelectorAll(".element");
        const randomIndex =
          roundUsed[Math.floor(Math.random() * roundUsed.length)];

        if (preElement !== null) {
          console.log("preElement", preElement);
          matchElements[preElement].classList.remove("match-element__active");
        }
        // if (dataRound !== null && dataRound.round === 23) {
        //   console.log("lastround",dataRound.round);
        //   preElement = null;
        //   resolve();
        // }

        preElement = randomIndex;
        matchElements[randomIndex].classList.add("match-element__active");
        console.log("sang len");
        intervalClear++;

        if (intervalClear === 10) {
          matchElements[preElement].classList.remove("match-element__active");
          clearInterval(intro);
          intervalClear = 0;
          preElement = null;
          resolve(); // Thông báo rằng introRound đã hoàn thành
        }
      }, 200);
    });
  };

  function runIntroAndCheckDataRound() {
    if (dataRound !== null && dataRound.round < 23) {
      introRound().then(() => {
        if (dataRound !== null) {
          console.log("check data round");
          console.log("dataRound", dataRound);
          const matchElements = document.querySelectorAll(".element");
          const scoreElements = document.querySelectorAll(
            ".match-element__score"
          );
          matchElements[dataRound.location].classList.add(
            "match-element__active"
          );
          const vocabQuestion = document.querySelectorAll(
            ".match-element__split"
          );
          console.log("sang len 2");

          scoreElements[dataRound.location].textContent = dataRound.score;
          setRoundUsed((prevRoundUsed) =>
            prevRoundUsed.filter((round) => round !== dataRound.location)
          );

          const id = setTimeout(() => {
            console.log("sang len last");
            matchElements[dataRound.location].classList.add("block-element");
            matchElements[dataRound.location].classList.remove(
              "match-element__active"
            );
            vocabQuestion[dataRound.location].textContent = dataRound.word;
            if (dataRound.round < 23) {
              if (dataRoom.roomMember[0].playerName === playerAuth.playerName) {
                console.log(dataRoom.roomMember[0].playerName);
                socket.emit("send-data-round", dataRound.round + 1);
              }
              clearTimeout(timeoutId);
            } else if (dataRound.round === 23) {
              // set round check lại = []
              setRoundUsed([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18,
                19, 20, 21, 22, 23,
              ]);

              // remove block element
              matchElements.forEach((element) => {
                element.classList.remove("block-element");
              });

              // gửi lệnh kết thúc game
              if (dataRoom.roomMember[0].playerName === playerAuth.playerName) {
                socket.emit("send-round-endgame", true);
              }
              clearTimeout(timeoutId);
            }
          }, 5000);
        }
      });
    } else if (dataRound !== null && dataRound.round === 23) {
      console.log("check data round");
      console.log("dataRound", dataRound);
      const matchElements = document.querySelectorAll(".element");
      const scoreElements = document.querySelectorAll(".match-element__score");
      matchElements[dataRound.location].classList.add("match-element__active");
      const vocabQuestion = document.querySelectorAll(".match-element__split");
      console.log("sang len 2");

      scoreElements[dataRound.location].textContent = dataRound.score;
      setRoundUsed((prevRoundUsed) =>
        prevRoundUsed.filter((round) => round !== dataRound.location)
      );

      const id = setTimeout(() => {
        console.log("sang len last");
        matchElements[dataRound.location].classList.add("block-element");
        matchElements[dataRound.location].classList.remove(
          "match-element__active"
        );
        vocabQuestion[dataRound.location].textContent = dataRound.word;
        if (dataRound.round < 23) {
          if (dataRoom.roomMember[0].playerName === playerAuth.playerName) {
            console.log(dataRoom.roomMember[0].playerName);
            socket.emit("send-data-round", dataRound.round + 1);
          }
          clearTimeout(timeoutId);
        } else if (dataRound.round === 23) {
          // set round check lại = []
          setRoundUsed([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19,
            20, 21, 22, 23,
          ]);

          // remove block element
          matchElements.forEach((element) => {
            element.classList.remove("block-element");
          });

          // gửi lệnh kết thúc game
          if (dataRoom.roomMember[0].playerName === playerAuth.playerName) {
            socket.emit("send-round-endgame", true);
          }
          clearTimeout(timeoutId);
        }
      }, 5000);
    }
  }

  function handClearTimeOut() {
    clearTimeout(timeoutId);
  }

  console.log("timeout", timeoutId);
  // Call for intro or not
  useEffect(() => {
    console.log("dataRound", dataRound);
    if (dataRound !== null && dataRound.round === 0) {
      console.log("round with intro");
      runIntroAndCheckDataRound();
    } else if (dataRound !== null && dataRound.round > 0) {
      console.log("round not intro");
      runIntroAndCheckDataRound();
    }
  }, [dataRound]);

  // change value
  useEffect(() => {
    if (dataUsingMatch !== null) {
      const vocabQuestion = document.querySelectorAll(".match-element__split");
      const scoreElements = document.querySelectorAll(".match-element__score");
      for (var i = 0; i < vocabQuestion.length; i++) {
        scoreElements[i].textContent = "?";
        vocabQuestion[i].textContent = dataUsingMatch.words[i].wordSeparate;
      }
    }
  }, [dataUsingMatch]);

  return (
    <>
      <div className="match-row">
        <div className="element match-element match-element__border-lefttop">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element match-element__border-righttop">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
      </div>
      <div className="match-row">
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        <div className="match-element block-element"></div>
      </div>
      <div className="match-row">
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
      </div>
      <div className="match-row">
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        <input
          className="element-answer box--shadow"
          type="text"
          placeholder="Enter your answer here!"
        />
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        <div className="match-element block-element"></div>
      </div>
      <div className="match-row">
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score"></p>
          <p className="match-element__split">??/??/??</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
      </div>
      <div className="match-row">
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        <div className="match-element block-element"></div>
      </div>
      <div className="match-row">
        <div className="element match-element match-element__border-leftbottom">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element match-element__border-rightbottom">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
      </div>
    </>
  );
}
