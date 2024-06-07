import React, { useEffect, useState } from "react";
import PostPrev from "./PostPrev";
import { PostPrevProps } from "../../types/propsTypes";
import classNames from "classnames";
import { postType } from "../../types/fetchResponseTypes";
import postImg from "../../assets/images/c22c23_e3b5cb121db549fdbb1590f51d378b8c~mv2.png";
import { Axios } from "axios";
import Api from "../../utilities/apis";
import Loading from "../common/Loading";

const displayPrevs = () => {
  for (let index = 0; index < 6; index++) {
    return;
  }
};

const PostPrevList = ({ isBig = false }: PostPrevProps) => {
  const [posts, setPosts] = useState<postType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(posts.length);
    if (posts.length <= 0) {
      setLoading(true);
      let api = new Api();
      api
        .getPosts()
        .then((res) => {
          if (res) {
            console.log(res.data);
            setPosts(res?.data.data);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log("err " + err);
        });
      console.log("hi");
    }
  }, []);

  return (
    <div
      className={classNames(
        "flex flex-col min-w-full max-w-[1000px] item-center",
        {
          "lg:!flex-row !min-w-0 flex-wrap justify-center": isBig,
        }
      )}
    >
      {loading ? (
        <Loading />
      ) : (
        posts.map((post) => (
          <PostPrev
            title={post.title}
            description={post.description}
            likes={post.likes}
            id={post.id}
            isBig={isBig}
            key={post.id}
            image_path={post.image_path}
            created_at={post.created_at}
          />
        ))
      )}
    </div>
  );
};

export default PostPrevList;
