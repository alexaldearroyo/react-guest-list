import { Box, ListItem, ListItemText } from '@mui/material';
import React from 'react';

const GuestItem = ({ guest }) => (
  <Box data-test-id="guest" sx={{ mb: 1 }}>
    <ListItem>
      <ListItemText primary={`${guest.firstName} ${guest.lastName}`} secondary={`Attending: ${guest.attending ? 'Yes' : 'No'}`} />
    </ListItem>
  </Box>
);

export default GuestItem;
