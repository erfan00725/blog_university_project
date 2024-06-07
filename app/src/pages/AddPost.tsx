import React, { useEffect, useState } from "react";
import PostForm from "../components/Post/AddPost/PostForm";
import Api from "../utilities/apis";
import { useNavigate } from "react-router-dom";
import Loading from "../components/common/Loading";

const AddPost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    const api = new Api();
    let res;

    if (token) {
      api
        .check(token)
        .then((response) => {
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status == 401) {
            navigation("/login");
          }
        });
    } else {
      navigation("/login");
    }
  }, []);

  return <div>{isLoading ? <Loading /> : <PostForm />}</div>;
};

export default AddPost;
