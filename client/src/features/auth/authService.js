import axios from "axios";
import { base_url } from "../../utils/api_service";

const login = async (playerData) => {
  const response = await axios.post(`${base_url}/login`, playerData, {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
  if (response.data.data) {
    localStorage.setItem("player", JSON.stringify(response.data.data));
  }
  return response.data.data;
};

const authService = {
  login,
};

export default authService;
