"use client";

import Navbar from "@/_components/Navbar";
import { useAuth } from "@/hooks/useAuth";
import { ReactNode, useEffect } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const { hydrate } = useAuth();

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return (
    <main>
      <header>
        <Navbar />
      </header>
      <div>{children}</div>
      <footer></footer>
    </main>
  );
};

export default DashboardLayout;
