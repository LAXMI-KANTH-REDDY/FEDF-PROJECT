import React from "react";
import { Box, Grid, Card, CardContent, CardActions, Typography, Button, Paper } from "@mui/material";
import RoleAppBar from "./RoleAppBar";

// Example product data (replace with real data source)
const products = [
  {
    id: 1,
    name: "Handloom Cotton Saree",
    description: "Elegant handloom cotton saree woven by skilled artisans.",
    price: 4999,
    gradient: "linear-gradient(135deg, #f9d29d 0%, #ffb07c 100%)",
  image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80" // handloom cotton saree
  },
  {
    id: 2,
    name: "Silk Stole",
    description: "Soft Tussar silk stole with handwoven patterns.",
    price: 2499,
    gradient: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
  image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" // silk stole
  },
  {
    id: 3,
    name: "Handwoven Kurta",
    description: "Comfortable handwoven kurta made from breathable cotton.",
    price: 3499,
    gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
  image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=400&q=80" // handwoven kurta
  },
  {
    id: 4,
    name: "Block-printed Dress",
    description: "Vibrant block-printed dress handcrafted by artisans.",
    price: 2999,
    gradient: "linear-gradient(135deg, #fceabb 0%, #f8b500 100%)",
  image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" // block-printed dress
  },
  {
    id: 5,
    name: "Kalamkari Dupatta",
    description: "Traditional kalamkari dupatta with hand-painted motifs.",
    price: 1899,
    gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
  image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80" // kalamkari dupatta
  },
  {
    id: 6,
    name: "Chanderi Scarf",
    description: "Lightweight chanderi scarf with elegant zari work.",
    price: 1599,
    gradient: "linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)",
  image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" // chanderi scarf
  },
  {
    id: 7,
    name: "Ikat Tote Bag",
    description: "Handwoven ikat tote bag, perfect for daily use.",
    price: 1299,
    gradient: "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)",
  image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" // ikat tote bag
  }
];

const ProductsPage = ({ user, onHome, onDashboard, onLogout, onProducts, handleCart }) => {
  React.useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #fff8f3 60%, #f7e0c3 100%)';
    return () => { document.body.style.background = ''; };
  }, []);
  const role = user?.role;
  return (
    <>
      <RoleAppBar user={user} onHome={onHome} onDashboard={onDashboard} onLogout={onLogout} onProducts={onProducts} handleCart={handleCart} />
      <Box sx={{
        minHeight: '100vh',
        boxSizing: 'border-box',
        borderTop: '6px solid #6e4b1f',
        width: '100vw',
        mx: 0,
        pt: { xs: 8, md: 10 },
        overflowX: 'hidden',
        p: 0
      }}>
  <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto', px: { xs: 1, md: 0 }, p: 0 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 900, color: '#6e4b1f', textAlign: 'center', letterSpacing: 2 }}>Products</Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} alignItems="stretch" justifyContent="flex-start">
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id} display="flex" alignItems="stretch">
                <Card sx={{ borderRadius: 3, boxShadow: 3, minWidth: 260, maxWidth: 320, width: '100%', minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                  <Paper sx={{
                    minHeight: 180,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    background: product.gradient,
                    p: 2,
                    position: 'relative',
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                        borderRadius: 10,
                      }}
                    />
                    {/* Role-based top-right action */}
                    {role === 'Admin' && (
                      <Button size="small" variant="contained" sx={{ position: 'absolute', right: 16, bottom: 16, background: '#6e4b1f', borderRadius: 2 }}>
                        Edit
                      </Button>
                    )}
                    {role === 'Artisan' && (
                      <Button size="small" variant="contained" sx={{ position: 'absolute', right: 16, bottom: 16, background: '#6e4b1f', borderRadius: 2 }}>
                        Edit
                      </Button>
                    )}
                    {role === 'Marketing Specialist' && (
                      <Button size="small" variant="contained" sx={{ position: 'absolute', right: 16, bottom: 16, background: '#6e4b1f', borderRadius: 2 }}>
                        Analysis
                      </Button>
                    )}
                  </Paper>
                  <CardContent sx={{ flexGrow: 1, minHeight: 60, p: 1.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: 16 }}>{product.name}</Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#eacc9fff', fontSize: 20, ml: 1 }}>
                        ₹{product.price.toLocaleString()}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 0.5, fontSize: 13 }}>{product.description}</Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                    <Button size="small" variant="text">View</Button>
                    <Button size="small" variant="outlined" sx={{ borderRadius: 2 }}>Add to cart</Button>
                    {role === 'Admin' && (
                      <Button size="small" variant="outlined" color="error" sx={{ borderRadius: 2 }}>Remove</Button>
                    )}
                    {role === 'Artisan' && (
                      <Button size="small" variant="outlined" sx={{ borderRadius: 2 }}>Set Price</Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
            {/* Add Product button for Artisan */}
            {role === 'Artisan' && (
              <Grid item xs={12} sm={6} md={3} display="flex" alignItems="stretch">
                <Card sx={{ borderRadius: 3, boxShadow: 3, minHeight: 250, minWidth: 260, maxWidth: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                  <Button variant="contained" color="primary" sx={{ borderRadius: 2, fontWeight: 700 }}>
                    + Add Product
                  </Button>
                </Card>
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ProductsPage;
