import axios from "axios";
import { apiUrl } from "./apiUrl";

export const loginUserAPI = async (email: string, password: string) => {
  return await axios.post(`${apiUrl}/user/login`, { email, password });
};

export const signUpUserAPI = async (
  name: string,
  email: string,
  password: string,
) => {
  return await axios.post(`${apiUrl}/user/signup`, { name, email, password });
};

export const fetchUserProfileAPI = async (token: string) => {
  return await axios.get(`${apiUrl}/user/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const fetchUserProfilePictureAPI = async (token: string) => {
  return await axios.get(`${apiUrl}/user/profile/picture`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
