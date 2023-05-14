import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "../pages/MasterLayout/MasterLayout";

const routes = createBrowserRouter([
  { path: "/", element: <h1>Home</h1> },
  {
    path: "/dashboard",
    element: <MasterLayout />,
    children: [
      { path: "", element: <h1>Dashboard</h1> },
      { path: "properties", element: <h1>properties</h1> },
      { path: "properties/:id", element: <h1>specific properties </h1> },
      { path: "portfolio", element: <h1>portfolio</h1> },
      { path: "account", element: <h1>account</h1> },
    ],
  },
]);

export default routes;
