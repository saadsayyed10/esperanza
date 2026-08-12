import { Request, Response } from "express";
import * as userServices from "../services/user.service";

export const registerUserController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const data = { name, email, password };
  if (!data) {
    return res.status(400).json({ error: "Required fields are missing" });
  }
  try {
    const { token, user } = await userServices.registerUserService(
      name,
      email,
      password,
    );
    res
      .status(201)
      .json({ message: `Account created for ${user.name}`, token, user });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const loginUserController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const data = { email, password };
  if (!data) {
    return res.status(400).json({ error: "Required fields are missing" });
  }
  try {
    const { token, user } = await userServices.loginUserService(
      email,
      password,
    );
    res
      .status(200)
      .json({ message: `You have logged in to Esperanza`, token, user });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const fetchUserProfileController = async (
  req: Request,
  res: Response,
) => {
  try {
    const userId = (req as any).user;
    if (!userId) {
      return res
        .status(401)
        .json({
          error: "Unauthorized: User ID not found while fetching profile",
        });
    }

    const user = await userServices.fetchUserProfileService(userId);
    res.status(200).json({ user });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
