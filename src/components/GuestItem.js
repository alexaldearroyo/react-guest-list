import {
  Box,
  Button,
  Checkbox,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

const GuestItem = ({ guest, removeGuest, toggleAttending }) => (
  <div data-test-id="guest">
    <Box sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
      <ListItem sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <ListItemText
          primary={
            <Typography variant="h6">
              {guest.firstName} {guest.lastName}
            </Typography>
          }
        />
        <Typography
          variant="subtitle1"
          sx={{ mr: 2, color: guest.attending ? 'green' : 'red' }}
        >
          Attending: {guest.attending ? 'Yes' : 'No'}
        </Typography>
        <Checkbox
          checked={guest.attending}
          onChange={() => toggleAttending(guest.id)}
          aria-label="attending"
          sx={{ mr: 2 }}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => removeGuest(guest.id)}
          sx={{
            backgroundColor: '#E44D2E',
            '&:hover': { backgroundColor: '#D43A1A' },
          }}
        >
          Remove
        </Button>
      </ListItem>
    </Box>
  </div>
);

export default GuestItem;
