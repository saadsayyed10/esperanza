"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

const Home = () => {
  const { token } = useAuth();

  return (
    <div className="flex justify-center items-center w-full">
      {token ? (
        <h1>{token} </h1>
      ) : (
        <Link href={"/authentication"}>
          <Button>Sign In</Button>
        </Link>
      )}
    </div>
  );
};

export default Home;
