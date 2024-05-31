import { List } from '@mui/material';
import React, { useState } from 'react';
import GuestForm from './GuestForm';
import GuestItem from './GuestItem';

const GuestList = () => {
  const [guests, setGuests] = useState([]);

  const addGuest = (guest) => {
    setGuests([...guests, { ...guest, id: guests.length, attending: false }]);
  };

  return (
    <>
      <GuestForm addGuest={addGuest} />
      <List>
        {guests.map((guest) => (
          <GuestItem key={`guest-${guest.id}`} guest={guest} />
        ))}
      </List>
    </>
  );
};

export default GuestList;
