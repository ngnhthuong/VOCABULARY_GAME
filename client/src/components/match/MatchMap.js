import { useEffect, useState } from "react";
export default function MatchMap({ roomMatch }) {
  var preElement = null;
  var intervalClear = 0;
  var stopintro = true;
  var firstPlay = () => {
   var intro =  setInterval(() => {
      const matchElements = document.querySelectorAll(".element");
      const randomIndex = Math.floor(Math.random() * matchElements.length);
      if (preElement !== null) {
        matchElements[preElement].classList.remove("match-element__active");
        const elementPre = matchElements[preElement].querySelectorAll("p");
        elementPre[0].textContent = "?";
      }
      preElement = randomIndex;
      matchElements[randomIndex].classList.add("match-element__active");
      const elementP = matchElements[randomIndex].querySelectorAll("p");
      elementP[0].textContent = "?";
      intervalClear++;
      if (intervalClear === 100) {
        stopintro = false;
        matchElements[preElement].classList.remove("match-element__active");
        const elementPre = matchElements[preElement].querySelectorAll("p");
        elementPre[0].textContent = "?";
        clearInterval(intro);
      }
    }, 30);
  };

  useEffect(() => {
    if (roomMatch && stopintro == true) {
      firstPlay();
    } else if (roomMatch && stopintro == false){

    }
  }, [roomMatch]);

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
          <p className="match-element__score">16</p>
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
