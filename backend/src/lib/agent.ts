import axios from "axios";
import { env } from "../config/env.config";

export const scanResumeAPI = async (
  pdfPath: string,
  jobDescription: string,
) => {
  return await axios.post(`${env.AGENT_API}/resume`, {
    pdfPath,
    jobDescription,
  });
};
