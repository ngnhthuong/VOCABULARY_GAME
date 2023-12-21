import { forwardRef, useImperativeHandle, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import userImg1 from "../../assets/images/player/user1.png";

const RankingModal = forwardRef(function RankingModal({ ranking }, ref) {
  const rankingModal = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        rankingModal.current.showModal();
      },
    };
  });
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
  console.log(ranking);
  return createPortal(
    <dialog ref={rankingModal} className="open_modal">
      <div className="modal__background">
        <div className="modal__frame--ranking box--shadow">
          <div className="modal__header">
            <div className="modal__background-ranking--title">
              <p className="modal__header--tille">RANKING</p>
            </div>
            <form method="dialog" className="box--shadow close__modal--ranking">
              <button>
                <i className="fas fa-times close--icon"></i>
              </button>
            </form>
          </div>
          <div className="modal--ranking box--shadow">
            <div className="ranking__header--parent box--shadow">
              <div className="ranking__headers ">
                <div className="ranking--header" style={{ width: "15%" }}>
                  No
                </div>
                <div className="ranking--header" style={{ width: "18%" }}></div>
                <div className="ranking--header" style={{ width: "44%" }}>
                  Name
                </div>
                <div className="ranking--header" style={{ width: "23%" }}>
                  Elo
                </div>
              </div>
            </div>
            <ul className="ranking-lists box--shadow">
              {ranking !== null &&
                ranking.map((rank, index) => (
                  <li key={index} className={`ranking-list box--shadow ${playerAuth.playerName === rank.playerName ? 'color--user' : ''}`}>
                    <div className="ranking--number">{index + 1}</div>
                    {console.log(index + 1)}
                    <div
                      className={`ranking--avatar box--shadow ${
                          index + 1 === 1
                          ? "color--top1"
                          : index + 1 === 2
                          ? "color--top2"
                          : index + 1 === 3
                          ? "color--top3"
                          : "color--another"
                      }`}
                    >
                      <img src={rank.avatar} alt="" />
                    </div>
                    <div className="ranking--name">{rank.playerName}</div>
                    <div className="ranking--elo">{rank.elo}</div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default RankingModal;
