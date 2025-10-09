import React from "react";
import { Box, Typography, Paper, Stack, Chip } from "@mui/material";

const TrackMyOrders = () => {
  const orders = [
    { id: "ORD-1021", product: "Cotton Saree", status: "Shipped", date: "05 Oct 2025" },
    { id: "ORD-1018", product: "Silk Dupatta", status: "Delivered", date: "02 Oct 2025" },
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
        Track My Orders
      </Typography>

      <Stack spacing={3} maxWidth="700px" mx="auto">
        {orders.map((order) => (
          <Paper
            key={order.id}
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ color: "#8b4513" }}>
                {order.product}
              </Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                {order.date}
              </Typography>
            </Box>
            <Chip
              label={order.status}
              sx={{
                fontWeight: 600,
                bgcolor:
                  order.status === "Delivered" ? "#d7f5d7" : "#ffe8a1",
                color:
                  order.status === "Delivered" ? "#2e7d32" : "#7a5b00",
              }}
            />
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default TrackMyOrders;
