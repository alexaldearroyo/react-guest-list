import React from 'react';

const GuestItem = ({ guest }) => (
  <li>{guest.name} ({guest.email})</li>
);

export default GuestItem;

