import React from "react";
import image from "../../assets/images/user.png";

const Comment = () => {
  return (
    <div className="mb-3 pb-3 border-b border-border-secondery-color last-of-type:border-0">
      <div className="flex ">
        <img src={image} className="w-9 h-9 rounded-full mr-4" alt="image" />
        <div className="flex flex-col">
          <span className="font-light text-sm leading-4">Guest</span>
          <span className="font-light text-sm leading-4">
            a few seconds ago
          </span>
        </div>
      </div>
      <div>
        <p className="ml-[50px] font-light mt-2">
          test test test test test test test test test test test test
        </p>
      </div>
    </div>
  );
};

export default Comment;
