import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  List,
  ListItemText,
  Divider,
} from '@mui/material';
import ClickIcon from '@mui/icons-material/Mouse';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { motion } from 'framer-motion';

// KPI Card Component
const KPICard = ({ title, value, icon: Icon, color }) => (
  <motion.div whileHover={{ scale: 1.03 }}>
    <Paper
      elevation={4}
      sx={{
        p: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 3,
        bgcolor: color,
        color: 'white',
        transition: '0.3s',
        boxShadow: '0 6px 14px rgba(0,0,0,0.1)',
      }}
    >
      <Icon sx={{ fontSize: 45, mr: 2 }} />
      <Box>
        <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
          {title}
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          {value}
        </Typography>
      </Box>
    </Paper>
  </motion.div>
);

const PromotionAnalytics = () => {
  const [campaign, setCampaign] = React.useState('campaign-1');

  const handleChange = (event) => {
    setCampaign(event.target.value);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 6,
        px: 3,
        display: 'flex',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f9f5ec 0%, #fff7e6 100%)',
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: '100%',
          maxWidth: 1100,
          borderRadius: 4,
          overflow: 'hidden',
          bgcolor: '#fffef9',
          boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            bgcolor: 'linear-gradient(90deg, #a1887f 0%, #8d6e63 100%)',
            color: 'white',
            p: 3,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <TrendingUpIcon sx={{ fontSize: 38 }} />
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Promotion Analytics
          </Typography>
        </Box>

        {/* Content */}
        <Box sx={{ p: 5 }}>
          {/* Campaign Selector */}
          <FormControl
            sx={{
              minWidth: 280,
              mb: 5,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                '&:hover fieldset': { borderColor: '#8d6e63' },
                '&.Mui-focused fieldset': { borderColor: '#a1887f' },
              },
            }}
            size="small"
          >
            <InputLabel id="campaign-select-label">Select Campaign</InputLabel>
            <Select
              labelId="campaign-select-label"
              value={campaign}
              label="Select Campaign"
              onChange={handleChange}
            >
              <MenuItem value="campaign-1">Summer Handloom Sale 2024</MenuItem>
              <MenuItem value="campaign-2">Artisan Spotlight Q3</MenuItem>
              <MenuItem value="campaign-3">New User Welcome</MenuItem>
            </Select>
          </FormControl>

          {/* KPI Section */}
          <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid item xs={12} sm={4}>
              <KPICard title="Total Clicks" value="15,450" icon={ClickIcon} color="#00bcd4" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <KPICard title="Conversions" value="325" icon={SwapHorizIcon} color="#ff9800" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <KPICard title="Revenue Generated" value="₹7.2 Lac" icon={AttachMoneyIcon} color="#4caf50" />
            </Grid>
          </Grid>

          <Divider sx={{ mb: 5, borderColor: '#d7ccc8' }} />

          {/* Chart & List Section */}
          <Grid container spacing={4}>
            {/* Chart Placeholder */}
            <Grid item xs={12} md={6}>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  height: 350,
                  borderRadius: 3,
                  borderColor: '#d7ccc8',
                  bgcolor: '#fffaf3',
                  transition: '0.3s',
                  '&:hover': { boxShadow: '0 0 12px rgba(141,110,99,0.2)' },
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ color: '#5d4037', fontWeight: 600 }}>
                  Clicks vs Conversions
                </Typography>
                <Box
                  sx={{
                    height: '80%',
                    background: '#f3f2ef',
                    borderRadius: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontStyle: 'italic',
                    color: '#8d6e63',
                  }}
                >
                  Bar Chart of Daily Performance
                </Box>
              </Paper>
            </Grid>

            {/* Product List Placeholder */}
            <Grid item xs={12} md={6}>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  height: 350,
                  borderRadius: 3,
                  borderColor: '#d7ccc8',
                  bgcolor: '#fffaf3',
                  transition: '0.3s',
                  '&:hover': { boxShadow: '0 0 12px rgba(141,110,99,0.2)' },
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ color: '#5d4037', fontWeight: 600 }}>
                  Top Performing Products
                </Typography>
                <Box
                  sx={{
                    height: '80%',
                    overflowY: 'auto',
                    px: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <List dense>
                    <ListItemText primary="1. Kanchipuram Saree — 100 Sales" />
                    <ListItemText primary="2. Maheshwari Fabric — 75 Sales" />
                    <ListItemText primary="3. Bandhani Dupatta — 50 Sales" />
                    <ListItemText primary="4. Ikat Blouse — 40 Sales" />
                    <ListItemText primary="5. Linen Stole — 35 Sales" />
                  </List>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default PromotionAnalytics;
