import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="px-6 md:px-0 mx-auto max-w-3xl">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
