import React, { useEffect } from 'react';
import { Box, Typography, Paper, TextField, Button, Grid, MenuItem } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

// Mock Data
const reportTypes = ["Financial Summary", "User Activity Log", "Product Performance", "Inventory Audit"];
const formats = ["PDF", "CSV", "JSON"];

const ExportReports = () => {
  const [reportType, setReportType] = React.useState('');
  const [format, setFormat] = React.useState('');

  useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #282920ff 60%, #ceab83ff 100%)';
    return () => { document.body.style.background = ''; };
  }, []);

  const handleDownload = (e) => {
    e.preventDefault();
    if (reportType && format) {
      // Simulation of the download process
      alert(`Downloading ${reportType} in ${format} format... (Simulated)`);
    } else {
      // In a real application, use a custom modal or snackbar for errors, not alert()
      alert("Please select both report type and format.");
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', p: 3 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#aecc42ff' }}>
        <DownloadIcon sx={{ mr: 1, verticalAlign: 'middle' }} /> Download Reports
      </Typography>

      {/* Thematic Form Paper with strong elevation */}
      <Paper elevation={6} sx={{ p: 5, borderRadius: 3, bgcolor: '#fffde7' }}>
        <Typography variant="h6" sx={{ mb: 3, color: '#5d4037', fontWeight: 'medium' }}>
          Select Report Parameters
        </Typography>
        <Box component="form" onSubmit={handleDownload}>
          <Grid container spacing={3}>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                select
                fullWidth
                label="Report Type"
                variant="outlined"
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                InputLabelProps={{ shrink: true }}
                sx={{ bgcolor: 'white', borderRadius: 1 }}
              >
                {reportTypes.map((type) => (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                select
                fullWidth
                label="Output Format"
                variant="outlined"
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                InputLabelProps={{ shrink: true }}
                sx={{ bgcolor: 'white', borderRadius: 1 }}
              >
                {formats.map((f) => (
                  <MenuItem key={f} value={f}>{f}</MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Date Range (Optional)"
                type="text"
                placeholder="e.g., 2024-01-01 to 2024-12-31"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                sx={{ bgcolor: 'white', borderRadius: 1 }}
              />
            </Grid>

            <Grid item xs={12} sx={{ textAlign: 'right' }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                startIcon={<DownloadIcon />}
                disabled={!reportType || !format}
                sx={{ bgcolor: '#6e4b1f', '&:hover': { bgcolor: '#bfa14a' }, borderRadius: 2 }}
              >
                Generate & Download
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default ExportReports;
