import React, { useEffect } from 'react';
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
  useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #282920ff 60%, #ceab83ff 100%)';
    return () => { document.body.style.background = ''; };
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: '#aecc42ff' }}>
        <GroupIcon sx={{ mr: 1, verticalAlign: 'middle' }} /> View All Users
      </Typography>

      {/* Thematic Paper Container with strong elevation and rounded corners */}
      <Paper elevation={6} sx={{ borderRadius: 3, overflow: 'hidden' }}>
        <TableContainer sx={{ maxWidth: '100%', width: '1200px' }}>
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
              {mockUsers.map((user, index) => (
                <TableRow
                  key={user.id}
                  hover
                  sx={{
                    backgroundColor: index % 2 === 0 ? '#000' : 'linear-gradient(135deg, #fff8f3 60%, #f7e0c3 100%)',
                    color: '#f5e9c8',
                    '&:hover': { backgroundColor: index % 2 === 0 ? '#333' : '#e0e0e0' }
                  }}
                >
                  <TableCell sx={{ color: 'inherit' }}>{user.id}</TableCell>
                  <TableCell sx={{ color: 'inherit' }}>{user.name}</TableCell>
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
                  <TableCell sx={{ color: 'inherit' }}>{user.lastLogin}</TableCell>
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
