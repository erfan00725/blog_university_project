import { useEffect, useState } from "react";
import PostPrev from "./PostPrev";
import { PostPrevProps } from "../../types/propsTypes";
import classNames from "classnames";
import { PostType } from "../../types/fetchResponseTypes";

import Api from "../../utilities/apis";
import Loading from "../common/Loading";

const PostPrevList = ({
  isBig = false,
  page = 1,
  perPage = 10,
}: PostPrevProps) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(posts.length);
    if (posts.length <= 0) {
      setLoading(true);
      let api = new Api();
      api
        .getPosts(page, perPage)
        .then((res) => {
          setPosts(res?.data.data);
          setLoading(false);
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
            comments={post.comments}
            comments_count={post.comments_count}
          />
        ))
      )}
    </div>
  );
};

export default PostPrevList;
