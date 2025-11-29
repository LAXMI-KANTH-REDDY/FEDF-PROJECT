import React, { useEffect } from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";

const ViewAllHandloomItems = () => {
  const items = [
    { id: 1, name: "Handloom Cotton Saree", price: "₹1,200", desc: "Elegant handloom saree crafted by artisans." },
    { id: 2, name: "Silk Dupatta", price: "₹850", desc: "Vibrant silk dupatta with traditional motifs." },
    { id: 3, name: "Khadi Kurta", price: "₹1,500", desc: "Handspun khadi kurta for a sustainable wardrobe." },
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
        sx={{ fontFamily: "serif", fontWeight: 700, color: "#268442ff", mb: 4 }}
      >
        <u>Explore Handloom Treasures</u>
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
                <Typography variant="h6" sx={{ color: "#c7a63cff", mb: 1 }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: "#bca4a4ff" }}>
                  {item.desc}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#dda949ff", fontWeight: 600 }}>
                  {item.price}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#6e4b1f",
                    "&:hover": { backgroundColor: "#bfa14a" },
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
