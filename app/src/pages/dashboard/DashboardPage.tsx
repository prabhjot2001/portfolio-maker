import Editor from "@/components/shared/Editor";
import SectionHeading from "@/components/shared/SectionHeading";
import TooltipWrapper from "@/components/shared/TooltipWrapper";
import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  BriefcaseBusiness,
  ChartLine,
  Home,
  LogOut,
  Rss,
  Settings,
} from "lucide-react";

import { Link } from "react-router-dom";

const DashboardPage = () => {
  const dashboardNavigationLinks = [
    {
      icon: <Home />,
      label: "Home",
      url: "",
    },
    {
      icon: <ChartLine />,
      label: "Stats",
      url: "",
    },
    {
      icon: <BriefcaseBusiness />,
      label: "Professional",
      url: "",
    },
    {
      icon: <Rss />,
      label: "Blog",
      url: "",
    },
  ];

  const staticLinks = [
    {
      icon: <Settings />,
      label: "Setttings",
      url: "",
    },
    {
      icon: <LogOut />,
      label: "Logout",
      url: "",
    },
  ];

  return (
    <div className="pb-10">
      <div>
        <SectionHeading>Dashboard</SectionHeading>
      </div>
      <div className="relative flex gap-4 border">
        {/* <--- sidebar navigation ---> */}
        <aside className="flex border-r flex-col items-center justify-between gap-10">
          {/* <--- upper part ---> */}
          <div className="p-2 flex flex-col">
            {dashboardNavigationLinks.map((link, idx) => (
              <TooltipWrapper message={link.label} side={"right"}>
                <Button variant={"ghost"} size={"icon"}>
                  {link.icon}
                </Button>
              </TooltipWrapper>
            ))}
          </div>

          {/* <--- lower part ---> */}
          <div className="p-2 flex flex-col">
            {staticLinks.map((link, idx) => (
              <TooltipWrapper message={link.label} side={"right"}>
                <Button variant={"ghost"} size={"icon"}>
                  {link.icon}
                </Button>
              </TooltipWrapper>
            ))}
          </div>
        </aside>

        {/* <--- main content ---> */}
        <main className="w-full py-2 pr-4">
          <h3 className="text-lg font-medium font-primary mb-6">Home</h3>
          <div className="h-[24rem]">
            {/* // todo: here goes the dynamic component */}
            <Editor />
          </div>
          <div className="flex justify-end">
            <Button asChild variant={"default"} size={"sm"}>
              <Link to="/preview">See preview</Link>
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;

type LinkCardPropsType = {
  children: string;
};
const LinkCard = ({ children }: LinkCardPropsType) => {
  return (
    <Link
      to={""}
      className="rounded-md border text-muted-foreground hover:text-accent-foreground hover:shadow-md hover:underline flex items-center justify-center p-6 bg-secondary underline-offset-2"
    >
      {children}
    </Link>
  );
};
