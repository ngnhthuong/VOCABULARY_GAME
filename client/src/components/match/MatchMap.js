import audioWinner4 from "../../assets/sounds/winner4.mp3"
import { useEffect, useState } from "react";
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
  setDataRound,
  winnerRound,
  setWinnerRound,
  modalWinnerRound,
  setModalWinnerRound,
}) {
  const [roundUsed, setRoundUsed] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ]);
  var preElement = null;
  var intervalClear = 0;

  var introRound = () => {
    return new Promise((resolve) => {
      var intro = setInterval(() => {
        const matchElements = document.querySelectorAll(".element");
        const randomIndex =
          roundUsed[Math.floor(Math.random() * roundUsed.length)];

        if (matchElements !== null && randomIndex !== null) {
          if (preElement !== null) {
            matchElements[preElement].classList.remove("match-element__active"); // bug
          }

          preElement = randomIndex;
          matchElements[randomIndex].classList.add("match-element__active"); //bug
          intervalClear++;

          if (intervalClear === 24) {
            matchElements[preElement].classList.remove("match-element__active");
            clearInterval(intro);
            intervalClear = 0;
            preElement = null;
            resolve(); // Thông báo rằng introRound đã hoàn thành
          }
        }
      }, 50);
    });
  };
  function runIntroAndCheckDataRound() {
    if (dataRound !== null && dataRound.round < 23) {
      introRound().then(() => {
        if (dataRound !== null) {
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
          scoreElements[dataRound.location].textContent = dataRound.score;
          setRoundUsed((prevRoundUsed) =>
            prevRoundUsed.filter((round) => round !== dataRound.location)
          );
          // timeout run 10s
          const newTimeoutId = setTimeout(() => {
            matchElements[dataRound.location].classList.add("block-element");
            matchElements[dataRound.location].classList.remove(
              "match-element__active"
            );
            vocabQuestion[dataRound.location].textContent = dataRound.word;
            if (dataRound && dataRound.round < 23) {
              if (dataRoom.roomMember[0].playerName === playerAuth.playerName) {
                socket.emit("send-data-round", dataRound.round + 1);
              }
              clearTimeout(newTimeoutId);
              console.log("timeoutId", newTimeoutId);
            }
          }, 10000);
          setTimeoutId(newTimeoutId);
        }
      });
    } else if (dataRound !== null && dataRound.round === 23) {
      const matchElements = document.querySelectorAll(".element");
      const scoreElements = document.querySelectorAll(".match-element__score");
      matchElements[dataRound.location].classList.add("match-element__active");
      const vocabQuestion = document.querySelectorAll(".match-element__split");
      scoreElements[dataRound.location].textContent = dataRound.score;

      setRoundUsed((prevRoundUsed) =>
        prevRoundUsed.filter((round) => round !== dataRound.location)
      );

      const newTimeoutId = setTimeout(() => {
        matchElements[dataRound.location].classList.add("block-element");
        matchElements[dataRound.location].classList.remove("match-element__active");
        vocabQuestion[dataRound.location].textContent = dataRound.word;

        if (dataRound.round === 23) {
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
          setDataRound(null);
        }
      }, 5000);
      setTimeoutId(newTimeoutId);
    }
  }

  // Call for intro or not
  useEffect(() => {
    console.log("dataRound", dataRound);
    if (dataRound !== null && dataRound.round === 0) {
      runIntroAndCheckDataRound();
    } else if (dataRound !== null && dataRound.round > 0) {
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

  // check answer
  const [answerValue, setAnswerValue] = useState("");
  const handleInputChange = (e) => {
    setAnswerValue(e.target.value);
  };

  const handleEnterPressAswer = (event) => {
    if (event.key === "Enter") {
      if (dataRound !== null) {
        console.log("winnerrow", winnerRound);
        if (answerValue.toUpperCase() === dataRound.word.toUpperCase()) {
          const correctAnswer = {
            playerName: playerAuth.playerName,
            score: dataRound.score,
            round: { ...dataRound, winner: playerAuth.playerName },
          };

          socket.emit("send-correct-answer", correctAnswer);

          setAnswerValue("");
        }
        setAnswerValue("");
      }
    }
  };

  useEffect(() => {
    if (winnerRound !== null) {
      clearTimeout(timeoutId);
      const matchElements = document.querySelectorAll(".element");
      const scoreElements = document.querySelectorAll(".match-element__score");
      const vocabQuestion = document.querySelectorAll(".match-element__split");
      matchElements[winnerRound.location].classList.add("block-element");
      matchElements[winnerRound.location].classList.remove("match-element__active");
      vocabQuestion[winnerRound.location].textContent = winnerRound.word;
      scoreElements[winnerRound.location].textContent = winnerRound.score;
      let winner4 = new Audio(audioWinner4);
      winner4.volume = 1;
      if(dataRound.round < 23){
        winner4.play();
        setModalWinnerRound(true);
      } else if (dataRound.round === 23) {
        winner4.play();
        setModalWinnerRound(true);
      }
      setTimeout(() => {
        setModalWinnerRound(false);
        winner4.pause();
        if (dataRound !== null) {
          if (dataRound.round < 23) {
            if (dataRoom.roomMember[0].playerName === playerAuth.playerName) {
              socket.emit("request-round-after-roundwin", dataRound.round + 1);
            }
          } else if (dataRound.round === 23) {
            setRoundUsed([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19,
              20, 21, 22, 23,
            ]);
            const matchElements = document.querySelectorAll(".element");
            matchElements.forEach((element) => {
              element.classList.remove("block-element");
            });
            if (dataRoom.roomMember[0].playerName === playerAuth.playerName) {
              socket.emit("send-round-endgame", true);
            }
            setDataRound(null);
          }
        }
        setWinnerRound(null);
      }, 3000);
      console.log(winnerRound);
    }
  }, [winnerRound]);

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
          value={answerValue}
          onChange={handleInputChange}
          onKeyDown={handleEnterPressAswer}
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
