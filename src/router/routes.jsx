import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "../pages/MasterLayout/MasterLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Properties from "../pages/Properties/Properties";

const routes = createBrowserRouter([
  { path: "/", element: <h1>Home</h1> },
  {
    path: "/dashboard",
    element: <MasterLayout />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "properties/:id", element: <Properties /> },
      { path: "portfolio", element: <h1>portfolio</h1> },
      { path: "account", element: <h1>account</h1> },
    ],
  },
]);

export default routes;
