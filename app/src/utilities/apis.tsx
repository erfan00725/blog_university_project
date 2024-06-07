import { AxiosInstance, AxiosResponse } from "axios";
import axios from "./axios";

export default class Api {
  private axsiosInstance: AxiosInstance;

  constructor() {
    this.axsiosInstance = axios;
  }

  getPosts = async (page: number = 1, perPage: number = 10) => {
    try {
      let response = await axios.get(
        "/post?page=" + page + "&perPage=" + perPage
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  };

  getPost = async (id: number) => {
    try {
      let response = await axios.get("/post/" + id);
      return response;
    } catch (err) {
      console.log(err);
    }
  };

  login = (email: string, pass: string) => {
    return axios.post("/login", {
      email: email,
      password: pass,
    });
  };

  check = (token: string) => {
    return axios.get("/check", {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
}
