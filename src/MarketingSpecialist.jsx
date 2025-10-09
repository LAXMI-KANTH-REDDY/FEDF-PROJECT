
import React from "react";
import { Box, Typography, Paper, Button, Grid } from "@mui/material";
import RoleAppBar from "./RoleAppBar";

const MarketingSpecialist = ({ user, onHome, onDashboard, onLogout, onProducts }) => (
  <>
  <RoleAppBar user={user} onHome={onHome} onDashboard={onDashboard} onLogout={onLogout} onProducts={onProducts} />
  <Box sx={{ p: { xs: 2, md: 4 }, minHeight: '100vh', boxSizing: 'border-box', background: 'linear-gradient(135deg, #181818 60%, #6e4b1f 100%)', width: '100vw', mx: 'auto', pt: { xs: 8, md: 10 }, overflowX: 'hidden' }}>
    <Typography variant="h3" gutterBottom>Marketing Specialist Dashboard</Typography>
    <Paper sx={{ p: 2, mb: 3 }}>
      <Typography variant="h6">Welcome, {user?.name}!</Typography>
      <Typography variant="body1">Email: {user?.email}</Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>Role: {user?.role}</Typography>
    </Paper>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Campaign Management</Typography>
          <Button variant="contained" sx={{ mt: 2 }}>Create Campaign</Button>
          <Button variant="outlined" sx={{ mt: 2 }}>View Campaigns</Button>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Product Promotion</Typography>
          <Button variant="contained" sx={{ mt: 2 }}>Promote Products</Button>
          <Button variant="outlined" sx={{ mt: 2 }}>Promotion Analytics</Button>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Sales Analysis</Typography>
          <Button variant="contained" sx={{ mt: 2 }}>View Sales Data</Button>
          <Button variant="outlined" sx={{ mt: 2 }}>Export Reports</Button>
        </Paper>
      </Grid>
    </Grid>
    </Box>
  </>
);

export default MarketingSpecialist;
