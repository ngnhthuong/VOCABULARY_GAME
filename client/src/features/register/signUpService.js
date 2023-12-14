import axios from "axios";
import { base_url } from "../../utils/api_service";
const register = async (playerData) => {
  const response = await axios.post(`${base_url}/register`, playerData);
  if (response.data) {
    return response.data;
    console.log(response.data);
  }
};
const signUpService = { register };
export default signUpService;
