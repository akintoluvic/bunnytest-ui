import { useQuery } from "react-query";
import axios from "axios";

const getUserTasksByUserId = async (_, userId) => {
  const { data } = await axios.get(
    `http://localhost:5000/api/v1/tasks/${userId}`
  );
  return data;
};

export default function usePost(userId) {
  return useQuery(["user", userId], getUserTasksByUserId);
}
