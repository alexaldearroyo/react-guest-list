import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const GuestForm = ({ addGuest }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addGuest({ firstName, lastName });
    setFirstName('');
    setLastName('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        label="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First name"
        required
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last name"
        required
        fullWidth
        onKeyDown={handleKeyDown}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" type="submit" sx={{ display: 'none' }}>
        Add Guest
      </Button>
    </Box>
  );
};

export default GuestForm;
