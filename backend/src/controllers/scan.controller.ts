import { Request, Response } from "express";
import * as scanServices from "../services/scan.service";

export const scanResumeController = async (req: Request, res: Response) => {
  const { resumeUrl, resumePath, jobDescription } = req.body;

  const data = { resumeUrl, resumePath, jobDescription };
  if (!data) {
    return res.status(400).json({ error: "Required fields are missing" });
  }

  try {
    const userId = (req as any).user.id;
    if (!userId) {
      return res
        .status(404)
        .json({ error: "Unauthorized: User must be logged in to scan resume" });
    }

    const resume = await scanServices.scanResumeService(
      userId,
      resumeUrl,
      resumePath,
      jobDescription,
    );

    res.status(201).json({
      message: "Resume scanning successful",
      response: resume.response,
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const fetchAllScansController = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    if (!userId) {
      return res
        .status(404)
        .json({ error: "Unauthorized: User must be logged in to scan resume" });
    }

    const scans = await scanServices.fetchAllScansService(userId);

    res.status(200).json({ total: scans.length, scans });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};
