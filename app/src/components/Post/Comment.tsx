import image from "../../assets/images/user.png";
import { CommentProps } from "../../types/propsTypes";
import ReactTimeAgo from "react-time-ago";

const Comment = ({ comment }: CommentProps) => {
  let commentDate = new Date(comment.created_at);

  return (
    <div className="mb-3 pb-3 border-b border-border-secondery-color last-of-type:border-0">
      <div className="flex ">
        <img src={image} className="w-9 h-9 rounded-full mr-4" alt="image" />
        <div className="flex flex-col">
          <span className="font-light text-sm leading-4">
            {comment.user_name}
          </span>
          <span className="font-light text-sm leading-4">
            {" "}
            <ReactTimeAgo date={commentDate.getTime()} locale="en-US" />
          </span>
        </div>
      </div>
      <div>
        <p className="ml-[50px] font-light mt-2">{comment.content}</p>
      </div>
    </div>
  );
};

export default Comment;
