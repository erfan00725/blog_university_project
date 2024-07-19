import { useEffect, useState } from "react";
import CommentsInput from "./CommentsInput";
import Comment from "./Comment";
import { CommentsProps } from "../../types/propsTypes";

const Commants = ({ comments: _comments }: CommentsProps) => {
  const [comments, setComments] = useState(_comments);

  useEffect(() => {
    console.log(comments);
  });

  return (
    <div className="w-full flex flex-col px-24 pb-3 main-border">
      <h4 className="py-5 border-b border-border-secondery-color font-semibold text-lg mb-7">
        Comments
      </h4>
      <CommentsInput setComments={setComments} />
      {comments
        .slice(0)
        .reverse()
        .map((comment) => {
          return <Comment comment={comment} key={comment.id} />;
        })}
    </div>
  );
};

export default Commants;
