import './GuestItem.css';
import React from 'react';

const GuestItem = ({ guest, removeGuest, toggleAttending }) => (
  <div data-test-id="guest" className="guest-item">
    <div className="guest-item-container">
      <div className="guest-list-item">
        <div className="guest-name">
          <h6>
            {guest.firstName} {guest.lastName}
          </h6>
        </div>
        <div
          className={`guest-status ${guest.attending ? 'attending' : 'not-attending'}`}
        >
          Attending: {guest.attending ? 'Yes' : 'No'}
        </div>
        <input
          type="checkbox"
          checked={guest.attending}
          onChange={() => toggleAttending(guest.id)}
          aria-label="attending"
          className="guest-checkbox"
        />
        <button className="remove-button" onClick={() => removeGuest(guest.id)}>
          Remove
        </button>
      </div>
    </div>
  </div>
);

export default GuestItem;
