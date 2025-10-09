import React from "react";
import { Box, Typography, Paper, Button, Grid } from "@mui/material";
import RoleAppBar from "./RoleAppBar";

const Artisan = ({ user, onHome, onDashboard, onLogout, onProducts }) => {
  React.useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #181818 60%, #6e4b1f 100%)';
    return () => { document.body.style.background = ''; };
  }, []);
  return (
    <>
      <RoleAppBar user={user} onHome={onHome} onDashboard={onDashboard} onLogout={onLogout} onProducts={onProducts} />
      <Box sx={{ minHeight: '100vh', boxSizing: 'border-box', width: '100vw', mx: 0, pt: { xs: 8, md: 10 }, overflowX: 'hidden', p: 0 }}>
  <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto', p: { xs: 2, md: 3 } }}>
          <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', fontWeight: 900, letterSpacing: 2, color: '#bfa14a' }}>Artisan Dashboard</Typography>
          <Paper sx={{ p: 2, mb: 4, maxWidth: 500, mx: 'auto', textAlign: 'center', background: '#fff8e1' }}>
            <Typography variant="h6">Welcome, {user.name}!</Typography>
            <Typography variant="body1">Email: {user.email}</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>Role: {user.role}</Typography>
          </Paper>
          <Grid container spacing={3} justifyContent="center" alignItems="stretch">
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, minHeight: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Product Listings</Typography>
                <Button variant="contained" sx={{ mt: 2, width: '100%' }}>Add New Product</Button>
                <Button variant="outlined" sx={{ mt: 2, width: '100%' }}>View My Products</Button>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, minHeight: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Inventory Management</Typography>
                <Button variant="contained" sx={{ mt: 2, width: '100%' }}>Update Stock</Button>
                <Button variant="outlined" sx={{ mt: 2, width: '100%' }}>View Inventory Status</Button>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, minHeight: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Buyer Interaction</Typography>
                <Button variant="contained" sx={{ mt: 2, width: '100%' }}>Messages</Button>
                <Button variant="outlined" sx={{ mt: 2, width: '100%' }}>Order Requests</Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Artisan;
