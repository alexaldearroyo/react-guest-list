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
    <div data-test-id="guest">
      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
        <TextField
          id="first-name"
          label="First name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="First name"
          required
          fullWidth
          disabled={disabled}
          sx={{ mb: 2 }}
        />
        <TextField
          id="last-name"
          label="Last name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          placeholder="Last name"
          required
          fullWidth
          onKeyDown={handleKeyDown}
          disabled={disabled}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" type="submit" disabled={disabled}>
            Add Guest
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default GuestForm;
