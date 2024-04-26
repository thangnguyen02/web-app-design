import axios from "axios";
import { BASE_URL } from "../common";
import store from "../store/Store";
import { setLoading } from "../store/LoadingSlice";
const axiosInstant = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstant;
// axios.interceptors.request.use
axiosInstant.interceptors.request.use(
  function (config) {
    store.dispatch(setLoading(true));
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// axios.interceptors.response.use
axiosInstant.interceptors.response.use(
  function (response) {
    setTimeout(() => store.dispatch(setLoading(false)), [500]);

    console.log(response);
    return response;
  },
  function (error) {
    setTimeout(() => store.dispatch(setLoading(false)), [500]);
    if (error.response?.status == 404) {
      window.location.href = "/404";
    }

    return;
  }
);
