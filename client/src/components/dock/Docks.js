import { useState, useRef, useEffect } from "react";
import axios from "axios";
import SettingModal from "./SettingModal.js";
import RankingModal from "./RankingModal.js";
import StoreModal from "./StoreModal.js";
import BackpackModal from "./Backpack.js";
import { base_url } from "../../utils/api_service";
import heroChartImg from "../../assets/images/docks/heroChart.png";
import storeImg from "../../assets/images/docks/store.png";
import backpackImg from "../../assets/images/docks/backpack.png";
import settingImg from "../../assets/images/docks/setting.png"
import "./docks.css";

export default function Docks() {
  const [ranking, setRanking] = useState(null);

  // Fetch ranking data when the component mounts
  useEffect(() => {
    axios
      .get(`${base_url}/getRankPlayer`)
      .then((response) => {
        console.log(response.data);
        setRanking(response.data.data);
      })
      .catch((error) => {
        console.error("Lỗi khi gọi dữ liệu từ server:", error);
      });
  }, []);

  const settingModal = useRef();
  const rankingModal = useRef();
  const storeModal = useRef();
  const backpackModal = useRef();

  // Open modal and re-fetch ranking data
  function handleOpenModal(nameDialog) {
    if (nameDialog === "setting") {
      settingModal.current.open();
    } else if (nameDialog === "ranking") {
      axios
        .get(`${base_url}/getRankPlayer`)
        .then((response) => {
          console.log("Ranking data fetched successfully:", response.data);
          setRanking(response.data.data);
          rankingModal.current.open();
        })
        .catch((error) => {
          console.error("Error fetching ranking data:", error);
        });
    } else if (nameDialog === "store") {
      storeModal.current.open();
    } else if (nameDialog === "backpack") {
      backpackModal.current.open();
    }
  }

  return (
    <>
      <SettingModal ref={settingModal} />
      <RankingModal ranking={ranking} ref={rankingModal} />
      <StoreModal ref={storeModal} />
      <BackpackModal ref={backpackModal} />
      <ul className="docks box--shadow flex--row">
        <li
          onClick={() => handleOpenModal("ranking")}
          className="dock flex--col"
        >
          <img src={heroChartImg} alt="dock error" />
          <p className="title-icon">Ranking</p>
        </li>
        <li onClick={() => handleOpenModal("store")} className="dock flex--col">
          <img src={storeImg} alt="dock error" />
          <p className="title-icon">Store</p>
        </li>
        <li
          onClick={() => handleOpenModal("backpack")}
          className="dock flex--col"
        >
          <img src={backpackImg} alt="dock error" />
          <p className="title-icon">Backpack</p>
        </li>
        <li onClick={() => handleOpenModal("setting")} className="dock flex--col">
          <img src={settingImg} alt="dock error" />
          <p className="title-icon">Setting</p>
        </li>
      </ul>
    </>
  );
}
