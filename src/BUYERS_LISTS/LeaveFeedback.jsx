// 2.4 LeaveFeedback.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Rating, Box, Paper } from '@mui/material';

function LeaveFeedback() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    document.body.style.background = 'linear-gradient(135deg, #282920ff 60%, #ceab83ff 100%)';
    return () => { document.body.style.background = ''; };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback Submitted:', { rating, feedback });
    alert('Thank you for your feedback!');
  };

  return (
    <Box sx={{ minHeight: '100vh', p: 3 }}>
      <Container component={Paper} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#222' }}>Leave Feedback</Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ my: 3 }}>
            <Typography component="legend">Overall Rating</Typography>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              size="large"
            />
          </Box>
          <TextField
            label="Your Comments"
            multiline
            rows={4}
            fullWidth
            required
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            margin="normal"
            helperText="Tell us about your experience with your recent purchase."
          />
          <Button type="submit" variant="contained" sx={{ mt: 2, bgcolor: '#6e4b1f', '&:hover': { bgcolor: '#bfa14a' } }}>
            Submit Feedback
          </Button>
        </form>
      </Container>
    </Box>
  );
}

export default LeaveFeedback;
