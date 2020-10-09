import axios from "axios";

export const createTask = async (task) => {
  const data = await axios.post(
    "http://localhost:5000/api/v1/tasks/", 
    task
  )
  return data;
};

