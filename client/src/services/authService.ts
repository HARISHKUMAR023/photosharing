import axios from 'axios';

// API endpoint base URL
const API_BASE_URL = 'http://localhost:5000/api/auth';

// Login function
export const loginPhotographer = async (email: string, password: string) => {
  const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
  return response.data;
};

// Signup function
export const registerPhotographer = async (email: string, username: string, password: string) => {
  const response = await axios.post(`${API_BASE_URL}/signup`, { email, name: username, password });
  return response.data;
};
