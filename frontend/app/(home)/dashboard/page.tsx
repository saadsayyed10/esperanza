import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CloudUpload, FileText, FileTypeCorner } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center w-full flex-col lg:gap-y-16 lg:p-10">
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
        <Card className="w-[50%] shadow-md">
          <CardHeader className="flex justify-start items-start w-full flex-col lg:gap-y-2">
            <div className="flex justify-between items-center w-full">
              <h4 className="text-xl font-semibold text-neutral-800 flex items-center gap-x-3">
                <FileText className="w-6 h-6 stroke-2" /> Your Resume
              </h4>
              <Button size={"sm"} variant={"outline"}>
                Step 1
              </Button>
            </div>
            <p className="lg:text-xs text-neutral-600 font-medium">
              Upload your latest resume to see how well it matches a specific
              job.
            </p>
          </CardHeader>
          <CardContent className="flex justify-center items-center w-full lg:p-4">
            <div className="flex justify-center items-center w-full flex-col lg:gap-y-6 lg:p-4 bg-neutral-500/10 border rounded-lg shadow-md">
              <Button
                size={"lg"}
                className={"rounded-[100%] w-10 h-10"}
                variant={"secondary"}
              >
                <CloudUpload className="w-10 h-10 stroke-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="w-[50%] shadow-md">
          <CardHeader className="flex justify-start items-start w-full flex-col lg:gap-y-2">
            <div className="flex justify-between items-center w-full">
              <h4 className="text-xl font-semibold text-neutral-800 flex items-center gap-x-3">
                <FileTypeCorner className="w-6 h-6 stroke-2" /> Job Description
              </h4>
              <Button size={"sm"} variant={"outline"}>
                Step 2
              </Button>
            </div>
            <p className="lg:text-xs text-neutral-600 font-medium">
              Paste the job description you're applying for.
            </p>
          </CardHeader>
          <CardContent className="flex justify-center items-center w-full flex-col lg:gap-y-6 lg:p-4 bg-neutral-500/10">
            <Button size={"lg"}>
              <CloudUpload />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
