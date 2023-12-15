import { useDispatch, useSelector } from "react-redux";
import buyGoldImg from "../../assets/images/finance/buygold.png";
import silverImg from "../../assets/images/finance/silver.png";
import goldImg from "../../assets/images/finance/gold.png";
// Player
import avatarImg from "../../assets/images/player/user.png";
import rankImg from "../../assets/images/rank/rank2.png";

export default function Header() {
  const getPlayerDataFromStorage = () => {
    try {
      // Lấy dữ liệu từ LocalStorage với key là "player"
      const playerDataString = localStorage.getItem("player");
      // Chuyển đổi dữ liệu từ chuỗi JSON sang đối tượng JavaScript
      const playerData = JSON.parse(playerDataString);
      return playerData;
    } catch (error) {
      console.error("Error retrieving player data from LocalStorage:", error);
      return null;
    }
  };
  const playerAuth = getPlayerDataFromStorage();
  return (
    <header id="header" className="flex--row">
      <div id="player-rank__div" className="flex--row">
        <section id="main-player" className="flex--row box--shadow">
          <div id="avatar" className="box--shadow">
            <img src={playerAuth.avatar} alt="avatar" />
          </div>
          <ul id="information-player" className="flex--col">
            <li className="name-player">
              <p>{playerAuth.playerName}</p>
            </li>
            <li className="exp-player flex--row">
              <span>EXP</span>
              <div className="exp-real box--shadow">
                <div
                  className="exp-current box--shadow"
                  style={{ width: `${playerAuth.exp}%` }}
                ></div>
              </div>
            </li>
            <li className="pow-player flex--row">
              <span>POW</span>
              <div className="pow-real box--shadow">
                <div
                  className="pow-current box--shadow"
                  style={{ width: `${playerAuth.power}%` }}
                ></div>
              </div>
            </li>
          </ul>
        </section>
        <section id="rank" className="box--shadow">
          <img src={rankImg} alt="" />
        </section>
      </div>

      <div id="finance" className="flex--row">
        <ul className="finance-area buy-gold box--shadow flex--row">
          <li className="buy-gold__img">
            <img src={buyGoldImg} alt="buygold" />
          </li>
          <li className="buy-gold__title">BUY GOLD</li>
        </ul>

        <ul className="finance-area box--shadow flex--row">
          <li className="silver-img">
            <img src={silverImg} alt="" />
          </li>
          <li className="silver-number">{playerAuth.silver}</li>
          <li className="silver-button box--shadow">
            <i className="fas fa-plus"></i>
          </li>
        </ul>

        <ul className="finance-area box--shadow flex--row">
          <li className="gold-img">
            <img src={goldImg} alt="" />
          </li>
          <li className="gold-number">{playerAuth.gold}</li>
          <li className="gold-button box--shadow">
            <i className="fas fa-plus"></i>
          </li>
        </ul>
      </div>
    </header>
  );
}
