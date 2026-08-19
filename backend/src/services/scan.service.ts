import prisma from "../lib/prisma";
import { scanResumeAPI } from "../lib/agent";

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

  try {
    const data = await scanResumeAPI(pdfPath, jobDescription);
    response = data.data.response;
  } catch (error: any) {
    response = "Failed to parse your resume";
    console.log(error.message);
  }

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

export const fetchAllScansService = async (userId: string) => {
  return await prisma.scans.findMany({
    where: {
      userId,
    },
  });
};
