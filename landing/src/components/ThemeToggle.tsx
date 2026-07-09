import { useLayoutEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "mf-theme";

const getInitial = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">(getInitial);

  // useLayoutEffect (not useEffect) so the class lands before the browser
  // paints — otherwise dark-mode visitors see a flash of the light theme.
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
      className="inline-flex items-center justify-center w-9 h-9 border border-border hover:border-foreground transition-colors text-foreground/80 hover:text-foreground"
    >
      {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
};
