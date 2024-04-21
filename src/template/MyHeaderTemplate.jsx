import { Outlet } from "react-router-dom";
import MyHeader from "../pages/header/MyHeader"

const MyHeaderTemplate = () => {



    return <>
        <MyHeader />
        <Outlet />
    </>
}

export default MyHeaderTemplate