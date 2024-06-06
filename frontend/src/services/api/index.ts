import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:4040/booknook-api",
});

API.interceptors.request.use(async function (config) {
  try {
    return config;
  } catch (e) {
    return config;
  }
});

export default API;
