import axios from "axios";
import { taskbaseUrl } from "../../baseUrl"

export const updateTask = async (task) => {
  const data = await axios.put(
    `${taskbaseUrl}/${task._id}`, 
    task
  )
  return data;
};

