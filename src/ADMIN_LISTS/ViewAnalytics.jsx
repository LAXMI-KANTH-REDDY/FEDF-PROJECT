import React, { useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, Paper } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupIcon from '@mui/icons-material/Group';

// Mock Data
const kpiData = [
  { title: 'Total Sales', value: '₹5.2 Cr', icon: <ShoppingCartIcon />, color: '#a1887f' },
  { title: 'New Users (Last 30D)', value: '1,240', icon: <PeopleIcon />, color: '#d7ccc8' },
  { title: 'Active Artisans', value: '185', icon: <GroupIcon />, color: '#8d6e63' },
  { title: 'Pending Products', value: '25', icon: <TrendingUpIcon />, color: '#ffcc80' },
];

const ViewAnalytics = () => {
  useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #282920ff 60%, #ceab83ff 100%)';
    return () => { document.body.style.background = ''; };
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', p: 3 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#222' }}>
        <TrendingUpIcon sx={{ mr: 1, verticalAlign: 'middle' }} /> Global Platform Analytics
      </Typography>

      <Grid container spacing={4} sx={{ mb: 4 }}>
        {kpiData.map((kpi) => (
          <Grid item xs={12} sm={6} md={3} key={kpi.title}>
            {/* Thematic KPI Card with high elevation */}
            <Card
              elevation={6}
              sx={{
                borderRadius: 3,
                backgroundColor: kpi.color,
                color: 'white',
                minHeight: 120
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    {kpi.value}
                  </Typography>
                  {React.cloneElement(kpi.icon, { sx: { fontSize: 40, opacity: 0.8 } })}
                </Box>
                <Typography variant="subtitle2" sx={{ mt: 1, opacity: 0.9 }}>
                  {kpi.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" sx={{ mb: 2, color: '#5d4037', fontWeight: 'medium' }}>
        Sales Trend Overview
      </Typography>
      {/* Placeholder for a Chart/Graph */}
      <Paper elevation={4} sx={{ p: 4, height: 300, borderRadius: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#fffde7' }}>
        <Typography variant="h6" color="textSecondary">
          [ Placeholder for Bar/Line Chart ]
        </Typography>
      </Paper>
    </Box>
  );
};

export default ViewAnalytics;
