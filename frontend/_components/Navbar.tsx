"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Loader2, LogOut } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface FetchProfilePicture {
  id: string;
  profiprofilePicture: string;
}

const Navbar = () => {
  const { token, logout, hydrate } = useAuth();
  const [pfp, setPfp] = useState<FetchProfilePicture | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogout = () => {
    setLoading(true);

    logout();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    console.log("Logged out");

    hydrate();

    router.replace("/authentication");
  };

  useEffect(() => {
    const handleFetchProfilePicture = async () => {}; // TODO: Implement functionaltiy
  }, [token]);

  useEffect(() => {
    if (!token) {
      router.replace("/authentication");
    }
  }, []);

  return (
    <div className="flex justify-between items-center lg:px-10 lg:py-6 bg-white text-black z-50">
      <h1 className="text-2xl font-bold">Esparanza</h1>
      <div className="flex justify-end items-end w-full lg:gap-x-4">
        <div className="w-10 h-10 rounded-[100%] bg-neutral-700 hover:bg-neutral-800 cursor-pointer"></div>
        <Button onClick={handleLogout}>
          {loading ? <Loader2 className="animate-spin" /> : <LogOut />}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
