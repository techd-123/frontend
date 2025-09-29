// Api/Axios.js
import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:8000", // your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = async (userData) => {
  try {
    const response = await API.post("/accounts/register/", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
