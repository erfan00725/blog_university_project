import React from "react";
import Input from "./Input";

const Reminder = () => {
  return (
    <div className="flex flex-row w-full border-main-color border-t border-b mb-3 justify-around items-center py-20">
      <span className="font-bold text-main-color text-4xl">
        Never Miss a New Post.
      </span>
      <div className="flex flex-row ">
        <Input />
        <button className="btn ml-3">Subscribe</button>
      </div>
    </div>
  );
};

export default Reminder;
