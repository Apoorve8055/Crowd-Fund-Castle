import { motion } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as Constants from "../../utils/Constants";

const PublicHeader = ({ activeMenu, onScrollToPageSection }) => {
  const navigate = useNavigate();
  const scrollY = useRef(0);
  const [openToggle, setOpenToggle] = useState(false);
  const [activeScroll, setActiveScroll] = useState(false);
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

  const handleMenu = (id) => {
    onScrollToPageSection(id);
    setOpenToggle(false);
  };

  return (
    <header
      className={`fixed z-10 top-0 left-0 right-0 text-light-cardBgColor ease-in-out duration-500 px-8 ${
        activeScroll ? "bg-dark-backgroundColor" : ""
      }`}
    >
      <div className="mx-auto flex items-center justify-between py-4">
        <div className="font-DM text-2xl font-bold capitalize sm:text-3xl cursor-pointer">
          {Constants.COMPANY_NAME}
        </div>
        <nav
          className={`gap-4 font-bold md:flex ${!openToggle ? "hidden" : ""}`}
        >
          <ul
            className={`flex gap-4 items-center ${
              openToggle
                ? "fixed top-0 bottom-0 right-0 left-0 bg-dark-backgroundColor flex-col justify-center items-center"
                : ""
            }`}
          >
            {menuItems.map((menuItem) => (
              <li
                key={menuItem.id}
                className={`py-2 cursor-pointer ${
                  activeMenu === menuItem.id ? "border-b-2" : ""
                }`}
                onClick={() => handleMenu(menuItem.id)}
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

        {openToggle ? (
          <MdClose
            className="text-3xl md:hidden cursor-pointer z-50 text-dark-primaryTextColor"
            onClick={() => setOpenToggle(false)}
          />
        ) : (
          <IoMenuSharp
            className="text-3xl md:hidden cursor-pointer"
            onClick={() => setOpenToggle(true)}
          />
        )}
      </div>
    </header>
  );
};

export default memo(PublicHeader);
