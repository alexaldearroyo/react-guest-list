import React, { useState } from 'react';
import GuestForm from './GuestForm';
import GuestItem from './GuestItem';

const GuestList = () => {
  const [guests, setGuests] = useState([]);

  const addGuest = (guest) => {
    setGuests([...guests, { ...guest, id: Date.now(), attending: false }]);
  };

  const removeGuest = (id) => {
    setGuests(guests.filter((guest) => guest.id !== id));
  };

  const toggleAttending = (id) => {
    setGuests(
      guests.map((guest) =>
        guest.id === id ? { ...guest, attending: !guest.attending } : guest,
      ),
    );
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
            toggleAttending={toggleAttending}
          />
        ))}
      </div>
    </>
  );
};

export default GuestList;
