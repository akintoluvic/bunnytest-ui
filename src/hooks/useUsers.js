import { useQuery } from "react-query";
import axios from "axios";

const getUsers = async () => {
  const { data } = await axios.get(
    "http://localhost:5001/api/v1/users/"
  );
  return data;
};

export default function useTasks() {
  return useQuery("users", getUsers);
}
