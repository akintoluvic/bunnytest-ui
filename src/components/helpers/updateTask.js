import axios from "axios";

export const updateTask = async (task) => {
  const data = await axios.put(
    `http://localhost:5000/api/v1/tasks/${task._id}`, 
    task
  )
  return data;
};

