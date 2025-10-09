import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RoleMenu from "./RoleMenu";


const RoleAppBar = ({ user, onHome, onDashboard, onLogout, onProducts, handleCart }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  return (
  <AppBar position="fixed" sx={{ background: '#6e4b1f', width: '100vw', left: 0, top: 0, boxSizing: 'border-box', overflowX: 'hidden', zIndex: 1300 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        <RoleMenu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} user={user} onLogout={onLogout} />
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1 }}>
          Handloom Hub
        </Typography>
  <Button color="inherit" sx={{ mr: 2 }} onClick={onHome}>Home</Button>
  <Button color="inherit" sx={{ mr: 2 }} onClick={onProducts}>Products</Button>
  <Button color="inherit" sx={{ mr: 2 }} onClick={onDashboard}>Dashboard</Button>
  <IconButton color="inherit" onClick={handleCart}>
          <Badge badgeContent={1} color="warning">
            <ShoppingCartIcon />
          </Badge>
          <Typography variant="caption" sx={{ color: 'white', ml: 0.5 }}>
            Cart
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default RoleAppBar;
