import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextareaAutosize,
  FormHelperText
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const categories = [
  'Sarees', 
  'Scarves & Stoles', 
  'Dress Materials', 
  'Fabrics', 
  'Home Decor', 
  'Accessories'
];

const initialFormState = {
  productName: '',
  category: '',
  description: '',
  price: '',
  stock: '',
  material: '',
  images: null,
};

const AddNewProduct = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const primaryBrown = '#8d6e63';

  useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #282920ff 60%, #ceab83ff 100%)';
    return () => { document.body.style.background = ''; };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageChange = (e) => {
    setFormData(prev => ({ ...prev, images: e.target.files }));
    if (errors.images) {
      setErrors(prev => ({ ...prev, images: '' }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.productName) tempErrors.productName = "Product name is required.";
    if (!formData.category) tempErrors.category = "Category must be selected.";
    if (!formData.description || formData.description.length < 50) tempErrors.description = "Description must be at least 50 characters.";
    if (!formData.price || isNaN(formData.price) || parseFloat(formData.price) <= 0) tempErrors.price = "Valid price is required.";
    if (!formData.stock || isNaN(formData.stock) || parseInt(formData.stock) <= 0) tempErrors.stock = "Valid stock quantity is required.";
    if (!formData.material) tempErrors.material = "Material/Weave type is required.";
    if (!formData.images || formData.images.length === 0) tempErrors.images = "At least one product image is required.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Submitting Product Data:', formData);
      // In a real app: upload images to storage, then save form data to Firestore
      alert('Product submitted for Admin review successfully!');
      setFormData(initialFormState); // Clear form
    }
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#7f952eff' }}>
        <AddCircleOutlineIcon sx={{ mr: 1, verticalAlign: 'middle' }} />  <u>Add New Product Listing</u>
      </Typography>

      <Paper elevation={8} sx={{ p: 4, borderRadius: 3, maxWidth: 900, mx: 'auto' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Product Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Product Name"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                error={!!errors.productName}
                helperText={errors.productName}
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            
            {/* Category */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!errors.category} variant="outlined">
                <InputLabel shrink>Category</InputLabel>
                <Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  label="Category"
                >
                  <MenuItem value="">
                    <em>Select Category</em>
                  </MenuItem>
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </Select>
                {errors.category && <FormHelperText>{errors.category}</FormHelperText>}
              </FormControl>
            </Grid>

            {/* Price */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Price (INR)"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                error={!!errors.price}
                helperText={errors.price}
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            {/* Stock Quantity */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Stock Quantity"
                name="stock"
                type="number"
                value={formData.stock}
                onChange={handleChange}
                error={!!errors.stock}
                helperText={errors.stock}
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            
            {/* Material / Weave Type */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Material / Weave Type (e.g., Pure Silk, Hand-spun Cotton)"
                name="material"
                value={formData.material}
                onChange={handleChange}
                error={!!errors.material}
                helperText={errors.material}
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            {/* Description */}
            <Grid item xs={12}>
              <FormControl fullWidth error={!!errors.description}>
                <Typography variant="body2" sx={{ mb: 1, color: errors.description ? 'error.main' : 'text.secondary', fontWeight: 'bold' }}>
                    Detailed Description
                </Typography>
                <TextareaAutosize
                  name="description"
                  minRows={5}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your product, its weave, material, cultural significance, and care instructions (min 50 chars)."
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    borderColor: errors.description ? '#e8e6e6ff' : '#e4d2d2ff',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '16px',
                    transition: 'border-color 0.3s',
                  }}
                />
                {errors.description && <FormHelperText>{errors.description}</FormHelperText>}
              </FormControl>
            </Grid>

            {/* Image Upload */}
            <Grid item xs={12}>
              <Box sx={{ border: `2px dashed ${primaryBrown}`, p: 3, borderRadius: 2, textAlign: 'center', bgcolor: '#fbf9f7' }}>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="image-upload"
                  multiple
                  type="file"
                  onChange={handleImageChange}
                />
                <label htmlFor="image-upload">
                  <Button 
                    variant="contained" 
                    component="span" 
                    startIcon={<CloudUploadIcon />}
                    sx={{
                        mb: 1,
                        bgcolor: primaryBrown,
                        '&:hover': { bgcolor: '#5d4037' }
                    }}
                  >
                    Upload Product Images
                  </Button>
                </label>
                {formData.images && (
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {formData.images.length} file(s) selected.
                  </Typography>
                )}
                {errors.images && (
                  <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                    {errors.images}
                  </Typography>
                )}
              </Box>
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ 
                  bgcolor: primaryBrown, 
                  '&:hover': { bgcolor: '#5d4037' },
                  fontWeight: 'bold',
                  borderRadius: 2
                }}
              >
                Submit Product for Review
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default AddNewProduct;
