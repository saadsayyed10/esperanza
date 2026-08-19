import axios from "axios";
import { apiUrl } from "./apiUrl";

export const scanResumeAPI = async (
  resumeUrl: string,
  resumePath: string,
  jobDescription: string,
  token: string,
) => {
  return await axios.post(
    `${apiUrl}/scan/resume`,
    {
      resumeUrl,
      resumePath,
      jobDescription,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};
