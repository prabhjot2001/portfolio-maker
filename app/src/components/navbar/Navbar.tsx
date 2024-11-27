import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Sparkles, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import Logo from "@/components/shared/Logo";
import { useState } from "react";

const Navbar = () => {
  const navigationLinks = [
    {
      label: "home",
      url: "/",
    },
    {
      label: "projects",
      url: "/projects",
    },
    {
      label: "blog",
      url: "/blog",
    },
    {
      label: "contact",
      url: "/contact",
    },
    {
      label: "Sign In",
      url: "/auth",
    },
    {
      label: "Dashboard",
      url: "/dashboard",
    },
    // {
    //   link: "Explore more",
    //   url: "/explore-more",
    // },
  ];
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <nav className="z-50 border-b sticky top-0 py-6 mb-10 backdrop-blur-sm bg-background/80 flex items-center justify-between">
        {/* <--- desktop nav ---> */}
        <div className="hidden md:flex items-center space-x-4">
          <Logo />
          {navigationLinks.map((link, idx) => (
            <Link key={idx} to={link.url} className="text-muted-foreground">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Logo />
          <p className="font-primary">prabhjot.dev</p>
        </div>

        <div>
          <div className="flex items-center">
            <Button variant={"ghost"} size={"icon"}>
              <Sparkles />
            </Button>
            <ThemeToggle />
            <div className="md:hidden">
              <Button
                variant={"ghost"}
                size={"icon"}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                {toggleMenu ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`z-40 fixed w-full backdrop-blur-sm bg-background/80 border-b transition-all ease-in-out duration-200 ${
          toggleMenu ? "top-[5.2rem]" : "-translate-y-96"
        } md:hidden`}
      >
        <div className="flex flex-col p-4 gap-2">
          {navigationLinks.map((link, idx) => (
            <Link
              onClick={() => setToggleMenu(false)}
              key={idx}
              to={link.url}
              className="flex items-center gap-2 text-muted-foreground font-semibold"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
