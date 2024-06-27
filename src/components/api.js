import axiosInstance from './api';

export async function signupUser(userData) {
  try {
    const response = await axiosInstance.post('/signup', userData);
    return response.data;
  } catch (error) {
    throw error; // Handle the error in the component that calls signupUser
  }
}
