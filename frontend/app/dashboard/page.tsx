"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Loader2, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Dashboard = () => {
  const { token, logout, hydrate } = useAuth();

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

  return (
    <div>
      {token && <h1>token: {token}</h1>}
      <Button onClick={handleLogout}>
        {loading ? <Loader2 className="animate-spin" /> : <LogOut />}
      </Button>
    </div>
  );
};

export default Dashboard;
