import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Select, MenuItem, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

// Mock Data
const mockUsers = [
  { id: 1, name: 'Ravi Verma', currentRole: 'Buyer', email: 'ravi@example.com' },
  { id: 2, name: 'Priya Singh', currentRole: 'Artisan', email: 'priya@example.com' },
  { id: 3, name: 'Admin User', currentRole: 'Admin', email: 'admin@example.com' },
];
const availableRoles = ["Admin", "Buyer", "Artisan", "Marketing Specialist"];

const ManageUserRoles = () => {
  const [users, setUsers] = React.useState(mockUsers);

  const handleRoleChange = (userId, newRole) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, currentRole: newRole } : user
    ));
  };

  const saveChanges = () => {
    // In a real app, this would dispatch an API call
    alert("Changes saved! (Simulated)");
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: '#8d6e63' }}>
        <PersonIcon sx={{ mr: 1, verticalAlign: 'middle' }} /> Manage User Roles
      </Typography>
      
      {/* Thematic Paper Container with strong elevation and background */}
      <Paper elevation={6} sx={{ borderRadius: 3, overflow: 'hidden', bgcolor: '#fbfbfb' }}>
        <TableContainer>
          <Table>
            <TableHead sx={{ bgcolor: '#a1887f' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Current Role</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Change To</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} hover sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Box sx={{ 
                      display: 'inline-block', 
                      p: 0.5, 
                      borderRadius: 1, 
                      bgcolor: user.currentRole === 'Admin' ? '#ffecb3' : '#d7ccc8',
                      color: '#5d4037',
                      fontWeight: 'medium'
                    }}>
                      {user.currentRole}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={user.currentRole}
                      onChange={(e) => handleRoleChange(user.id, e.target.value)}
                      size="small"
                      sx={{ minWidth: 150, bgcolor: 'white' }}
                    >
                      {availableRoles.map(role => (
                        <MenuItem key={role} value={role}>{role}</MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Button 
                      variant="contained" 
                      onClick={saveChanges}
                      sx={{ bgcolor: '#8d6e63', '&:hover': { bgcolor: '#5d4037' }, borderRadius: 1.5, color: 'white' }}
                    >
                      Update
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      
      <Box sx={{ mt: 4, textAlign: 'right' }}>
        <Button 
          variant="contained" 
          size="large"
          onClick={saveChanges}
          sx={{ bgcolor: '#a1887f', '&:hover': { bgcolor: '#8d6e63' }, borderRadius: 2 }}
        >
          Save All Changes
        </Button>
      </Box>
    </Box>
  );
};

export default ManageUserRoles;
