import React, { useEffect } from 'react';
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

  useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #282920ff 60%, #ceab83ff 100%)';
    return () => { document.body.style.background = ''; };
  }, []);

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
    <Box sx={{ minHeight: '100vh', p: 5 }}>
      <Typography variant="h3" sx={{ mb: 3, fontWeight: 'bold', color: '#aecc42ff' }}>
        <PersonIcon sx={{ mr: 3, verticalAlign: 'middle',scale: '3.5',
         }} /> Manage User Roles
      </Typography>

      {/* Thematic Paper Container with strong elevation and background */}
      <Paper elevation={6} sx={{ borderRadius: 3, overflow: 'hidden', bgcolor: '#fbfbfb' }}>
        <TableContainer sx={{ maxWidth: '100%', width: '1200px' }}>
          <Table>
            <TableHead sx={{ bgcolor: '#b3958aff' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: 'Black' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'Black' }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'Black' }}>Current Role</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'Black' }}>Change To</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'Black' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={user.id} hover sx={{  backgroundColor: '#4b4c3dff'  }}>
                  <TableCell sx={{ color: '#aecc42ff' }}>{user.name}</TableCell>
                  <TableCell sx={{ color: '#aecc42ff' }}>{user.email}</TableCell>
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
                      sx={{ minWidth: 150, bgcolor: '#606333ff', }}
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
                      sx={{ bgcolor: '#6e4b1f', '&:hover': { bgcolor: '#bfa14a' }, borderRadius: 1.5, color: 'white' }}
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
          sx={{ bgcolor: '#6e4b1f', '&:hover': { bgcolor: '#bfa14a' }, borderRadius: 2 }}
        >
          Save All Changes
        </Button>
      </Box>
    </Box>
  );
};

export default ManageUserRoles;
