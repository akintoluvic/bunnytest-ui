import axios from "axios";
import { userbaseUrl, taskbaseUrl } from "../../baseUrl"

export const deleteUser = async (id) => {
    const requestOne = axios.delete(`${userbaseUrl}/${id}`);
    const requestTwo = axios.delete(`${taskbaseUrl}/user/${id}`);
        try {
        await axios.all([requestOne, requestTwo])
        } catch (err) {}
    }

