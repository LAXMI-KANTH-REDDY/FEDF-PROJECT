import React, { useEffect } from "react";
import { Box, Typography, Paper, Stack, Chip } from "@mui/material";

const TrackMyOrders = () => {
  const orders = [
    { id: "ORD-1021", product: "Cotton Saree", status: "Shipped", date: "05 Oct 2025" },
    { id: "ORD-1018", product: "Silk Dupatta", status: "Delivered", date: "02 Oct 2025" },
  ];

  useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #282920ff 60%, #ceab83ff 100%)';
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', p: 3 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontFamily: "serif", fontWeight: 700, color: "#298238ff", mb: 4 }}
      >
        <u>Track My Orders </u>
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
              <Typography variant="h6" sx={{ color: "#cea71aff" }}>
                {order.product}
              </Typography>
              <Typography variant="body2" sx={{ color: "#e9d9a0ff" }}>
                {order.date}
              </Typography>
            </Box>
            <Chip
              label={order.status}
              sx={{
                fontWeight: 800,
                bgcolor:
                  order.status === "Delivered" ? "#c7efc7ff" : "#503f0cff",
                color:
                  order.status === "Delivered" ? "#0f7113ff" : "#b49e5cff",
                  borderBlockStyle: 'solid',
                  borderColor:
                  order.status === "Delivered" ? "#52f332ff" : "#f6c42eff",
                  borderWidth: '2px',
              }}
            />
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default TrackMyOrders;
