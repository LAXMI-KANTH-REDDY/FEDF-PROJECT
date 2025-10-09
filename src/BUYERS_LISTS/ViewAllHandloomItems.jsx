import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";

const ViewAllHandloomItems = () => {
  const items = [
    { id: 1, name: "Handloom Cotton Saree", price: "₹1,200", desc: "Elegant handloom saree crafted by artisans." },
    { id: 2, name: "Silk Dupatta", price: "₹850", desc: "Vibrant silk dupatta with traditional motifs." },
    { id: 3, name: "Khadi Kurta", price: "₹1,500", desc: "Handspun khadi kurta for a sustainable wardrobe." },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #fff8ee, #fde6cc)",
        p: 5,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ fontFamily: "serif", fontWeight: 700, color: "#5b3a29", mb: 4 }}
      >
        Explore Handloom Treasures
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: 3,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ color: "#8b4513", mb: 1 }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: "#5a5a5a" }}>
                  {item.desc}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#b45f06", fontWeight: 600 }}>
                  {item.price}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#b45f06",
                    "&:hover": { backgroundColor: "#a05005" },
                    borderRadius: 2,
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ViewAllHandloomItems;
