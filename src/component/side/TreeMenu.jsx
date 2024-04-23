import {
  Box,
  Collapse,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TreeMenu = ({ props }) => {
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  const handleClick = () => {
    props.isCategory ? setOpen(!open) : nav(props.to);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={props.name} />
        {props?.isCategory ? open ? <ExpandLess /> : <ExpandMore /> : <></>}
      </ListItemButton>
      {props?.isCategory && (
        <Box sx={{ pl: 2 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List>
              {props?.children.map((item, index) => (
                <TreeMenu props={item} key={index} />
              ))}
            </List>
          </Collapse>
        </Box>
      )}
    </>
  );
};
export default TreeMenu;
