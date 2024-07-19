import { Link } from "react-router-dom";
import { PostPrevSmallType } from "../../types/propsTypes";
import { BASE_STORAGE_URL } from "../../configs/urls";

const PostPrevSmall = ({ post }: PostPrevSmallType) => {
  return (
    <Link
      to={`/posts/${post.id}`}
      className="flex flex-col w-[288px] justify-start items-center post-prev-text main-border h-[265px] flex-1 mr-8 last-of-type:mr-0"
    >
      <img src={BASE_STORAGE_URL + post.image_path} alt="image" className="" />
      <span className="flex-1 w-full inline-block p-5 font-semibold text-wrap">
        {post.title}
      </span>
    </Link>
  );
};

export default PostPrevSmall;
