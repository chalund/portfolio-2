import React from "react";
import { useTheme } from "../../ThemeContext";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center">
      <label htmlFor="switch" className="relative mb-1 cursor-pointer">
        <input
          type="checkbox"
          id="switch"
          name="switch"
          hidden
          className="peer"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="absolute inset-0 left-0.5 my-auto block h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 transform peer-checked:translate-x-5"></span>
        <span className="block h-6 w-11 rounded-full border border-gray-950/5 bg-gray-200 transition duration-300 peer-checked:border-fuchsia-500 peer-checked:bg-fuchsia-500"></span>
      </label>

    </div>
  );
};

export default DarkModeToggle;
