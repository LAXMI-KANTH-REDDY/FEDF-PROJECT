import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Chip, 
  LinearProgress, 
  Grid 
} from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';


// Mock Data
const mockInventory = [
  { id: 1, name: 'Kanjivaram Silk Saree', sku: 'KS-001', stock: 5, totalCapacity: 30, price: 12500, threshold: 10 },
  { id: 2, name: 'Ikat Cotton Scarf', sku: 'IC-003', stock: 0, totalCapacity: 50, price: 1800, threshold: 5 },
  { id: 3, name: 'Kalamkari Dress Material', sku: 'KD-010', stock: 25, totalCapacity: 40, price: 3500, threshold: 15 },
  { id: 4, name: 'Banarasi Brocade Fabric', sku: 'BB-005', stock: 8, totalCapacity: 20, price: 800, threshold: 10 },
];

const getStockStatus = (stock, threshold) => {
  if (stock === 0) return { label: 'Out of Stock', color: 'error', icon: <WarningAmberIcon /> };
  if (stock <= threshold) return { label: 'Low Stock', color: 'warning', icon: <WarningAmberIcon /> };
  return { label: 'In Stock', color: 'success' };
};

const InventoryStatus = () => {
  const totalItems = mockInventory.reduce((acc, item) => acc + item.stock, 0);
  const lowStockItems = mockInventory.filter(item => item.stock <= item.threshold).length;
  
  // Custom Thematic colors
  const primaryBrown = '#8d6e63';
  const lightBrown = '#a1887f';
  const tableHeaderBg = '#efebe9';

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: "#45871cff" }}>
        <StorageIcon sx={{ mr: 1, verticalAlign: 'middle' }} /> Inventory Status Overview
      </Typography>

      {/* KPI Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={6} sx={{ p: 3, borderRadius: 3, borderLeft: `5px solid ${lightBrown}`, bgcolor: '#fff8e1' }}>
            <Typography variant="h6" color="#c5992aff" fontWeight="bold">
              Total Stocked Items
            </Typography>
            <Typography variant="h3" fontWeight="bold" color="#d7c447ff">
              {totalItems}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={6} sx={{ p: 3, borderRadius: 3, borderLeft: `5px solid #b39c1dff`, bgcolor: '#ffebee' }}>
            <Typography variant="h6" color="#da5757ff" fontWeight="bold">
              Low Stock Alerts
            </Typography>
            <Typography variant="h3" fontWeight="bold" color="#e11111ff">
              {lowStockItems}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      
      {/* Inventory Table */}
      <Paper elevation={6} sx={{ borderRadius: 3, overflow: 'hidden' }}>
        <TableContainer sx={{ maxWidth: '100%', width: '1200px' }}>
          <Table>
            <TableHead sx={{ bgcolor: "#10150fff"}}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Product Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>SKU</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Current Stock</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Stock Level</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Threshold</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockInventory.map((item) => {
                const status = getStockStatus(item.stock, item.threshold);
                const progressValue = (item.stock / item.totalCapacity) * 100;

                return (
                  <TableRow
                    key={item.id}
                    hover
                    sx={{
                      '&:nth-of-type(odd)': { backgroundColor: tableHeaderBg },
                      color: '#0f0c01ff',
                      ...(status.color === 'warning' || status.color === 'error' ? { backgroundColor: '#ffebee !important' } : {})
                    }}
                  >
                    <TableCell sx={{ color: 'inherit', fontWeight: 'medium' }}>{item.name}</TableCell>
                    <TableCell sx={{ color: 'inherit' }}>{item.sku}</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 'bold', color: 'inherit' }}>{item.stock}</TableCell>
                    <TableCell>
                        <LinearProgress
                            variant="determinate"
                            value={progressValue}
                            sx={{
                                height: 8,
                                borderRadius: 5,
                                bgcolor: '#e0e0e0',
                                '& .MuiLinearProgress-bar': {
                                    bgcolor: status.color === 'error' || status.color === 'warning' ? '#d32f2f' : '#a1887f'
                                }
                            }}
                        />
                        <Typography variant="caption" color="text.secondary">
                            {item.stock} / {item.totalCapacity} capacity
                        </Typography>
                    </TableCell>
                    <TableCell align="center" sx={{ color: 'inherit' }}>{item.threshold}</TableCell>
                    <TableCell>
                      <Chip
                        label={status.label}
                        size="small"
                        icon={status.icon}
                        color={status.color}
                        sx={{ fontWeight: 'bold', borderRadius: 1 }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default InventoryStatus;
