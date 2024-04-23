import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Grid,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import NavButtonChips from "../../common/NavButtonChips";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useState } from "react";

const MyHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const nav = useNavigate();
  const handleNav = (e) => {
    const { id } = e.target;
    nav(id);
    handleClose();
  };

  const isLogin = false;

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h4">BankBook</Typography>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  size="large"
                >
                  <FormatListBulletedIcon color="info" />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem id="/resist" onClick={handleNav}>
                    계좌 등록
                  </MenuItem>
                </Menu>

                <NavButtonChips text="HOME" color="info" to="/" size="large" />
                <NavButtonChips
                  text="고객사조회"
                  color="info"
                  to="/log"
                  size="large"
                />
              </Box>
              <Box>
                {isLogin ? (
                  <></>
                ) : (
                  <>
                    <NavButtonChips
                      text="로그인"
                      color="info"
                      to="/login"
                      size="large"
                    />
                  </>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default MyHeader;
