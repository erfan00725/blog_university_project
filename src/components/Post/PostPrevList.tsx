import React, { useEffect, useState } from "react";
import PostPrev from "./PostPrev";
import { PostPrevProps } from "../../types/propsTypes";
import classNames from "classnames";
import { postType } from "../../types/fetchResponseTypes";
import postImg from "../../assets/images/c22c23_e3b5cb121db549fdbb1590f51d378b8c~mv2.png";

const displayPrevs = () => {
  for (let index = 0; index < 6; index++) {
    return;
  }
};

const PostPrevList = ({ isBig = false }: PostPrevProps) => {
  const [posts, setPosts] = useState<postType[]>([]);

  useEffect(() => {
    for (let index = 0; index < 10; index++) {
      setPosts((posts) => [
        ...posts,
        {
          id: index,
          description:
            "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
          title: "Do Not Leave Tokyo Before Eating This Ramen",
          image_path: postImg,
          likes: 0,
        },
      ]);
    }
  });

  return (
    <div
      className={classNames("flex flex-col max-w-[1000px]", {
        "lg:!flex-row flex-wrap justify-center": isBig,
      })}
    >
      {posts.map((post) => (
        <PostPrev
          title={post.title}
          description={post.description}
          likes={post.likes}
          id={post.id}
          isBig={isBig}
          key={post.id}
          image_path={post.image_path}
        />
      ))}
    </div>
  );
};

export default PostPrevList;
