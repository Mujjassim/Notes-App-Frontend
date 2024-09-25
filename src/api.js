import axios from 'axios';
import axiosRetry from 'axios-retry';

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
  timeout: 5000,
});

// Retry failed requests (maximum of 3 retries)
axiosRetry(api, { retries: 3 });

export const fetchTasks = async () => {
  try {
    const response = await api.get('/fetchAllTasks');
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};
export const postTask = async (task) => {
  try {
    const response = await api.post('/addTask', { task });
    return response.data;
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};
