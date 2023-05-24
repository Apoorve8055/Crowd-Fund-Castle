import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/SideBar/Sidebar";
import PrivatecHeader from "../../components/Header/PrivateHeader";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPropertiesList } from "../../store/thunk";

const MasterLayout = () => {
  const isUserLoggedIn = useSelector((state) => state.userSlice.isUserLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/");
    } else {
      dispatch(fetchAllPropertiesList());
    }
  }, [isUserLoggedIn, navigate, dispatch]);

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
