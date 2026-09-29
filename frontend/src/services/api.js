import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080', // URL do Spring Boot local
  headers: {
    'Content-Type': 'application/json',
  },
});