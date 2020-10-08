import { useQuery } from "react-query";
import axios from "axios";

const getUserTasksByUserId = async (userId) => {
  const { data } = await axios.get(
    `http://localhost:5000/api/v1/tasks/user/${userId}`
  );
  return data;
};

export default function useTasksByUserId(userId) {
  return useQuery(["user", userId], getUserTasksByUserId);
}
