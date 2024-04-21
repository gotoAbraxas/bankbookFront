import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const NavButtonChips = ({ to = "/", color = 'info', size = 'medium', text = "button", sx = {} }) => {
    const nav = useNavigate()

    const OnClickNav = () => {
        nav(to)
    }


    return <>
        <Button onClick={OnClickNav} color={color} size={size} sx={sx} >
            {text}
        </Button>
    </>

}


export default NavButtonChips