"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { handleFileUpload } from "@/utils/handleFileUpload";
import {
  CloudUpload,
  FileText,
  FileTypeCorner,
  Info,
  Loader2,
} from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [resume, setResume] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [fileUploaded, setFileUpload] = useState<boolean>(false);

  const handleUploadResume = async () => {
    setLoading(true);
    try {
      const { publicUrl: fileUrl, filePath } = await handleFileUpload(
        resume!,
        "resume",
      );

      console.log(fileUrl, filePath);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full flex-col lg:gap-y-16 lg:p-10 lg:mt-10">
      <div className="flex justify-start items-start w-full flex-col lg:gap-y-4">
        <h2 className="text-4xl font-semibold text-neutral-800 lg:w-[80%]">
          Analyse your resume against a job description
        </h2>
        <h5 className="text-base text-neutral-600 lg:w-[50%]">
          Esperanza will compare your resume with the job description and
          generate personalized recommendations to improve your matching score.
        </h5>
      </div>
      <div className="flex justify-center items-center w-full lg:gap-x-10">
        <Card className="w-[50%] lg:h-100 lg:max-h-100 shadow-md">
          <CardHeader className="flex justify-start items-start w-full flex-col lg:gap-y-2">
            <div className="flex justify-between items-center w-full">
              <h4 className="text-xl font-semibold text-neutral-800 flex items-center gap-x-3">
                <FileText className="w-6 h-6 stroke-2" />
                Your Resume
              </h4>

              <Button size="sm">Step 1</Button>
            </div>

            <p className="lg:text-xs text-neutral-600 font-medium">
              Upload your latest resume to see how well it matches a specific
              job.
            </p>
          </CardHeader>

          <CardContent className="flex justify-center items-center w-full lg:p-4">
            <label
              htmlFor="resume-upload"
              className="flex justify-center items-center w-full flex-col lg:gap-y-6 lg:p-4
                 bg-neutral-500/10 hover:bg-neutral-500/15
                 duration-300 border rounded-lg shadow-md cursor-pointer"
            >
              <div className="flex justify-center items-center w-full flex-col lg:gap-y-2">
                <h6 className="lg:text-sm font-medium text-neutral-800">
                  Drop your resume here
                </h6>

                <h6 className="lg:text-xs text-neutral-600">
                  or click to browse files
                </h6>
              </div>

              <span className="rounded-[100%] w-12 h-12 p-2 flex justify-center items-center">
                <CloudUpload className="w-10 h-10 stroke-1" />
              </span>

              <h6 className="lg:text-xs font-medium text-neutral-800">
                {resume ? resume.name : ""}
              </h6>

              <input
                id="resume-upload"
                type="file"
                accept=".pdf,application/pdf"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];

                  if (file) {
                    setResume(file);
                  }
                }}
              />

              <div className="flex justify-center items-center w-full flex-col lg:gap-y-2">
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={(e) => e.preventDefault()}
                >
                  PDF Only
                </Button>

                <h6 className="lg:text-xs text-neutral-600">Max size: 5MB</h6>
              </div>
            </label>
          </CardContent>
        </Card>

        <Card className="w-[50%] lg:h-100 lg:max-h-100 shadow-md">
          <CardHeader className="flex justify-start items-start w-full flex-col lg:gap-y-2">
            <div className="flex justify-between items-center w-full">
              <h4 className="text-xl font-semibold text-neutral-800 flex items-center gap-x-3">
                <FileTypeCorner className="w-6 h-6 stroke-2" /> Job Description
              </h4>
              <Button size={"sm"}>Step 2</Button>
            </div>
            <p className="lg:text-xs text-neutral-600 font-medium">
              Paste the job description you're applying for.
            </p>
          </CardHeader>
          <CardContent className="flex justify-center items-center w-full lg:p-4">
            <div className="flex justify-center items-center w-full flex-col lg:gap-y-6 lg:p-4 bg-neutral-500/10 border rounded-lg shadow-md">
              <textarea
                className="w-full h-50 lg:placeholder:text-xs placeholder:font-medium"
                placeholder="Paste and complete the job description here..."
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center w-full">
        <div className="flex items-center lg:gap-x-1">
          <Info className="w-3 h-3 text-neutral-600 stroke-2" />
          <h6 className="text-neutral-600 lg:text-xs">
            Requires both a resume and a job description to proceed.
          </h6>
        </div>

        <Button onClick={handleUploadResume} size={"lg"}>
          {loading ? <Loader2 className="animate-spin" /> : "Analyse Resume"}
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
