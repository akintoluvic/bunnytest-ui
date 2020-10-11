import axios from "axios";
import { taskbaseUrl } from "../../baseUrl"

export const getUserTasks = async (id) => {
  const resp = await axios.get(
    `${taskbaseUrl}/user/${id}`
  )
  return resp.data.data;
};

// export const getUserTasks = async (id) => {
//     try {
//       const response = await axios.get(`${taskbaseUrl}/user/${id}`);
//       settasks(response.data.data);
//     } catch (err) {

//     }
// }