import React, { useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Chip, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

// Mock Data
const mockProducts = [
  { id: 101, name: 'Block-Printed Dupatta', artisan: 'Priya Singh', status: 'Pending', price: '₹1,899' },
  { id: 102, name: 'Handwoven Ikat Saree', artisan: 'Artisan Collective', status: 'Pending', price: '₹5,200' },
  { id: 103, name: 'Embroidered Cushion Cover', artisan: 'Ravi Verma', status: 'Pending', price: '₹750' },
];

const ApproveRejectProducts = () => {
  const [products, setProducts] = React.useState(mockProducts);

  useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #282920ff 60%, #ceab83ff 100%)';
    return () => { document.body.style.background = ''; };
  }, []);

  const handleAction = (id, action) => {
    setProducts(products.filter(p => p.id !== id));
    alert(`${action} action simulated for product ${id}`);
  };

  return (
    <Box sx={{ minHeight: '100vh', p: 3 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#aecc42ff' }}>
        Product Listing Review
      </Typography>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} md={6} lg={4} key={product.id}>
            {/* Thematic Card with strong shadow and rounded corners */}
            <Card
              elevation={6}
              sx={{ borderRadius: 3, border: '1px solid #d7ccc8', bgcolor: '#fbfbfb' }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold', color: '#000' }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Artisan: {product.artisan}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ my: 1, fontWeight: 'bold', color: '#000' }}>
                  {product.price}
                </Typography>
                <Chip
                  label={product.status}
                  sx={{
                    bgcolor: '#ffcc80',
                    color: '#e65100',
                    fontWeight: 'bold',
                    borderRadius: 1
                  }}
                />
              </CardContent>
              <CardActions sx={{ p: 2, justifyContent: 'space-between', borderTop: '1px solid #e0e0e0' }}>
                <Button
                  variant="contained"
                  startIcon={<CheckCircleIcon />}
                  sx={{
                    bgcolor: '#6e4b1f',
                    '&:hover': { bgcolor: '#bfa14a' },
                    color: 'white',
                    borderRadius: 1.5
                  }}
                  onClick={() => handleAction(product.id, 'Approved')}
                >
                  Approve
                </Button>
                <Button
                  variant="contained"
                  startIcon={<CancelIcon />}
                  sx={{
                    bgcolor: '#6e4b1f',
                    '&:hover': { bgcolor: '#bfa14a' },
                    color: 'white',
                    borderRadius: 1.5
                  }}
                  onClick={() => handleAction(product.id, 'Rejected')}
                >
                  Reject
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {products.length === 0 && (
        <Paper elevation={2} sx={{ p: 4, textAlign: 'center', mt: 4, borderRadius: 3, bgcolor: '#e8f5e9' }}>
          <Typography variant="h5" color="success.main">
            All pending products have been reviewed!
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default ApproveRejectProducts;
