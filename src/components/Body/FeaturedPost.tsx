import React from "react";
import featuredIMG from "../../assets/images/FEATURED-POST.webp";
import PostReadInfo from "../Post/PostReadInfo";
import { Link } from "react-router-dom";

const FeaturedPost = () => {
  return (
    <div className="flex flex-col items-start justify-center w-[940px] border border-main-color mb-20 relative">
      <div className="border bg-alt-color border-main-color absolute top-[-32px] left-[-1px] w-96 section-title py-0">
        <span>FEATURED POST</span>
      </div>
      <div>
        {" "}
        <Link to="/posts/1">
          <img
            src={featuredIMG}
            alt="Back to Fiction: What I'm Reading This Summer"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center px-8 py-7">
        <PostReadInfo />
        <div className="post-prev-text">
          <Link to="/posts/1">
            <h3 className="post-title">
              Back to Fiction: What I'm Reading This Summer
            </h3>
            <p className="post-description">
              Create a blog post subtitle that summarizes your post in a few
              short, punchy sentences and entices your audience to continue
              reading....
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
