import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    darkMode && document.body.classList.add("dark");
  }, [darkMode]);

  return (
    <div>
      <div
        className="px-4 py-2 bg-dark-secondaryTextColor rounded-md cursor-pointer"
        onClick={() => handleToggle()}
      >
        DarkModeToggle
      </div>
    </div>
  );
};

export default DarkModeToggle;
