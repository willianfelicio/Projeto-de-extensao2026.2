import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP

// Define a URL base para a API
const API_BASE_URL = 'https://projeto-de-extensao2026-2.onrender.com';

// Cria uma instância do axios com a URL base e cabeçalhos padrão
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});