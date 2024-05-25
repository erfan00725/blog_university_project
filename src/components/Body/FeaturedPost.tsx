import React from "react";
import featuredIMG from "../../assets/FEATURED-POST.webp";
import PostReadInfo from "../PostReadInfo";

const FeaturedPost = () => {
  return (
    <div className="flex flex-col items-start justify-center w-[940px] border border-main-color mt-28 mb-20 relative">
      <div className="border bg-alt-color border-main-color absolute top-[-32px] left-[-1px] w-96 section-title py-0">
        <span>FEATURED POST</span>
      </div>
      <div>
        {" "}
        <a href="">
          <img
            src={featuredIMG}
            alt="Back to Fiction: What I'm Reading This Summer"
          />
        </a>
      </div>
      <div className="flex flex-col justify-center items-center px-8 py-7">
        <PostReadInfo />
        <div className="post-prev-text">
          <a href="">
            <h3 className="post-title">
              Back to Fiction: What I'm Reading This Summer
            </h3>
            <p className="post-description">
              Create a blog post subtitle that summarizes your post in a few
              short, punchy sentences and entices your audience to continue
              reading....
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
