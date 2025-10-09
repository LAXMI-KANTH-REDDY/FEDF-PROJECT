

import React from "react";
import { Box, Typography, Paper, Button, Grid, Divider } from "@mui/material";
import RoleAppBar from "./RoleAppBar";

const Admin = ({ user, onHome, onDashboard, onLogout, onProducts }) => {
  React.useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #181818 60%, #6e4b1f 100%)';
    return () => { document.body.style.background = ''; };
  }, []);
  return (
    <>
      <RoleAppBar user={user} onHome={onHome} onDashboard={onDashboard} onLogout={onLogout} onProducts={onProducts} />
      <Box sx={{ minHeight: '100vh', boxSizing: 'border-box', width: '100vw', mx: 0, pt: { xs: 8, md: 10 }, overflowX: 'hidden', p: 0 }}>
  <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto', p: { xs: 2, md: 3 } }}>
          <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', fontWeight: 900, letterSpacing: 2, color: '#bfa14a' }}>Admin Dashboard</Typography>
          <Paper sx={{ p: 2, mb: 4, maxWidth: 500, mx: 'auto', textAlign: 'center', background: '#232323', color: '#fff' }}>
            <Typography variant="h6">Welcome, {user.name}!</Typography>
            <Typography variant="body1">Email: {user.email}</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>Role: {user.role}</Typography>
          </Paper>
          <Divider sx={{ my: 3, background: '#bfa14a' }} />
          <Grid container spacing={3} justifyContent="center" alignItems="stretch">
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, background: '#fff8e1', minHeight: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h6" sx={{ color: '#6e4b1f', fontWeight: 700, mb: 1 }}>User Management</Typography>
                <Typography variant="body2" sx={{ color: '#333', mb: 2 }}>Add, edit, or remove users and assign roles.</Typography>
                <Button variant="contained" color="primary" sx={{ mb: 1, width: '100%' }}>Manage User Roles</Button>
                <Button variant="outlined" color="primary" sx={{ width: '100%' }}>View All Users</Button>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, background: '#fff8e1', minHeight: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h6" sx={{ color: '#6e4b1f', fontWeight: 700, mb: 1 }}>Content Moderation</Typography>
                <Typography variant="body2" sx={{ color: '#333', mb: 2 }}>Review, approve, or reject product listings and artisan content.</Typography>
                <Button variant="contained" color="primary" sx={{ mb: 1, width: '100%' }}>Review Listings</Button>
                <Button variant="outlined" color="primary" sx={{ width: '100%' }}>Approve/Reject Products</Button>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, background: '#fff8e1', minHeight: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h6" sx={{ color: '#6e4b1f', fontWeight: 700, mb: 1 }}>Reports & Analytics</Typography>
                <Typography variant="body2" sx={{ color: '#333', mb: 2 }}>Monitor system health, view analytics, and download reports.</Typography>
                <Button variant="contained" color="primary" sx={{ mb: 1, width: '100%' }}>View Analytics</Button>
                <Button variant="outlined" color="primary" sx={{ width: '100%' }}>Download Reports</Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Admin;
