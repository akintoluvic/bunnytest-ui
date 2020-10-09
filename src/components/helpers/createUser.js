import axios from "axios";

export const createUser = async (user) => {
  const data = await axios.post(
    "http://localhost:5001/api/v1/users/", 
    user
  )
  return data;
};

