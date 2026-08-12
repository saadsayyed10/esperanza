import bcrypt from "bcryptjs";
import prisma from "../lib/prisma";
import { generateToken } from "../lib/token";
import { profilePictureAPI } from "../lib/pfp";

export const registerUserService = async (
  name: string,
  email: string,
  password: string,
) => {
  const existingUser = await prisma.users.findUnique({
    where: {
      email,
    },
  });
  if (existingUser)
    throw new Error("Your account already exist, please login.");

  const hashPassword = await bcrypt.hash(password, 10);
  const profilePicture = profilePictureAPI(name);

  const user = await prisma.users.create({
    data: {
      name,
      email,
      password: hashPassword,
      profilePicture,
    },
  });

  const token = generateToken(user.id!);

  return { token, user };
};
