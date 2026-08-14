"use client";

import { fetchUserProfilePictureAPI } from "@/_api/user.api";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Bell, Loader2, LogOut } from "lucide-react";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { token, logout } = useAuth();
  const [pfp, setPfp] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const router = useRouter();

  const handleLogout = () => {
    setLoading(true);

    logout();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    console.log("Logged out");

    router.replace("/authentication");
  };

  useEffect(() => {
    const handleFetchProfilePicture = async () => {
      if (!token) {
        return;
      }

      setLoadingData(true);
      try {
        await fetchUserProfilePictureAPI(token!)
          .then((res) => {
            console.log(res.data.pfp.profilePicture);
            setPfp(res.data.pfp.profilePicture);
          })
          .catch((err) => {
            console.log(err.response.data.error);
          });
      } catch (error: any) {
        console.log(error);
      } finally {
        setLoadingData(false);
      }
    };

    handleFetchProfilePicture();
  }, [token]);

  return (
    <div className="flex justify-between items-center lg:px-10 lg:py-6 bg-white text-black z-50">
      <h1 className="text-2xl font-bold">Esperanza</h1>
      <div className="flex justify-end items-end w-full lg:gap-x-4">
        <Button variant="ghost">
          {loading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Bell className="w-4 h-4 stroke-2" />
          )}
        </Button>

        {pfp ? (
          loadingData ? (
            <div className="w-10 h-10 rounded-[100%] bg-neutral-700/40 hover:bg-neutral-800/40 animate-pulse cursor-pointer" />
          ) : (
            <img
              src={pfp}
              alt="User Pfp"
              width={40}
              height={40}
              className="rounded-[100%] cursor-pointer w-10 h-10 border border-black"
              onClick={handleLogout}
            />
          )
        ) : (
          <div className="w-10 h-10 rounded-[100%] bg-neutral-700/40 hover:bg-neutral-800/40 animate-pulse cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
