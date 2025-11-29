import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Divider,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { motion } from 'framer-motion';

const ExportReports = () => {
  const [reportType, setReportType] = React.useState('sales');
  const [format, setFormat] = React.useState('csv');

  useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #fff8f3 60%, #f7e0c3 100%)';
    return () => { document.body.style.background = ''; };
  }, []);

  const handleDownload = () => {
    alert(`📊 Downloading ${reportType.toUpperCase()} report in ${format.toUpperCase()} format...`);
  };

  return (
    <Box sx={{ minHeight: '100vh', p: 3 }}>
      <Paper
        elevation={8}
        sx={{
          width: '100%',
          maxWidth: 900,
          borderRadius: 4,
          overflow: 'hidden',
          bgcolor: '#fffef9',
          boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            bgcolor: '#6e4b1f',
            color: 'white',
            p: 3,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <AssessmentIcon sx={{ fontSize: 38 }} />
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Export Reports
          </Typography>
        </Box>

        {/* Content Section */}
        <Box sx={{ p: 5 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 3, color: '#000', fontWeight: 500 }}
          >
            Choose your desired report type and format to download insights.
          </Typography>

          <Grid container spacing={4}>
            {/* Report Type */}
            <Grid item xs={12} md={6}>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  borderRadius: 3,
                  borderColor: '#d7ccc8',
                  bgcolor: '#fffaf3',
                  transition: '0.3s',
                  '&:hover': { boxShadow: '0 0 12px rgba(141, 110, 99, 0.2)' },
                }}
              >
                <FormControl component="fieldset" fullWidth>
                  <FormLabel
                    component="legend"
                    sx={{ color: '#000', fontWeight: 600, mb: 1 }}
                  >
                    1️⃣ Select Report Type
                  </FormLabel>
                  <RadioGroup
                    aria-label="report-type"
                    value={reportType}
                    onChange={(e) => setReportType(e.target.value)}
                  >
                    <FormControlLabel
                      value="sales"
                      control={
                        <Radio
                          sx={{
                            color: '#a1887f',
                            '&.Mui-checked': { color: '#8d6e63' },
                          }}
                        />
                      }
                      label="Sales & Revenue Report"
                    />
                    <FormControlLabel
                      value="conversion"
                      control={
                        <Radio
                          sx={{
                            color: '#a1887f',
                            '&.Mui-checked': { color: '#8d6e63' },
                          }}
                        />
                      }
                      label="Campaign Conversion Report"
                    />
                    <FormControlLabel
                      value="product"
                      control={
                        <Radio
                          sx={{
                            color: '#a1887f',
                            '&.Mui-checked': { color: '#8d6e63' },
                          }}
                        />
                      }
                      label="Product Performance Report"
                    />
                  </RadioGroup>
                </FormControl>
              </Paper>
            </Grid>

            {/* File Format */}
            <Grid item xs={12} md={6}>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  borderRadius: 3,
                  borderColor: '#d7ccc8',
                  bgcolor: '#fffaf3',
                  transition: '0.3s',
                  '&:hover': { boxShadow: '0 0 12px rgba(141, 110, 99, 0.2)' },
                }}
              >
                <FormControl component="fieldset" fullWidth>
                  <FormLabel
                    component="legend"
                    sx={{ color: '#000', fontWeight: 600, mb: 1 }}
                  >
                    2️⃣ Select File Format
                  </FormLabel>
                  <RadioGroup
                    aria-label="file-format"
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                  >
                    <FormControlLabel
                      value="csv"
                      control={
                        <Radio
                          sx={{
                            color: '#a1887f',
                            '&.Mui-checked': { color: '#8d6e63' },
                          }}
                        />
                      }
                      label="CSV (Comma Separated Values)"
                    />
                    <FormControlLabel
                      value="pdf"
                      control={
                        <Radio
                          sx={{
                            color: '#a1887f',
                            '&.Mui-checked': { color: '#8d6e63' },
                          }}
                        />
                      }
                      label="PDF Document"
                    />
                  </RadioGroup>
                </FormControl>
              </Paper>
            </Grid>
          </Grid>

          {/* Divider */}
          <Divider sx={{ my: 4, borderColor: '#d7ccc8' }} />

          {/* Download Button */}
          <Box sx={{ textAlign: 'center' }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<DownloadIcon />}
                onClick={handleDownload}
                sx={{
                  px: 4,
                  py: 1.3,
                  fontWeight: 'bold',
                  textTransform: 'none',
                  borderRadius: 3,
                  bgcolor: '#6e4b1f',
                  boxShadow: '0 4px 12px rgba(141, 110, 99, 0.4)',
                  '&:hover': {
                    bgcolor: '#bfa14a',
                    boxShadow: '0 6px 16px rgba(93, 64, 55, 0.5)',
                  },
                }}
              >
                Download Report
              </Button>
            </motion.div>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ExportReports;
