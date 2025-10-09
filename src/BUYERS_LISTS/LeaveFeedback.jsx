// 2.4 LeaveFeedback.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Rating, Box, Paper } from '@mui/material';

function LeaveFeedback() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback Submitted:', { rating, feedback });
    alert('Thank you for your feedback!');
  };

  return (
    <Container component={Paper} sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Leave Feedback</Typography>
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
        <Button type="submit" variant="contained" color="secondary" sx={{ mt: 2 }}>
          Submit Feedback
        </Button>
      </form>
    </Container>
  );
}

export default LeaveFeedback;