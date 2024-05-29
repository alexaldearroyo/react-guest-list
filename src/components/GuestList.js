import React, { useState } from 'react';
import GuestForm from './GuestForm';
import GuestItem from './GuestItem';

const GuestList = () => {
  const [guests, setGuests] = useState([]);

  const addGuest = (guest) => {
    setGuests([...guests, guest]);
  };

  return (
    <div>
      <h1>Guest List</h1>
      <GuestForm addGuest={addGuest} />
      <ul>
        {guests.map((guest, index) => (
          <GuestItem key={index} guest={guest} />
        ))}
      </ul>
    </div>
  );
};

export default GuestList;

