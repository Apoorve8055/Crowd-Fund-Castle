import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PublicHeader = ({ activeMenu, onScrollToPageSection }) => {
  const navigate = useNavigate();
  const scrollY = useRef(0);
  const [activeScroll, setActiveScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          Crowd Fund Castle
        </div>
        <nav className="hidden gap-4 font-bold sm:flex">
          <ul className="flex gap-4 items-center">
            <li
              className={`py-2  ${activeMenu === "hero" && "border-b-2"}`}
              onClick={() => onScrollToPageSection("hero")}
            >
              <a>Home</a>
            </li>
            <li
              className={`py-2  ${
                activeMenu === "how-it-works" && "border-b-2"
              }`}
              onClick={() => onScrollToPageSection("how-it-works")}
            >
              <a>How It Works</a>
            </li>
            <li
              className={`py-2  ${
                activeMenu === "testimonials" && "border-b-2"
              }`}
              onClick={() => onScrollToPageSection("testimonials")}
            >
              <a>Testimonials</a>
            </li>

            <li
              className={`py-2  ${activeMenu === "contact" && "border-b-2"}`}
              onClick={() => onScrollToPageSection("contact")}
            >
              <a>Contact</a>
            </li>
          </ul>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="px-4 py-2 bg-light-cardBgColor text-dark-cardBgColor rounded-xl cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            My Dashboard
          </motion.div>
        </nav>

        {isMenuOpen ? (
          <MdClose
            className="text-3xl sm:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        ) : (
          <IoMenuSharp
            className="text-3xl sm:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        )}
      </div>
    </header>
  );
};
export default PublicHeader;
