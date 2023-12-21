import audioWinner4 from "../../assets/sounds/winner4.mp3";
import bipAudio from "../../assets/sounds/bip.mp3";
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
  hiddenInputAnswer,
  setHiddenInputAnswer,
}) {
  const [roundUsed, setRoundUsed] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ]);
  const [bipClock, setBipClock] = useState(new Audio(bipAudio));
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
      }, 100);
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
          }, 15000);
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
        matchElements[dataRound.location].classList.remove(
          "match-element__active"
        );
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

  var FirstIntro = () => {
    return new Promise((resolve) => {
      var flag_first_intro = 1;
      const queryFive = document.querySelectorAll(".five");
      const queryFour = document.querySelectorAll(".four");
      const queryThree = document.querySelectorAll(".three");
      const queryTwo = document.querySelectorAll(".two");
      const queryOne = document.querySelectorAll(".one");
      const queryZero = document.querySelectorAll(".zero");

      var fistIntro = setInterval(() => {
        if (flag_first_intro === 1) {
          // 5
          try {
            bipClock.play();
          } catch (error) {
            console.error("Error while playing bip clock:", error);
          }          
          queryFive.forEach((element) => {
            element.classList.add("match-element__active--intro");
          });
          setTimeout(() => {
            flag_first_intro++;
          }, [1000]);
        } else if (flag_first_intro === 2) {
          // 4
          // remove intro 5
          queryFive.forEach((element) => {
            element.classList.remove("match-element__active--intro");
          });
          //  add intro 4
          try {
            bipClock.play();
          } catch (error) {
            console.error("Error while playing bip clock:", error);
          }          
          queryFour.forEach((element) => {
            element.classList.add("match-element__active--intro");
          });
          // set time out ++
          setTimeout(() => {
            flag_first_intro++;
          }, [1000]);
        } else if (flag_first_intro === 3) {
          queryFour.forEach((element) => {
            element.classList.remove("match-element__active--intro");
          });
          try {
            bipClock.play();
          } catch (error) {
            console.error("Error while playing bip clock:", error);
          }          
          queryThree.forEach((element) => {
            element.classList.add("match-element__active--intro");
          });
          setTimeout(() => {
            flag_first_intro++;
          }, [1000]);
          // 3
        } else if (flag_first_intro === 4) {
          //  2
          queryThree.forEach((element) => {
            element.classList.remove("match-element__active--intro");
          });
          try {
            bipClock.play();
          } catch (error) {
            console.error("Error while playing bip clock:", error);
          }          
          queryTwo.forEach((element) => {
            element.classList.add("match-element__active--intro");
          });
          setTimeout(() => {
            flag_first_intro++;
          }, [1000]);
        } else if (flag_first_intro === 5) {
          // 1
          queryTwo.forEach((element) => {
            element.classList.remove("match-element__active--intro");
          });
          try {
            bipClock.play();
          } catch (error) {
            console.log("error volume bip clock", error);
          }
          queryOne.forEach((element) => {
            element.classList.add("match-element__active--intro");
          });
          setTimeout(() => {
            flag_first_intro++;
          }, [1000]);
        } else if (flag_first_intro === 6) {
          // 0
          queryOne.forEach((element) => {
            element.classList.remove("match-element__active--intro");
          });
          try {
            bipClock.play();
          } catch (error) {
            console.log("error volume bip clock", error);
          }
          queryZero.forEach((element) => {
            element.classList.add("match-element__active--intro");
          });
          setTimeout(() => {
            flag_first_intro++;
          }, [1000]);
        } else if (flag_first_intro === 7) {
          queryZero.forEach((element) => {
            element.classList.remove("match-element__active--intro");
          });
          setHiddenInputAnswer(false);
          clearInterval(fistIntro);
          resolve();
        }
      }, 1100);
    });
  };

  // Call for intro or not
  useEffect(() => {
    console.log("dataRound", dataRound);
    if (dataRound !== null && dataRound.round === 0) {
      FirstIntro().then(() => runIntroAndCheckDataRound());
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
      matchElements[winnerRound.location].classList.remove(
        "match-element__active"
      );
      vocabQuestion[winnerRound.location].textContent = winnerRound.word;
      scoreElements[winnerRound.location].textContent = winnerRound.score;
      let winner4 = new Audio(audioWinner4);
      winner4.volume = 1;
      if (dataRound.round < 23) {
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
    }
  }, [winnerRound]);

  return (
    <>
      <div className="match-row">
        {/* 1 */}
        <div className="element match-element match-element__border-lefttop">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        {/* 2 */}
        <div className="match-element block-element"></div>
        {/* 3 */}
        <div className="element match-element five four three two zero">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        {/* 4 */}
        <div className="match-element block-element five three two one zero"></div>
        {/* 5 */}
        <div className="element match-element five  three two zero">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        {/* 6 */}
        <div className="match-element block-element"></div>
        {/* 7 */}
        <div className="element match-element match-element__border-righttop">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
      </div>
      <div className="match-row">
        {/* 8 */}
        <div className="match-element block-element"></div>
        {/* 9 */}
        <div className="element match-element ">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        {/* 10 */}
        <div className="match-element block-element five four one zero"></div>
        {/* 11 */}
        <div className="element match-element  one">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        {/* 12 */}
        <div className="match-element block-element  three two zero"></div>
        {/* 13 */}
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        {/* 14 */}
        <div className="match-element block-element"></div>
      </div>
      <div className="match-row">
        {/* 15 */}
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        {/* 16 */}
        <div className="match-element block-element"></div>
        {/* 17 */}
        <div className="element match-element five four zero">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        {/* 18 */}
        <div className="match-element block-element one"></div>
        {/* 19 */}
        <div className="element match-element four three two zero">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        {/* 20 */}
        <div className="match-element block-element"></div>
        {/* 21 */}
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
      </div>
      <div className="match-row">
        {/* 22 */}
        <div className="match-element block-element"></div>
        {/* 23 */}
        <div className="element match-element ">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        {/* 24 25 26 */}
        {hiddenInputAnswer ? (
          <>
            <div className="match-element block-element five four three two zero"></div>
            <div className="match-element five  one three two">
              <p
                className="match-element__score--intro"
                style={{ fontSize: "2rem" }}
              >
                COWCOW
              </p>
              <p className="match-element__split--intro">XIN CHAO</p>
            </div>
            <div className="match-element block-element five four three two zero"></div>
          </>
        ) : (
          <input
            className="element-answer box--shadow five  three two"
            type="text"
            placeholder="Enter your answer here!"
            value={answerValue}
            onChange={handleInputChange}
            onKeyDown={handleEnterPressAswer}
          />
        )}

        {/* 27 */}
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        {/* 28 */}
        <div className="match-element block-element"></div>
      </div>

      <div className="match-row">
        {/* 29 */}
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        {/* 30 */}
        <div className="match-element block-element "></div>
        {/* 31 */}
        <div className="element match-element four two zero ">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        {/* 32 */}
        <div className="match-element block-element four one "></div>
        {/* 33 */}
        <div className="element match-element five four three zero">
          <p className="match-element__score"></p>
          <p className="match-element__split">??/??/??</p>
        </div>
        {/* 34 */}
        <div className="match-element block-element four"></div>
        {/* 35 */}
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
      </div>
      <div className="match-row">
        {/* 36 */}
        <div className="match-element block-element"></div>
        {/* 37 */}
        <div className="element match-element ">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        {/* 38 */}
        <div className="match-element block-element two zero"></div>
        {/* 39 */}
        <div className="element match-element one">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        {/* 40 */}
        <div className="match-element block-element five four three zero"></div>
        {/* 41 */}
        <div className="element match-element ">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        {/* 42 */}
        <div className="match-element block-element"></div>
      </div>
      <div className="match-row">
        {/* 43 */}
        <div className="element match-element match-element__border-leftbottom">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        {/* 44 */}
        <div className="match-element block-element "></div>
        {/* 45 */}
        <div className="element match-element five three two zero">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        {/* 46 */}
        <div className="match-element block-element five three two one zero"></div>
        {/* 47 */}
        <div className="element match-element five four three two zero">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
        {/* 48 */}
        <div className="match-element block-element"></div>
        {/* 49 */}
        <div className="element match-element match-element__border-rightbottom">
          <p className="match-element__score">?</p>
          <p className="match-element__split">??/??/??</p>
        </div>
      </div>
    </>
  );
}
