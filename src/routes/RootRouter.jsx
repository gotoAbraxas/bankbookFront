import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MyHeaderTemplate from "../template/MyHeaderTemplate";
import MySidebarTemplate from "../template/MySidebarTemplate";

const HomeRouter = {
    path: '',
    element: <MyHeaderTemplate />,
    children: [
        {
            path: '/log',
            element: <MySidebarTemplate />,
            children: [


            ]
        },
    ],
};





// RootRouter.tsx
const router = createBrowserRouter([HomeRouter,]);

export const RootRouter = () => {
    return <RouterProvider router={router} />;

}