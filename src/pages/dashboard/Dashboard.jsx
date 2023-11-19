import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import { Outlet } from "react-router-dom";
import { Link, Tooltip, Zoom } from "@mui/material";
import '../../assets/styles/Dashboard.css'
import Social from "./views/components/social";

function Dashboard() {
  return (
    <Box>
      <AppBar sx={{ background: "rgba(0, 0, 0, 0)", boxShadow: 0 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Tooltip title="Meu Github" TransitionComponent={Zoom}>
          <Link href='https://github.com/FelipeFrancca' sx={{ textDecoration: 'none'}}>
            <Button className='myName' sx={{ color: "#fff", gap: 1 }}>
              <GitHubIcon/>
              
              <Typography sx={{ fontSize: 15, fontWeight: 500 }}>
                Felipe França
              </Typography>
            </Button>
              </Link>
          </Tooltip>
          <Social />
        </Toolbar>
      </AppBar>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}
export default Dashboard;
