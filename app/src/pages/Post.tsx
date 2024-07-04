import { useEffect, useState } from "react";
import PostCard from "../components/Post/PostCard";
import { PostType } from "../types/fetchResponseTypes";
import { useParams } from "react-router-dom";
import Api from "../utilities/apis";
import Loading from "../components/common/Loading";
import RecentPostsList from "../components/Post/RecentPostsList";
import Commants from "../components/Post/Commants";

const Post = () => {
  const [post, setPost] = useState<PostType>();
  const [isLoading, setIsLoading] = useState(true);
  const { post: postId = -1 } = useParams();
  const api = new Api();

  useEffect(() => {
    setIsLoading(true);
    api.getPost(Number(postId)).then((res) => {
      setPost(res?.data.data);
      setIsLoading(false);
      console.log(res?.data.data);
    });
  }, []);

  return (
    <div className="w-[940px]">
      {isLoading ? (
        <Loading />
      ) : (
        post && (
          <>
            <PostCard
              id={post.id}
              title={post.title}
              description={post.description}
              body={post.body}
              image_path={post.image_path}
              likes={post.likes}
              key={post.id}
              created_at={post.created_at}
              comments={post.comments}
            />
            <RecentPostsList />
            <Commants comments={post ? post.comments : []} />
          </>
        )
      )}
    </div>
  );
};

export default Post;
