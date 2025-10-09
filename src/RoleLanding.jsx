
import React, { useState } from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import RoleAppBar from "./RoleAppBar";
import LogoutDialog from "./LogoutDialog";

const roleContent = {
  Admin: {
    headline: "Handloom Fashion, Modern Admins",
    description: "Manage the platform, users, and content. Oversee all handloom operations.",
    button: "Go to Admin Dashboard"
  },
  Artisan: {
    headline: "Handloom Fashion, Modern Artisans",
    description: "Showcase your handloom creations and manage your inventory.",
    button: "Go to Artisan Dashboard"
  },
  Buyer: {
    headline: "Handloom Fashion, Modern Buyers",
    description: "Discover authentic handloom garments crafted by skilled artisans. Sustainable, unique, and ethically sourced.",
    button: "Shop now"
  },
  "Marketing Specialist": {
    headline: "Handloom Fashion, Modern Marketers",
    description: "Promote handloom products, create campaigns, and analyze sales data.",
    button: "Go to Marketing Dashboard"
  }
};

const RoleLanding = ({ user, onHome, onDashboard, onLogout, onProducts, handleCart }) => {
  const [logoutOpen, setLogoutOpen] = useState(false);
  const content = roleContent[user.role] || roleContent.Buyer;
  const handleLogoutRequest = () => setLogoutOpen(true);
  const handleLogoutCancel = () => setLogoutOpen(false);
  const handleLogoutConfirm = () => {
    setLogoutOpen(false);
    onLogout();
  };
  React.useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #fff8f3 60%, #f7e0c3 100%)';
    return () => { document.body.style.background = ''; };
  }, []);
  return (
  <Box sx={{ minHeight: '100vh', boxSizing: 'border-box', width: '100vw', p: 0, pt: { xs: 8, md: 10 }, mx: 0, overflowX: 'hidden' }}>
    <RoleAppBar user={user} onHome={onHome} onDashboard={onDashboard} onLogout={handleLogoutRequest} onProducts={onProducts} handleCart={handleCart} />
    <LogoutDialog open={logoutOpen} onClose={handleLogoutCancel} onConfirm={handleLogoutConfirm} />
    <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto', p: { xs: 2, md: 6 } }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ mt: 2 }}>
        <Grid item xs={12} md={7}>
          <Typography variant="h2" sx={{ color: '#222', fontWeight: 900, mb: 2, fontFamily: 'Lobster, cursive', letterSpacing: 2, textAlign: { xs: 'center', md: 'left' } }}>
            {content.headline}
          </Typography>
          <Typography variant="body1" sx={{ color: '#333', mb: 3, fontSize: 20, textAlign: { xs: 'center', md: 'left' } }}>
            {content.description}
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
          <Paper elevation={6} sx={{ p: 4, borderRadius: 4, background: 'linear-gradient(135deg, #f9d29d 0%, #ffb07c 100%)', color: '#fff', minHeight: 180, minWidth: 320, maxWidth: 400, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 16px #ffb07c88' }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: '#fff' }}>
              Handloom Cotton Saree
            </Typography>
            <Typography variant="body2" sx={{ color: '#fff', opacity: 0.85 }}>
              Elegant handloom cotton saree woven by skilled artisans.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ mt: 8, background: '#f7f7f7', borderRadius: 3, p: 4, textAlign: 'center', maxWidth: 700, mx: 'auto' }}>
        <Typography variant="h4" sx={{ fontWeight: 900, mb: 2, color: '#222', letterSpacing: 1 }}>
          Featured Products
        </Typography>
        <Typography variant="body1" sx={{ color: '#333' }}>
          Handpicked items from our artisans.
        </Typography>
      </Box>
      </Box>
    </Box>
  );
};

export default RoleLanding;
