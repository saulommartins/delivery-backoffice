import axios from 'axios';

const api = axios.create({
  baseURL: 'https://topdog-api.herokuapp.com',
});

export default api;