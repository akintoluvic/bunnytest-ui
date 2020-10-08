import { queryCache, useMutation } from "react-query";
import axios from "axios";

const createTask = async (_, task) => {
  const { data } = await axios.post(
    "http://localhost:5001/api/v1/tasks/", 
    task
  );
  return data;
};

export default function useCreateTask(task) {
  return useMutation("tasks", createTask,  
  {onSettled: () => queryCache.refetchQueries('tasks'),}
  );
}

