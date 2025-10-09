import React from "react";
import { Box, Typography, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import RoleAppBar from "./RoleAppBar";

// Example cart data (replace with real data source or props)
const cartItems = [
  {
    id: 1,
    name: "Handloom Cotton Saree",
    price: 4999,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Silk Stole",
    price: 2499,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
  }
];

const Cart = ({ user, onHome, onDashboard, onLogout, onProducts, handleCart }) => {
  React.useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #fff8f3 60%, #f7e0c3 100%)';
    return () => { document.body.style.background = ''; };
  }, []);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <>
      <RoleAppBar user={user} onHome={onHome} onDashboard={onDashboard} onLogout={onLogout} onProducts={onProducts} handleCart={handleCart} />
      <Box sx={{
        minHeight: '100vh',
        boxSizing: 'border-box',
        width: '100vw',
        p: 0,
        pt: { xs: 8, md: 10 },
        mx: 0,
        overflowX: 'hidden'
      }}>
    <Box sx={{ width: '1300px', maxWidth: 1300, pr: '100px',pl: '-30px' }}>
  <Typography variant="h3" gutterBottom sx={{ color: '#6e4b1f', fontWeight: 900, letterSpacing: 2, textAlign: 'center' }}>Your Cart</Typography>
  <TableContainer component={Paper} sx={{ mt: 4, borderRadius: 3, width: '100%', overflowX: 'auto', boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Subtotal</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <img src={item.image} alt={item.name} style={{ width: 60, height: 60, borderRadius: 8 }} />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell align="right">₹{item.price.toLocaleString()}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">₹{(item.price * item.quantity).toLocaleString()}</TableCell>
                <TableCell align="center">
                  <Button variant="outlined" color="error" size="small">Remove</Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={4} />
              <TableCell align="right" sx={{ fontWeight: 700 }}>Total:</TableCell>
              <TableCell align="right" sx={{ fontWeight: 700 }}>₹{total.toLocaleString()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
  <Box sx={{ mt: 5, textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
    <Typography variant="h5" sx={{ fontWeight: 900, color: '#6e4b1f' }}>Total: ₹{total.toLocaleString()}</Typography>
    <Button variant="contained" color="primary" sx={{ mt: 2, px: 4, py: 1.5, borderRadius: 3, fontWeight: 900 }}>Checkout</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
