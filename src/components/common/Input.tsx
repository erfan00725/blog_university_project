import React, { useEffect } from "react";
import { InputProps } from "../../types/propsTypes";

const Input = ({
  className,
  placeholder,
  title,
  type,
  required = false,
}: InputProps) => {
  return (
    <div className={"relative " + className}>
      <span className="absolute left-0 bottom-full text-input-label cursor-default ">
        {title ?? "Enter your email"}
        {required && " *"}
      </span>
      {type === "textarea" ? (
        <textarea
          name="Text1"
          className="input h-20 resize-none !leading-5"
          placeholder={placeholder}
          cols={20}
          rows={4}
          maxLength={255}
        ></textarea>
      ) : (
        <input
          className="input"
          placeholder={placeholder}
          type={type ?? "text"}
        />
      )}
    </div>
  );
};

export default Input;
