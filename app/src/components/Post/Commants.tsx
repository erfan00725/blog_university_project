import React, { useState } from "react";
import CommentsInput from "./CommentsInput";
import Comment from "./Comment";

const Commants = () => {
  const [comments, setComments] = useState(new Array(5).fill(""));

  return (
    <div className="w-full flex flex-col px-24 pb-3 main-border">
      <h4 className="py-5 border-b border-border-secondery-color font-semibold text-lg mb-7">
        Comments
      </h4>
      <CommentsInput />
      {comments.map(() => (
        <Comment />
      ))}
    </div>
  );
};

export default Commants;
