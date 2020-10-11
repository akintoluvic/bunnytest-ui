import axios from "axios";
import { taskbaseUrl } from "../../baseUrl"

export const createTask = async (task) => {
  const data = await axios.post(
    `${taskbaseUrl}`, 
    task
  )
  return data;
};

