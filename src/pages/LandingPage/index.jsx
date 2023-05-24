import { memo, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "./Hero";
import HowItWork from "./HowItWork";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const LandingPage = () => {
  const [activeMenu, setActiveMenu] = useState("hero");

  const onScrollToPageSection = (menuItem) => {
    setActiveMenu(menuItem);
    document.getElementById(menuItem).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Hero
        activeMenu={activeMenu}
        onScrollToPageSection={onScrollToPageSection}
      />
      <HowItWork />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default memo(LandingPage);
