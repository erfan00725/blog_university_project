import { useEffect, useState } from "react";
import PostPrevSmall from "./PostPrevSmall";
import Api from "../../utilities/apis";
import { PostType } from "../../types/fetchResponseTypes";
import Loading from "../common/Loading";
import { Link, useParams } from "react-router-dom";

const RecentPostsList = () => {
  const api = new Api();
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const param = useParams();

  useEffect(() => {
    api
      .getPosts(1, 4, "DESC")
      .then((res) => {
        setPosts(res?.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col w-full mb-5">
      <div className="w-full flex flex-row justify-between my-5 ">
        <span className="font-light text-lg">Recent Posts</span>
        <Link to={"/posts"}>
          <span className="font-light text-hover">See All</span>
        </Link>
      </div>
      <div className="flex flex-row">
        {isLoading ? (
          <Loading />
        ) : (
          posts
            .filter((post) => post.id.toString() != param.post)
            .map((post, index) =>
              index <= 2 ? <PostPrevSmall post={post} /> : null
            )
        )}
      </div>
    </div>
  );
};

export default RecentPostsList;
