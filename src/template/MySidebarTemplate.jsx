import {
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
import { Outlet } from "react-router-dom";
import MySide from "../pages/side/MySide";

const MySidebarTemplate = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <MySide />
        </Grid>
        <Grid item xs={9}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};
export default MySidebarTemplate;
