"use client";

import { loginUserAPI, signUpUserAPI } from "@/_api/user.api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";
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
  const { setAuth } = useAuth();

  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!loginEmail.includes("@")) {
      console.log("Invalid email");
      return;
    }

    if (!loginEmail) {
      console.log("Please type your email");
      return;
    }

    if (loginPassword.length < 8) {
      console.log("Invalid password");
      return;
    }

    if (!loginPassword) {
      console.log("Please type your password");
      return;
    }

    setLoading(true);
    try {
      await loginUserAPI(loginEmail, loginPassword).then((res) => {
        const token = res.data.token;
        const user = res.data.user;

        setAuth(token!, user);
        console.log(res.data.message);

        setLoginEmail("");
        setLoginPassword("");

        router.push("/dashboard");
      });
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async () => {
    if (!signUpName) {
      console.log("Please type your full name");
      return;
    }

    if (!signUpEmail.includes("@")) {
      console.log("Invalid email");
      return;
    }

    if (!signUpEmail) {
      console.log("Please type your email");
      return;
    }

    if (signUpPassword.length < 8) {
      console.log(
        "Invalid password, password must contain atleast contain 8 characters",
      );
      return;
    }

    if (!signUpPassword) {
      console.log("Please type your password");
      return;
    }

    if (signUpPassword != signUpConfirmPassword) {
      console.log("Provided password and confirm password does not match");
      return;
    }

    setLoading(true);
    try {
      await signUpUserAPI(signUpName, signUpEmail, signUpPassword).then(
        (res) => {
          const token = res.data.token;
          const user = res.data.user;

          setAuth(token!, user);
          console.log(res.data.message);

          setLoginEmail("");
          setLoginPassword("");

          router.push("/dashboard");
        },
      );
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
            <DialogTrigger
              className="w-full"
              render={<Button size="lg" className="w-full" />}
            >
              Sign In
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
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="flex justify-start items-start flex-col w-full gap-y-2">
                  <Label>Password</Label>
                  <Input
                    className="w-full"
                    placeholder="********************"
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>

                <Button
                  disabled={loading}
                  size="lg"
                  className="w-full mt-4"
                  onClick={handleLogin}
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger
              className="w-full"
              render={
                <Button size="lg" className="w-full" variant="secondary" />
              }
            >
              Sign Up
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
                    type="email"
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
                  disabled={loading}
                  size="lg"
                  className="w-full mt-4"
                  onClick={handleSignUp}
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Sign Up"
                  )}
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
