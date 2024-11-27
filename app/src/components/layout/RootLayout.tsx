import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";
import PreviewContextProvider from "@/context/previewContext";

const RootLayout = () => {
  return (
    <PreviewContextProvider>
      <div className="px-6 md:px-0 mx-auto max-w-2xl">
        <Navbar />
        <Outlet />
      </div>
    </PreviewContextProvider>
  );
};

export default RootLayout;
