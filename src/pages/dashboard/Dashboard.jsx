import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <Box> 
    <AppBar sx={{background: 'rgba(0, 0, 0, 0)', boxShadow: 0}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Felipe França
          </Typography>
          <Button color="inherit">Redes Sociais</Button>
        </Toolbar>
      </AppBar>
    <Box>
      <Outlet/>
    </Box>
    </Box>
  );
}
export default Dashboard;
