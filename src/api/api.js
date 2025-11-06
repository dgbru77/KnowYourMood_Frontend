import axios from "axios"; //library to make HTTP requests

export const API_BASE = "http://localhost:8080/api"; //the base URL

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json"
  } //sends data in JSON format
});

// add Authorization header if token exists
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;// adds token to headers
  return config;// handles request success
}, error => Promise.reject(error));// handles request errors
export default api;
