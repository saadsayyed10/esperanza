import { env } from "../config/env.config";

export const profilePictureAPI = (seed: string) => {
  return `${env.PFP_API}${seed.replace(" ", "_")}`;
};
