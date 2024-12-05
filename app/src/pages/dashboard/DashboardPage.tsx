import EditorTab from "@/components/dashboard/EditorTab";
import HomeTab from "@/components/dashboard/HomeTab";
import ProfessionalTab from "@/components/dashboard/ProfessionalTab";
import SettingsTab from "@/components/dashboard/SettingsTab";
import StatsTab from "@/components/dashboard/StatsTab";
import SectionHeading from "@/components/shared/SectionHeading";
import TooltipWrapper from "@/components/shared/TooltipWrapper";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

import {
  BriefcaseBusiness,
  ChartLine,
  Home,
  LogOut,
  Rss,
  Settings,
} from "lucide-react";
import { useState } from "react";

import { Link } from "react-router-dom";

const DashboardPage = () => {
  const { handleLogout } = useAuth();
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
      label: "Settings",
      url: "",
    },
  ];

  const [tabValue, setTabValue] = useState("");

  const handleTabSwitch = (tab: any) => {
    setTabValue(tab);
  };

  const switchTab = (tab: any) => {
    switch (tab) {
      case "Home": {
        return <HomeTab />;
      }
      case "Stats": {
        return <StatsTab />;
      }
      case "Professional": {
        return <ProfessionalTab />;
      }
      case "Blog": {
        return <EditorTab />;
      }
      case "Settings": {
        return <SettingsTab />;
      }
      default: {
        return <HomeTab />;
      }
    }
  };

  return (
    <div className="pb-10">
      <div>
        <SectionHeading>Dashboard</SectionHeading>
      </div>
      <div className="relative flex flex-col md:flex-row border rounded-lg">
        {/* <--- sidebar navigation ---> */}
        <aside className="flex border-b md:border-r md:border-b-0 md:flex-col items-center justify-between md:gap-10">
          {/* <--- upper part ---> */}
          <div className="p-2 flex md:flex-col ">
            {dashboardNavigationLinks.map((link, idx) => (
              <TooltipWrapper message={link.label} side={"right"}>
                <Button
                  onClick={() => {
                    setTabValue(link.label);
                  }}
                  variant={"ghost"}
                  size={"icon"}
                >
                  {link.icon}
                </Button>
              </TooltipWrapper>
            ))}
          </div>

          {/* <--- lower part ---> */}
          <div className="p-2 flex md:flex-col">
            {staticLinks.map((link, idx) => (
              <TooltipWrapper message={link.label} side={"right"}>
                <Button
                  onClick={() => {
                    setTabValue(link.label);
                  }}
                  variant={"ghost"}
                  size={"icon"}
                >
                  {link.icon}
                </Button>
              </TooltipWrapper>
            ))}
            <TooltipWrapper message={"Logout"} side={"right"}>
              <Button
                variant={"ghost"}
                size={"icon"}
                onClick={() => {
                  handleLogout();
                }}
              >
                <LogOut />
              </Button>
            </TooltipWrapper>
          </div>
        </aside>

        {/* <--- main content ---> */}
        <main className="w-full px-4 md:pt-4 h-[80vh] overflow-y-auto">
          {switchTab(tabValue)}
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
