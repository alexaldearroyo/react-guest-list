// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { getGuests, addGuest, removeGuest, toggleAttending } from '../api';
import GuestForm from './GuestForm';
import GuestItem from './GuestItem';

const GuestList = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    getGuests()
      .then((response) => setGuests(response.data))
      .catch((error) => console.error('Error loading guests:', error));
  }, []);

  const handleAddGuest = (guest) => {
    addGuest(guest)
      .then((response) => setGuests([...guests, response.data]))
      .catch((error) => console.error('Error adding guest:', error));
  };

  const handleRemoveGuest = (id) => {
    removeGuest(id)
      .then(() => setGuests(guests.filter((guest) => guest.id !== id)))
      .catch((error) => console.error('Error removing guest:', error));
  };

  const handleToggleAttending = (id) => {
    const guest = guests.find((g) => g.id === id);
    toggleAttending(id, !guest.attending)
      .then((response) => {
        setGuests(guests.map((g) => (g.id === id ? response.data : g)));
      })
      .catch((error) => console.error('Error updating guest:', error));
  };

  return (
    <>
      <GuestForm addGuest={handleAddGuest} />
      <div>
        {guests.map((guest) => (
          <GuestItem
            key={`guest-${guest.id}`}
            guest={guest}
            removeGuest={handleRemoveGuest}
            toggleAttending={handleToggleAttending}
          />
        ))}
      </div>
    </>
  );
};

export default GuestList;
