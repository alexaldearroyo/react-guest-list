const baseUrl = 'https://9rbjs-4000.csb.app';

export const getGuests = async () => {
  try {
    const response = await fetch(`${baseUrl}/guests`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const allGuests = await response.json();
    return allGuests;
  } catch (error) {
    console.error('Error fetching guests:', error);
    throw error;
  }
};

export const getGuestById = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/guests/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const guest = await response.json();
    return guest;
  } catch (error) {
    console.error(`Error fetching guest with ID ${id}:`, error);
    throw error;
  }
};

export const addGuest = async (guest) => {
  try {
    const response = await fetch(`${baseUrl}/guests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(guest),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const createdGuest = await response.json();
    return createdGuest;
  } catch (error) {
    console.error('Error adding guest:', error);
    throw error;
  }
};

export const removeGuest = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/guests/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const deletedGuest = await response.json();
    return deletedGuest;
  } catch (error) {
    console.error('Error removing guest:', error);
    throw error;
  }
};

export const toggleAttending = async (id, attending) => {
  try {
    const response = await fetch(`${baseUrl}/guests/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const updatedGuest = await response.json();
    return updatedGuest;
  } catch (error) {
    console.error('Error updating guest:', error);
    throw error;
  }
};
