import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';

// Mock Data
const mockUsers = [
  { id: 1, name: 'Ravi Verma', role: 'Buyer', status: 'Active', lastLogin: '2 days ago' },
  { id: 2, name: 'Priya Singh', role: 'Artisan', status: 'Active', lastLogin: '1 hour ago' },
  { id: 3, name: 'Sanjay Dutt', role: 'Marketing Specialist', status: 'Inactive', lastLogin: '3 weeks ago' },
  { id: 4, name: 'Admin User', role: 'Admin', status: 'Active', lastLogin: 'Now' },
  { id: 5, name: 'Anjali Sharma', role: 'Buyer', status: 'Active', lastLogin: '1 day ago' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Active': return { bgcolor: '#e8f5e9', color: '#388e3c' }; // Green
    case 'Inactive': return { bgcolor: '#ffebee', color: '#d32f2f' }; // Red
    default: return { bgcolor: '#e0e0e0', color: '#757575' };
  }
};

const ViewAllUsers = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: '#8d6e63' }}>
        <GroupIcon sx={{ mr: 1, verticalAlign: 'middle' }} /> View All Users
      </Typography>
      
      {/* Thematic Paper Container with strong elevation and rounded corners */}
      <Paper elevation={6} sx={{ borderRadius: 3, overflow: 'hidden' }}>
        <TableContainer>
          <Table>
            <TableHead sx={{ bgcolor: '#a1887f' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Role</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Last Login</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockUsers.map((user) => (
                <TableRow key={user.id} hover sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>
                    <Chip 
                      label={user.role} 
                      size="small"
                      sx={{ 
                        bgcolor: user.role === 'Admin' ? '#ffcc80' : '#d7ccc8', 
                        color: '#5d4037', 
                        fontWeight: 'medium' 
                      }} 
                    />
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={user.status} 
                      size="small"
                      sx={getStatusColor(user.status)} 
                    />
                  </TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default ViewAllUsers;
