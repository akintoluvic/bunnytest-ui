import { queryCache, useMutation } from "react-query";
import axios from "axios";

const createUser = async (_, user) => {
  const { data } = await axios.post(
    "http://localhost:5000/api/v1/users/", 
    user
  );
  return data;
};

export default function useCreateUser(user) {
  return useMutation("users", createUser,  
  {onSettled: () => queryCache.refetchQueries('users'),}
  );
}

