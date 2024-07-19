import axios from "./axios";
import { ApiResponseType, PostType } from "../types/fetchResponseTypes";
import { CreateCommentType } from "../types/apiParamsTypes";

export default class Api {
  // private axsiosInstance: AxiosInstance;

  constructor() {
    // this.axsiosInstance = axios;
  }

  getPosts = (
    page: number = 1,
    perPage: number = 10,
    order: string = "ASC"
  ) => {
    console.log(`/post?page=${page}&perPage=${perPage}&order=${order}`);
    return axios.get(`/post?page=${page}&perPage=${perPage}&order=${order}`);
  };

  addPost = () => {};

  addComment = (data: CreateCommentType, postId: number) => {
    return axios.post(`post/${postId}/comments`, data);
  };

  getPost = async (id: number) => {
    try {
      let response = await axios.get<ApiResponseType<PostType>>("/post/" + id);
      return response;
    } catch (err) {
      console.log(err);
    }
  };

  isLiked = (id: number) => {
    return axios.get(`post/${id}/isLike`);
  };

  login = (email: string, pass: string) => {
    return axios.post("/login", {
      email: email,
      password: pass,
    });
  };

  logout = () => {
    let token = localStorage.getItem("token");

    return axios.post("/logout", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  loginCheck = (token: string) => {
    return axios.get("/check", {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  getFeatured = () => {
    return axios.get("/post/featured");
  };
}
