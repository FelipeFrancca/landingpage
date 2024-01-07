import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import "../../assets/styles/Dashboard.css";
import MenuComponent from "./views/components/menuComponent";

import Tooltip from "@mui/material/Tooltip";

import Logo from "../../assets/images/logo.png"
import { Outlet } from "react-router-dom";
import Zoom from "@mui/material/Zoom";
import { Typography } from "@mui/material";


function ResponsiveAppBar() {

  return (
    <Box>
      <AppBar
        id="appBar"
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", marginLeft: "16px", "img": {width: "30px"} }}
            >
              <Tooltip
                title="Voltar para o início"
                placement="bottom"
                TransitionComponent={Zoom}
                sx={{borderRadius: "50px", padding: "5px",}}
              >
                <IconButton href="/SiteTemplate1">
                  <img src={Logo} alt="Logo"/>
                  <Typography fontSize={20} fontWeight={900}>Padaria Virtual</Typography>
                </IconButton>
              </Tooltip>
            </Box>
             <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row"}}>
                <MenuComponent />
                <MenuComponent />
                <MenuComponent />
                <MenuComponent />
              </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}

export default ResponsiveAppBar;
