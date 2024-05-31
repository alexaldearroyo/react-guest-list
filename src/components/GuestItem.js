import { Box, Button, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';

const GuestItem = ({ guest, removeGuest }) => (
  <Box
    data-test-id="guest"
    sx={{ mb: 1, display: 'flex', alignItems: 'center' }}
  >
    <ListItem sx={{ flex: 1 }}>
      <ListItemText
        primary={
          <Typography variant="h6">
            {guest.firstName} {guest.lastName}
          </Typography>
        }
        secondary={`Attending: ${guest.attending ? 'Yes' : 'No'}`}
      />
    </ListItem>
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
  </Box>
);

export default GuestItem;
