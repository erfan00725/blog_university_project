import React from "react";

const Input = () => {
  return (
    <div className="relative">
      <span className="absolute left-0 bottom-full text-input-label cursor-default ">
        Enter your email
      </span>
      <input className="input" type="text" />
    </div>
  );
};

export default Input;
