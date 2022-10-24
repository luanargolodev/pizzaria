import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sujeito-pizza.herokuapp.com',
});

export { api };