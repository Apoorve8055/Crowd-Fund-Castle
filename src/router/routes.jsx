import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "../pages/MasterLayout/MasterLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Properties from "../pages/Properties/Properties";
import Portfolio from "../pages/Portfolio/Portfolio";
import Account from "../pages/Account/Account";
import BuyNow from "../pages/BuyNow/BuyNow";
import LandingPage from "../pages/LandingPage/";

const routes = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  {
    path: "/dashboard",
    element: <MasterLayout />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "properties/:id", element: <Properties /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "account", element: <Account /> },
      { path: "properties/:id/buynow", element: <BuyNow /> },
    ],
  },
]);

export default routes;
