import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
          <Dialog>
            <DialogTrigger className="w-full">
              <Button size="lg" className="w-full">
                Sign In
              </Button>
            </DialogTrigger>
            <DialogContent>
              <h5 className="text-xl font-semibold text-center mb-4">
                Login to Esperanza
              </h5>
              <div className="flex justify-start items-start flex-col w-full gap-y-6">
                <div className="flex justify-start items-start flex-col w-full gap-y-2">
                  <Label>Email</Label>
                  <Input className="w-full" placeholder="esperanza@grove.com" />
                </div>
                <div className="flex justify-start items-start flex-col w-full gap-y-2">
                  <Label>Password</Label>
                  <Input
                    className="w-full"
                    placeholder="********************"
                  />
                </div>

                <Button size="lg" className="w-full mt-4">
                  Sign In
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger className="w-full">
              <Button size="lg" className="w-full" variant="secondary">
                Sign Up
              </Button>
            </DialogTrigger>
            <DialogContent>
              <h5 className="text-xl font-semibold text-center mb-4">
                Create Esperanza Account
              </h5>
              <div className="flex justify-start items-start flex-col w-full gap-y-6">
                <div className="flex justify-start items-start flex-col w-full gap-y-2">
                  <Label>Name</Label>
                  <Input className="w-full" placeholder="Anton Castilo" />
                </div>
                <div className="flex justify-start items-start flex-col w-full gap-y-2">
                  <Label>Email</Label>
                  <Input className="w-full" placeholder="esperanza@grove.com" />
                </div>
                <div className="flex justify-start items-start flex-col w-full gap-y-2">
                  <Label>Password</Label>
                  <Input
                    className="w-full"
                    placeholder="********************"
                  />
                </div>
                <div className="flex justify-start items-start flex-col w-full gap-y-2">
                  <Label>Confirm Password</Label>
                  <Input
                    className="w-full"
                    placeholder="********************"
                  />
                </div>

                <Button size="lg" className="w-full mt-4">
                  Sign Up
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default Authentication;
