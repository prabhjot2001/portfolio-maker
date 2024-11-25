import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const getCurrentTheme = () => {
    return localStorage.getItem("vite-ui-theme");
  };

  const changeTheme = () => {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  return (
    <Button variant="ghost" size="icon" onClick={changeTheme}>
      {getCurrentTheme() === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-blue-600" />
      )}
    </Button>
  );
}
