import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon-lg"
      onClick={toggleTheme}
      className="rounded-full transition-smooth hover:bg-primary/10 dark:hover:bg-primary/20"
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="h-6 w-6 text-primary" />
      ) : (
        <Sun className="h-6 w-6 text-primary" />
      )}
    </Button>
  );
}
