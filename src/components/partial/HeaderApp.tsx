import { Search, AccountCircle } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Tabs,
  Tab,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React from "react";
import logo from "../../images/GroundUp.png";

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export const HeaderApp = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ alignItems: "flex-end", display: "flex" }}>
          <Box
            sx={{
              height: "64px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={logo} />
          </Box>

          <Tabs value={1} aria-label="nav tabs example" sx={{ height: "64px" }}>
            <LinkTab label="Dashboard" href="/" />
            <LinkTab label="Alerts" href="/alerts" />
          </Tabs>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" aria-label="show setting" color="inherit">
              <SettingsIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Box
              sx={{
                ml: 4,
                display: "flex",
                height: "64px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ pl: 4, borderLeft: "thin solid #55555554" }}>
                Welcome Admin!
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
