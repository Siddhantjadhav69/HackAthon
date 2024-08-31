// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getEvents = () => axios.get(`${API_URL}/events`);
export const createEvent = (event, token) => axios.post(`${API_URL}/events`, event, { headers: { Authorization: `Bearer ${token}` } });
export const getServices = () => axios.get(`${API_URL}/services`);
export const createService = (service, token) => axios.post(`${API_URL}/services`, service, { headers: { Authorization: `Bearer ${token}` } });
export const register = (user) => axios.post(`${API_URL}/auth/register`, user);
export const login = (user) => axios.post(`${API_URL}/auth/login`, user);
