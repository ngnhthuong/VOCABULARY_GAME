import axios from "axios";
import { base_url } from "../../utils/api_service";

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

const initplayer = async (initPlayer) => {
  const response = await axios.put(`${base_url}/initplayer/${playerAuth._id}`, initPlayer);
  if (response.data.data) {
    localStorage.setItem("player", JSON.stringify(response.data.data));
  }
  return response.data.data;
};
const initPlayerService = { initplayer };
export default initPlayerService;
