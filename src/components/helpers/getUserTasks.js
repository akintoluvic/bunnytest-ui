import axios from "axios";

export const createUser = async (user) => {
  const data = await axios.post(
    "http://localhost:5001/api/v1/users/", 
    user
  )
  return data;
};

export const getUserTasks = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/v1/tasks/user/${id}`);
  //   setTasks(response.data.data.tasks);
  return response;
    console.log(response)
  } catch (err) {

  }
  
}
