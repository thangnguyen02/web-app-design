import axios from "axios";

const axiosInstant = axios.create({
  baseURL: "url",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstant;
// axios.interceptors.request.use

// axios.interceptors.response.use
