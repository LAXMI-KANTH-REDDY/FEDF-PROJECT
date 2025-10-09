import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const OrderHistory = () => {
  const history = [
    { id: "ORD-1001", item: "Khadi Kurta", date: "12 Sep 2025", amount: "₹1,500", status: "Delivered" },
    { id: "ORD-0995", item: "Silk Saree", date: "02 Sep 2025", amount: "₹2,300", status: "Delivered" },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #fff8ee, #fde6cc)",
        p: 6,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ fontFamily: "serif", fontWeight: 700, color: "#5b3a29", mb: 4 }}
      >
        Order History
      </Typography>

      <TableContainer component={Paper} sx={{ maxWidth: 900, mx: "auto", borderRadius: 3, boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#fde2b8" }}>
              <TableCell>Order ID</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {history.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.item}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.amount}</TableCell>
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
