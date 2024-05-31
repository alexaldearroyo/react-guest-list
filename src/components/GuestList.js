import React, { useState } from 'react';
import GuestForm from './GuestForm';
import GuestItem from './GuestItem';

const GuestList = () => {
  const [guests, setGuests] = useState([]);

  const addGuest = (guest) => {
    setGuests([...guests, { ...guest, id: guests.length, attending: false }]);
  };

  const removeGuest = (id) => {
    setGuests(guests.filter((guest) => guest.id !== id));
  };

  return (
    <>
      <GuestForm addGuest={addGuest} />
      <div>
        {guests.map((guest) => (
          <GuestItem
            key={`guest-${guest.id}`}
            guest={guest}
            removeGuest={removeGuest}
          />
        ))}
      </div>
    </>
  );
};

export default GuestList;
