import React from 'react';

const GuestItem = ({ guest }) => (
  <div data-test-id="guest">
    <li>
      {guest.firstName} {guest.lastName}
    </li>
  </div>
);

export default GuestItem;
