import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Chip } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BlockIcon from '@mui/icons-material/Block';

// Mock Data
const mockOrders = [
  { id: 'O2025-001', product: 'Kota Doria Saree', quantity: 1, buyer: 'Anjali R.', date: '2025-10-05', status: 'New Order' },
  { id: 'O2025-002', product: 'Pochampally Shawl (Set of 3)', quantity: 3, buyer: 'Karan S.', date: '2025-10-06', status: 'New Order' },
  { id: 'O2025-003', product: 'Chanderi Kurta Fabric', quantity: 2, buyer: 'Meera P.', date: '2025-10-06', status: 'Processing' },
];

const getStatusChip = (status) => {
  switch (status) {
    case 'New Order': return { label: status, bgcolor: '#fff3e0', color: '#f57c00' }; // Orange
    case 'Processing': return { label: status, bgcolor: '#e3f2fd', color: '#1e88e5' }; // Blue
    case 'Ready for Ship': return { label: status, bgcolor: '#e8f5e9', color: '#388e3c' }; // Green
    default: return { label: status, bgcolor: '#e0e0e0', color: '#757575' };
  }
};

const OrderRequests = () => {
  const [orders, setOrders] = React.useState(mockOrders);

  const handleAction = (orderId, action) => {
    // In a real application, this would update the database and trigger notifications
    alert(`Order ${orderId} has been marked as ${action}.`);
    // Example: change status to 'Processing' after acceptance
    if (action === 'Accepted') {
      setOrders(orders.map(o => o.id === orderId ? { ...o, status: 'Processing' } : o));
    } else {
      setOrders(orders.filter(o => o.id !== orderId));
    }
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#419730ff' }}>
        <ShoppingBagIcon sx={{ mr: 1, verticalAlign: 'middle' }} />   <u> New Order Requests</u>
      </Typography>
      
      {/* Thematic Paper Container with strong elevation and rounded corners */}
      <Paper elevation={6} sx={{ borderRadius: 3, overflow: 'hidden' }}>
        <TableContainer sx={{ maxWidth: '100%', width: '1200px' }}>
          <Table>
            <TableHead sx={{ bgcolor: '#a1887f' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Order ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Product</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Qty</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Buyer</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Date</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => {
                const statusInfo = getStatusChip(order.status);
                return (
                  <TableRow
                    key={order.id}
                    hover
                    sx={{
                      '&:nth-of-type(odd)': { backgroundColor: '#0c210eff' },
                      color: '#f5e9c8'
                    }}
                  >
                    <TableCell sx={{ color: 'inherit', fontWeight: 'medium' }}>{order.id}</TableCell>
                    <TableCell sx={{ color: 'inherit' }}>{order.product}</TableCell>
                    <TableCell sx={{ color: 'inherit' }}>{order.quantity}</TableCell>
                    <TableCell sx={{ color: 'inherit' }}>{order.buyer}</TableCell>
                    <TableCell sx={{ color: 'inherit' }}>{order.date}</TableCell>
                    <TableCell>
                      <Chip
                        label={statusInfo.label}
                        size="small"
                        sx={{ bgcolor: statusInfo.bgcolor, color: statusInfo.color, fontWeight: 'bold', borderRadius: 1 }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      {order.status === 'New Order' ? (
                        <>
                          <Button
                            size="small"
                            variant="contained"
                            startIcon={<CheckCircleIcon />}
                            sx={{
                              bgcolor: '#a1887f',
                              '&:hover': { bgcolor: '#8d6e63' },
                              color: 'white',
                              mr: 1
                            }}
                            onClick={() => handleAction(order.id, 'Accepted')}
                          >
                            Accept
                          </Button>
                          <Button
                            size="small"
                            variant="outlined"
                            startIcon={<BlockIcon />}
                            color="error"
                            onClick={() => handleAction(order.id, 'Rejected')}
                          >
                            Reject
                          </Button>
                        </>
                      ) : (
                        <Chip label="In Progress" size="small" sx={{ bgcolor: '#e0e0e0', color: '#757575', fontWeight: 'bold', borderRadius: 1 }} />
                      )}
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

export default OrderRequests;
