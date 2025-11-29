import React, { useEffect } from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Button } from '@mui/material';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// Mock Data
const mockProducts = [
  { id: 1, name: 'Kanjivaram Silk Saree', sku: 'KS-001', stock: 5, price: 12500, status: 'Approved' },
  { id: 2, name: 'Ikat Cotton Scarf', sku: 'IC-003', stock: 0, price: 1800, status: 'Out of Stock' },
  { id: 3, name: 'Kalamkari Dress Material', sku: 'KD-010', stock: 12, price: 3500, status: 'Pending Review' },
  { id: 4, name: 'Banarasi Brocade Fabric', sku: 'BB-005', stock: 25, price: 800, status: 'Approved' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Approved': return { bgcolor: '#e8f5e9', color: '#388e3c' }; // Green
    case 'Out of Stock': return { bgcolor: '#ffebee', color: '#d32f2f' }; // Red
    case 'Pending Review': return { bgcolor: '#fff3e0', color: '#f57c00' }; // Orange
    default: return { bgcolor: '#e0e0e0', color: '#757575' };
  }
};

const ViewMyProducts = () => {
  const handleEdit = (id) => alert(`Editing product ${id}`);
  const handleDelete = (id) => alert(`Deleting product ${id}`);

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#4a8527ff' }}>
        <Inventory2Icon sx={{ mr: 1, verticalAlign: 'middle' }} /> My Product Listings
      </Typography>
      
      {/* Thematic Paper Container with strong elevation and rounded corners */}
      <Paper elevation={6} sx={{ borderRadius: 3, overflow: 'hidden' }}>
        <TableContainer sx={{ maxWidth: '100%', width: '1200px' }}>
          <Table>
            <TableHead sx={{ bgcolor: '#a1887f' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Product Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>SKU</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Stock</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white', textAlign: 'right' }}>Price (₹)</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockProducts.map((product, index) => (
                <TableRow
                  key={product.id}
                  hover
                  sx={{
                    backgroundColor: index % 2 === 0 ? '#000' : 'linear-gradient(135deg, #fff8f3 60%, #f7e0c3 100%)',
                    color: '#f5e9c8',
                    '&:hover': { backgroundColor: index % 2 === 0 ? '#333' : '#e0e0e0' }
                  }}
                >
                  <TableCell sx={{ color: 'inherit', fontWeight: 'medium' }}>{product.name}</TableCell>
                  <TableCell sx={{ color: 'inherit' }}>{product.sku}</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold', color: product.stock <= 5 ? '#d32f2f' : '#388e3c' }}>
                    {product.stock}
                  </TableCell>
                  <TableCell align="right" sx={{ color: 'inherit' }}>{product.price.toLocaleString('en-IN')}</TableCell>
                  <TableCell>
                    <Chip
                      label={product.status}
                      size="small"
                      sx={{ ...getStatusColor(product.status), fontWeight: 'bold', borderRadius: 1 }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      size="small"
                      startIcon={<EditIcon />}
                      onClick={() => handleEdit(product.id)}
                      sx={{ color: '#f5e9c8', mr: 1 }}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      startIcon={<DeleteIcon />}
                      color="error"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default ViewMyProducts;
