"use client";

import { loginUserAPI, signUpUserAPI } from "@/_api/user.api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Authentication = () => {
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");

  const [signUpName, setSignUpName] = useState<string>("");
  const [signUpEmail, setSignUpEmail] = useState<string>("");
  const [signUpPassword, setSignUpPassword] = useState<string>("");
  const [signUpConfirmPassword, setSignUpConfirmPassword] =
    useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async () => {
    // TODO: Implement functionality
    setLoading(true);
    try {
      const res = await loginUserAPI(loginEmail, loginPassword);
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async () => {
    // TODO: Implement functionality
    if (signUpPassword != signUpConfirmPassword) {
      console.error("Password is incorrect");
      return;
    }

    setLoading(true);
    try {
      const res = await signUpUserAPI(signUpName, signUpEmail, signUpPassword);
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
                  <Input
                    className="w-full"
                    placeholder="esperanza@grove.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="flex justify-start items-start flex-col w-full gap-y-2">
                  <Label>Password</Label>
                  <Input
                    className="w-full"
                    placeholder="********************"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
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
              <Button
                size="lg"
                className="w-full"
                variant="secondary"
                onClick={handleLogin}
              >
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
                  <Input
                    className="w-full"
                    placeholder="Anton Castilo"
                    value={signUpName}
                    onChange={(e) => setSignUpName(e.target.value)}
                  />
                </div>
                <div className="flex justify-start items-start flex-col w-full gap-y-2">
                  <Label>Email</Label>
                  <Input
                    className="w-full"
                    placeholder="esperanza@grove.com"
                    value={signUpEmail}
                    onChange={(e) => setSignUpEmail(e.target.value)}
                  />
                </div>
                <div className="flex justify-start items-start flex-col w-full gap-y-2">
                  <Label>Password</Label>
                  <Input
                    className="w-full"
                    placeholder="********************"
                    value={signUpPassword}
                    onChange={(e) => setSignUpPassword(e.target.value)}
                  />
                </div>
                <div className="flex justify-start items-start flex-col w-full gap-y-2">
                  <Label>Confirm Password</Label>
                  <Input
                    className="w-full"
                    placeholder="********************"
                    value={signUpConfirmPassword}
                    onChange={(e) => setSignUpConfirmPassword(e.target.value)}
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full mt-4"
                  onClick={handleSignUp}
                >
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
