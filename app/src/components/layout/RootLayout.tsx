import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";
import PreviewContextProvider from "@/context/previewContext";
import Footer from "@/components/footer/Footer";

const RootLayout = () => {
  return (
    <PreviewContextProvider>
      <div className="px-6 md:px-0 mx-auto max-w-2xl">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </PreviewContextProvider>
  );
};

export default RootLayout;
