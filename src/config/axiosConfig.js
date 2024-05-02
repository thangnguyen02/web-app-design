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
  function (request) {
    const token = "";

    // Đính token vào header mới
    const newHeaders = {
      ...request.headers,
      Authorization: token,
    };

    // Đính header mới vào lại request trước khi được gửi đi
    request = {
      ...request,
      headers: newHeaders,
    };

    return request;
  },
  function (error) {
    // Xử lý lỗi
    return Promise.reject(error);
  }
);
// axios.interceptors.response.use
axiosInstant.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response?.status == 404) {
      window.location.href = "/404";
    }

    return;
  }
);
