// src/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
});

// Automatically attach token from localStorage for every request
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
