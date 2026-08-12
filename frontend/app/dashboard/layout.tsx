import Navbar from "@/_components/Navbar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
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
