import React, { useState } from 'react';

const GuestForm = ({ addGuest }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addGuest({ firstName, lastName });
    setFirstName('');
    setLastName('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div data-test-id="guest">
      <form onSubmit={handleSubmit}>
        <label>
          First name
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            required
          />
        </label>
        <label>
          Last name
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
            required
            onKeyDown={handleKeyDown}
          />
        </label>
        <button style={{ display: 'none' }}>Add Guest</button>
      </form>
    </div>
  );
};

export default GuestForm;
