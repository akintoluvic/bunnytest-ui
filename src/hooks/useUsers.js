import { useQuery } from "react-query";
import axios from "axios";
import { userbaseUrl } from "../baseUrl"

const getUsers = async () => {
  const { data } = await axios.get(
    `${userbaseUrl}`
  );
  return data;
};

export default function useTasks() {
  return useQuery("users", getUsers);
}
