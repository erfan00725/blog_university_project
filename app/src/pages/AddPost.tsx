import { useEffect, useState } from "react";
import PostForm from "../components/Post/AddPost/PostForm";
import Api from "../utilities/apis";
import { useNavigate } from "react-router-dom";
import Loading from "../components/common/Loading";

const AddPost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigate();
  const api = new Api();

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token) {
      api
        .loginCheck(token)
        .then(() => {
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
