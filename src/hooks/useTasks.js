import { useQuery } from "react-query";
import axios from "axios";

const getTasks = async () => {
  const { data } = await axios.get(
    "http://localhost:5000/api/v1/tasks/"
  );
  return data;
};

export default function useTasks() {
  return useQuery("tasks", getTasks);
}