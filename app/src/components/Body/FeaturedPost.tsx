import React, { useEffect, useState } from "react";
import featuredIMG from "../../assets/images/FEATURED-POST.webp";
import PostReadInfo from "../Post/PostReadInfo";
import { Link } from "react-router-dom";
import { PostType } from "../../types/fetchResponseTypes";
import Api from "../../utilities/apis";
import Loading from "../common/Loading";
import { BASE_STORAGE_URL } from "../../configs/urls";

const FeaturedPost = () => {
  const [post, setPost] = useState<PostType>();
  const [isLoading, setIsLoading] = useState(true);
  const api = new Api();
  const linkTo = `/posts/${post?.id}`;

  useEffect(() => {
    api
      .getFeatured()
      .then((res) => {
        setPost(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(post?.id);
  });

  return isLoading ? (
    <Loading />
  ) : (
    <div className="flex flex-col items-start justify-center w-[940px] border border-main-color mb-20 relative">
      <div className="border bg-alt-color border-main-color absolute top-[-32px] left-[-1px] w-96 section-title py-0">
        <span>FEATURED POST</span>
      </div>
      <div className="w-full">
        {" "}
        <Link to={linkTo}>
          <img
            src={BASE_STORAGE_URL + post?.image_path}
            alt="image"
            className="w-full object-cover"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center px-8 py-7">
        <PostReadInfo />
        <div className="post-prev-text">
          <Link to={linkTo}>
            <h3 className="post-title">{post?.title}</h3>
            <p className="post-description">{post?.description}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
