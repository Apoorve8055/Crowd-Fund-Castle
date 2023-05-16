import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/SideBar/Sidebar";
import PrivatecHeader from "../../components/Header/PrivateHeader";

const MasterLayout = () => {
  return (
    <main>
      <PrivatecHeader />
      <SideBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MasterLayout;
