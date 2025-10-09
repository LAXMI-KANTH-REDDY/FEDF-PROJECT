import React, { useState } from "react";
import { Box, Button, TextField, Typography, MenuItem, Select, InputLabel, FormControl, Paper } from "@mui/material";
import { roles } from "./roles";

const Login = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && role) {
      onLogin({ name, email, role });
    }
  };

  return (
    <Box sx={{ Height: "500", width:"350px",borderRadius:"12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #181818 60%, #6e4b1f 100%)" }}>
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{
          color: '#bfa14a',
          fontWeight: 900,
          letterSpacing: 4,
          mb: 4,
          fontFamily: 'Lobster, cursive'
        }}
      >
        HANDLOOM FASHIONS
      </Typography>
      <Paper elevation={6} sx={{ p: 4, width: 350, borderRadius: 4, boxShadow: '0 0 32px 0 #bfa14a' }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#bfa14a', fontWeight: 700, letterSpacing: 2 }}>Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Role</InputLabel>
            <Select
              value={role}
              label="Role"
              onChange={(e) => setRole(e.target.value)}
            >
              {roles.map((r) => (
                <MenuItem key={r.name} value={r.name}>{r.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
