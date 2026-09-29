import axios from 'axios';

const API_BASE_URL = 'https://projeto-de-extensao2026-2.onrender.com';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});