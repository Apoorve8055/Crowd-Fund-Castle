import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/SideBar/Sidebar";
import PrivatecHeader from "../../components/Header/PrivateHeader";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllPropertiesList } from "../../store/thunk";

const MasterLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPropertiesList());
  }, []);
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
