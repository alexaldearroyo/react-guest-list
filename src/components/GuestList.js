import React, { useState } from 'react';
import GuestForm from './GuestForm';
import GuestItem from './GuestItem';

const GuestList = () => {
  const [guests, setGuests] = useState([]);

  const addGuest = (guest) => {
    setGuests([...guests, { ...guest, id: guests.length }]);
  };

  return (
    <>
      <GuestForm addGuest={addGuest} />
      <ul>
        {guests.map((guest) => (
          <GuestItem key={`guest-${guest.id}`} guest={guest} />
        ))}
      </ul>
    </>
  );
};

export default GuestList;
