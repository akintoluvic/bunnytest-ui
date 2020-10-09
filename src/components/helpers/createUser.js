import axios from "axios";
import { userbaseUrl } from "../../baseUrl"

export const createUser = async (user) => {
  const data = await axios.post(
    `${userbaseUrl}`, 
    user
  )
  return data;
};

