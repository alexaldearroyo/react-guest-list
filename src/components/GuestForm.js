import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const GuestForm = ({ addGuest, disabled }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!disabled) {
      addGuest({ firstName, lastName });
      setFirstName('');
      setLastName('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        label="First Name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        placeholder="First name"
        required
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Last Name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        placeholder="Last name"
        required
        fullWidth
        onKeyDown={handleKeyDown}
        sx={{ mb: 2 }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" type="submit">
          Add Guest
        </Button>
      </Box>
    </Box>
  );
};

export default GuestForm;
