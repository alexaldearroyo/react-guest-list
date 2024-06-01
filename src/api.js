import axios from 'axios';

const API_URL = 'http://localhost:4000/guests';

export const getGuests = () => {
  return axios.get(API_URL);
};

export const addGuest = (guest) => {
  return axios.post(API_URL, guest);
};

export const removeGuest = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const toggleAttending = (id, attending) => {
  return axios.patch(`${API_URL}/${id}`, { attending });
};
