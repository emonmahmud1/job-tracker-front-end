import axios from "axios";

const usePrivateAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

usePrivateAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    // console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Error in request interceptor:", error);
    return Promise.reject(error);
  }
);
export default usePrivateAxios;