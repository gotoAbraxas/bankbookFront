import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MyHeaderTemplate from "../template/MyHeaderTemplate";
import MySidebarTemplate from "../template/MySidebarTemplate";
import Resist from "../pages/resist/Resist";

const HomeRouter = {
  path: "",
  element: <MyHeaderTemplate />,
  children: [
    {
      path: "/log",
      element: <MySidebarTemplate />,
      children: [],
    },
    {
      path: "/resist",
      element: <Resist />,
    },
  ],
};

const router = createBrowserRouter([HomeRouter]);

export const RootRouter = () => {
  return <RouterProvider router={router} />;
};
