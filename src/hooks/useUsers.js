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

const deleteUserId = async (userId) => {
  console.log(userId)
  const { data } = await axios.delete(
    `http://localhost:5000/api/v1/tasks/user/${userId}`
  );
  return data;
};

export function useDeleteUserId(userId) {
  return useQuery(["user", userId], deleteUserId);
}
