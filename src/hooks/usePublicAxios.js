import axios from "axios";



const usePublicAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export default usePublicAxios;
