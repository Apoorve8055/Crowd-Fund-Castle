import { useEffect, useState } from "react";
import { BsFillCloudMoonFill, BsSunFill } from "react-icons/bs";

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
    <div
      className="flex w-44 justify-center items-center gap-4 cursor-pointer mb-2 dark:text-dark-secondaryTextColor"
      onClick={() => handleToggle()}
    >
      {darkMode ? (
        <BsSunFill className="w-8 h-8 mt-2" />
      ) : (
        <BsFillCloudMoonFill className="w-8 h-8 mt-2" />
      )}
      <div className="text-2xl font-bold sm:hidden">Mode</div>
    </div>
  );
};

export default DarkModeToggle;
