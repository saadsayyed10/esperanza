import axios from "axios";
import { apiUrl } from "./apiUrl";

export const loginUser = async (email: string, password: string) => {
  return await axios.post(`${apiUrl}/user/login`, { email, password });
};

export const signUpUser = async (
  name: string,
  email: string,
  password: string,
) => {
  return await axios.post(`${apiUrl}/user/signup`, { name, email, password });
};
