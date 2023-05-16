import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/SideBar/Sidebar";
import PrivatecHeader from "../../components/Header/PrivateHeader";
import { useState } from "react";

const MasterLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <main>
      <PrivatecHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="flex">
        <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MasterLayout;
