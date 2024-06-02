import React, { useState, useEffect } from 'react';
import { getGuests, addGuest, removeGuest, toggleAttending } from '../api';
import GuestForm from './GuestForm';
import GuestItem from './GuestItem';

const GuestList = () => {
  const [guests, setGuests] = useState([]); // Hold the list of guests

  const fetchGuests = () => {
    getGuests()
      .then((guestsData) => {
        if (Array.isArray(guestsData)) {
          setGuests(guestsData); // Update state with the fetched guests
        } else {
          console.error('Error: the response is not an array:', guestsData);
          setGuests([]);
        }
      })
      .catch((error) => {
        console.error('Error loading guests:', error);
        setGuests([]);
      });
  };

  fetchGuests();

  useEffect(() => {
    return () => {};
  }, []);

  const handleAddGuest = async (guest) => {
    try {
      const createdGuest = await addGuest(guest);
      setGuests([...guests, createdGuest]); // Update state with the new guest
    } catch (error) {
      console.error('Error adding guest:', error);
    }
  };

  const handleRemoveGuest = async (id) => {
    try {
      await removeGuest(id);
      setGuests(guests.filter((guest) => guest.id !== id)); // Update state to remove the guest
    } catch (error) {
      console.error('Error removing guest:', error);
    }
  };

  const handleToggleAttending = async (id) => {
    const guest = guests.find((g) => g.id === id);
    try {
      const updatedGuest = await toggleAttending(id, !guest.attending);
      setGuests(guests.map((g) => (g.id === id ? updatedGuest : g))); // Update state with the updated guest
    } catch (error) {
      console.error('Error updating guest:', error);
    }
  };

  return (
    <>
      <GuestForm addGuest={handleAddGuest} />
      <div>
        {Array.isArray(guests) ? (
          guests.map((guest) => (
            <GuestItem
              key={`guest-${guest.id}`}
              guest={guest}
              removeGuest={handleRemoveGuest}
              toggleAttending={handleToggleAttending}
            />
          ))
        ) : (
          <p>No guests available</p>
        )}
      </div>
    </>
  );
};

export default GuestList;
