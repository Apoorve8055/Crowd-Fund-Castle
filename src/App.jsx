import { RouterProvider } from "react-router-dom";
import routes from "./router/routes.jsx";
const App = () => {
  return (
    <div className=" bg-light-backgroundColor text-light-primaryTextColor dark:bg-dark-backgroundColor dark:text-dark-primaryTextColor">
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
