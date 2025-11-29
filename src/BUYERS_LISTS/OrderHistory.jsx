import React, { useEffect } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const OrderHistory = () => {
  const history = [
    { id: "ORD-1001", item: "Khadi Kurta", date: "12 Sep 2025", amount: "₹1,500", status: "Delivered" },
    { id: "ORD-0995", item: "Silk Saree", date: "02 Sep 2025", amount: "₹2,300", status: "Delivered" },
  ];

  useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #282920ff 60%, #ceab83ff 100%)';
    return () => { document.body.style.background = ''; };
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', p: 3 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontFamily: "serif", fontWeight: 700, color: "#58912dff", mb: 4 }}
      >
        <u>Order History</u>
      </Typography>

      <TableContainer component={Paper} sx={{ maxWidth: 900, mx: "auto", borderRadius: 3, boxShadow: 3, width: '1200px' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#a88854ff" }}>
              <TableCell>Order ID</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {history.map((row) => (
              <TableRow key={row.id} hover sx={{ color: '#c39f3cff' }}>
                <TableCell sx={{ color: 'inherit' }}>{row.id}</TableCell>
                <TableCell sx={{ color: 'inherit' }}>{row.item}</TableCell>
                <TableCell sx={{ color: 'inherit' }}>{row.date}</TableCell>
                <TableCell sx={{ color: 'inherit' }}>{row.amount}</TableCell>
                <TableCell sx={{ color: "#2e7d32", fontWeight: 600 }}>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderHistory;
