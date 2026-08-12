import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Authentication = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <Card className="w-100 h-min shadow-md">
        <CardHeader className="text-xl font-semibold text-center">
          Welcome to Esperanza
          <br />
          <span className="text-xs font-medium text-neutral-600">
            Upload resume and fix it with our agent
          </span>
        </CardHeader>
        <CardContent className="flex justify-center items-center w-full flex-col gap-y-4 lg:mt-6">
          <Button size="lg" className="w-full">
            Sign In
          </Button>
          <Button size="lg" className="w-full" variant="secondary">
            Sign Up
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Authentication;
