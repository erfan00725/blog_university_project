import axios from "axios";

export default axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  timeout: 1000,
  headers: {
    Accept: "application/json",
  },
});
