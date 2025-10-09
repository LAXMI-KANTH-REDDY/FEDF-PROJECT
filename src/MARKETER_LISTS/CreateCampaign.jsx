// 4.1 CreateCampaign.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, FormControlLabel, Checkbox, Paper } from '@mui/material';

function CreateCampaign() {
  const [campaign, setCampaign] = useState({
    name: '', budget: '', duration: '', target: ''
  });
  const [isActive, setIsActive] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Campaign Created:', { ...campaign, isActive });
    alert(`Campaign "${campaign.name}" launched!`);
  };

  return (
    <Container component={Paper} sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Create New Campaign</Typography>
      <form onSubmit={handleSubmit}>
        <TextField name="name" label="Campaign Name" fullWidth required margin="normal" 
            onChange={(e) => setCampaign({ ...campaign, name: e.target.value })} />
        <TextField name="budget" label="Budget (₹)" type="number" fullWidth required margin="normal" 
            onChange={(e) => setCampaign({ ...campaign, budget: e.target.value })} />
        <TextField name="duration" label="Duration (Days)" type="number" fullWidth required margin="normal" 
            onChange={(e) => setCampaign({ ...campaign, duration: e.target.value })} />
        <TextField name="target" label="Target Audience/Products" fullWidth multiline rows={2} margin="normal" 
            onChange={(e) => setCampaign({ ...campaign, target: e.target.value })} />
        
        <FormControlLabel
          control={<Checkbox checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />}
          label="Launch Immediately (Active)"
          sx={{ mt: 2 }}
        />

        <Button type="submit" variant="contained" color="secondary" sx={{ mt: 3 }} fullWidth>
          Create & Launch Campaign
        </Button>
      </form>
    </Container>
  );
}

export default CreateCampaign;