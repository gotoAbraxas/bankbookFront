import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MyHeaderTemplate from "../template/MyHeaderTemplate";

const HomeRouter = {
    path: '',
    element: <MyHeaderTemplate />,
    children: [
        {
            path: 'mypage',
            element: <div>My Page</div>,
        },
    ],
};





// RootRouter.tsx
const router = createBrowserRouter([HomeRouter,]);

export const RootRouter = () => {
    return <RouterProvider router={router} />;

}