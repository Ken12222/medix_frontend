import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api/",
  withCredentials: true,
  withXSRFToken: true,
});

export default axiosInstance;
