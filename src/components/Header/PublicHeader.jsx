import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import * as Constants from "../../utils/Constants";
import { useSelector } from "react-redux";

const PublicHeader = ({ activeMenu, onScrollToPageSection }) => {
  const navigate = useNavigate();
  const scrollY = useRef(0);
  const [activeScroll, setActiveScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isUserLoggedIn = useSelector((state) => state.userSlice.isUserLoggedIn);
  const menuItems = [
    { id: "hero", label: "Home" },
    { id: "how-it-works", label: "How It Works" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
      console.log(activeScroll);
      if (scrollY.current >= 200) {
        setActiveScroll(true);
      } else {
        setActiveScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-10 top-0 left-0 right-0 text-light-cardBgColor ease-in-out duration-500 px-8 ${
        activeScroll && "bg-dark-backgroundColor"
      }`}
    >
      <div className="mx-auto flex items-center justify-between py-4">
        <div className="font-DM text-2xl font-bold capitalize sm:text-3xl cursor-pointer">
          {Constants.COMPANY_NAME}
        </div>
        <nav className="hidden gap-4 font-bold md:flex">
          <ul className="flex gap-4 items-center">
            {menuItems.map((menuItem) => (
              <li
                key={menuItem.id}
                className={`py-2 cursor-pointer  ${
                  activeMenu === menuItem.id && "border-b-2"
                }`}
                onClick={() => onScrollToPageSection(menuItem.id)}
              >
                <a>{menuItem.label}</a>
              </li>
            ))}
            {!isUserLoggedIn && (
              <li
                key="login"
                className="cursor-pointer"
                onClick={() => navigate("/login")}
              >
                <a>Login</a>
              </li>
            )}
          </ul>
          {isUserLoggedIn && (
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2 bg-light-cardBgColor text-dark-cardBgColor rounded-xl cursor-pointer"
              onClick={() => navigate("/dashboard")}
            >
              My Dashboard
            </motion.div>
          )}
        </nav>

        {isMenuOpen ? (
          <MdClose
            className="text-3xl md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        ) : (
          <IoMenuSharp
            className="text-3xl md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        )}
      </div>
    </header>
  );
};

export default PublicHeader;
