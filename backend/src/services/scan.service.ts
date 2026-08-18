import axios from "axios";
import prisma from "../lib/prisma";
import { env } from "../config/env.config";

export const scanResumeService = async (
  userId: string,
  resumeUrl: string,
  resumePath: string,
  jobDescription: string,
) => {
  const existingResume = await prisma.scans.findUnique({
    where: {
      resumeUrl,
    },
  });
  if (existingResume)
    throw new Error("Resume already exists, please delete from your profile.");

  const pdfPath = resumeUrl;
  let response;

  return await prisma.scans.create({
    data: {
      resumeUrl,
      resumePath,
      jobDescription,
      response,
      userId,
    },
  });
};
