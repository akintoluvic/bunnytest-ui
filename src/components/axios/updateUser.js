import axios from "axios";
import { userbaseUrl } from "../../baseUrl"

export const updateUser = async (user) => {
  const data = await axios.put(
    `${userbaseUrl}/${user._id}`, 
    user
  )
  return data;
};

