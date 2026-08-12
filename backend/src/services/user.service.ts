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

export const loginUserService = async (email: string, password: string) => {
  const user = await prisma.users.findUnique({
    where: {
      email,
    },
  });
  if (!user) throw new Error("Your account does not exist, please sign up.");

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) throw new Error("Typed password is not correct.");

  const token = generateToken(user.id!);

  return { token, user };
};

export const fetchUserProfileService = async (userId: string) => {
  return await prisma.users.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      profilePicture: true,
      createdAt: true,
    },
  });
};
