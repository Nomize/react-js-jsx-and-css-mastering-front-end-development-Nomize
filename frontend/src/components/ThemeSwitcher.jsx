// src/components/ThemeSwitcher.jsx
import React from "react";
import { useTheme } from "@/context/ThemeContext.jsx";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-2 rounded-xl 
                 bg-blue-100 dark:bg-gray-700 text-black dark:text-gray-100 
                 hover:scale-105 transition-transform duration-200 shadow-sm"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      <span className="text-sm font-medium">
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
}
