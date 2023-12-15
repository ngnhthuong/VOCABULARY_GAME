import { useEffect, useState } from "react";
export default function MatchMap() {
var preElement = null;
  useEffect(() => {
    setInterval(() => {
      const matchElements = document.querySelectorAll(".element");
      const randomIndex = Math.floor(Math.random() * matchElements.length);
      if (preElement !== null) {
        matchElements[preElement].classList.remove("match-element__active");
        const elementPre = matchElements[preElement].querySelectorAll("p");
        elementPre[0].textContent = "?";
        console.log("pre",preElement);
      }
      preElement = randomIndex;
      console.log("pre",preElement);
      console.log("Random",randomIndex)
      matchElements[randomIndex].classList.add("match-element__active");
      const elementP = matchElements[randomIndex].querySelectorAll("p");
      elementP[0].textContent = "100";
    }, 5000);
  }, []);

  return (
    <>
      <div className="match-row">
        <div className="element match-element match-element__border-lefttop">
          <p className="match-element__score">?</p>
          <p className="match-element__split">st/en/t/d/u</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">st/en/t/d/u</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">st/en/t/d/u</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element match-element__border-righttop">
          <p className="match-element__score">?</p>
          <p className="match-element__split">st/en/t/d/u</p>
        </div>
      </div>
      <div className="match-row">
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">st/en/t/d/u</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">st/en/t/d/u</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">st/en/t/d/u</p>
        </div>
        <div className="match-element block-element"></div>
      </div>
      <div className="match-row">
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">st/en/t/d/u</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">st/en/t/d/u</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">st/en/t/d/u</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">st/en/t/d/u</p>
        </div>
      </div>
      <div className="match-row">
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">st/en/t/d/u</p>
        </div>
        <input
          className="element-answer box--shadow"
          type="text"
          placeholder="Enter your answer here!"
        />
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">st/en/t/d/u</p>
        </div>
        <div className="match-element block-element"></div>
      </div>
      <div className="match-row">
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">in/ve/st/ig/at/ion</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">le/im/pm/en/ti</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">16</p>
          <p className="match-element__split">st/en/t/d/u</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">st/en/t/d/u</p>
        </div>
      </div>
      <div className="match-row">
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">st/en/t/d/u</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">st/en/t/d/u</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">st/en/t/d/u</p>
        </div>
        <div className="match-element block-element"></div>
      </div>
      <div className="match-row">
        <div className="element match-element match-element__border-leftbottom">
          <p className="match-element__score">?</p>
          <p className="match-element__split">in/ve/st/ig/at/ion</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">le/im/pm/en/ti/ta/on</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element">
          <p className="match-element__score">?</p>
          <p className="match-element__split">st/en/t/d/u</p>
        </div>
        <div className="match-element block-element"></div>
        <div className="element match-element match-element__border-rightbottom">
          <p className="match-element__score">?</p>
          <p className="match-element__split">st/en/t/d/u</p>
        </div>
      </div>
    </>
  );
}
