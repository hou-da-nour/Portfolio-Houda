// components/ThemeToggleButton.jsx
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggleButton = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 border rounded-md bg-purple-300 hover:bg-purple-500 text-white transition"
    >
      {theme === "light" ? "🌙 Mode Sombre" : "☀️ Mode Clair"}
    </button>
  );
};

export default ThemeToggleButton;
