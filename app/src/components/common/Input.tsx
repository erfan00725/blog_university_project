import React, { useEffect } from "react";
import { InputProps } from "../../types/propsTypes";
import classNames from "classnames";

const Input = ({
  className,
  inputClassName,
  placeholder,
  title,
  type,
  required = false,
  accept,
}: InputProps) => {
  return (
    <div
      className={classNames(
        "relative border-b border-main-color hover:border-secondery-color ",
        className,
        {
          "mt-10": type === "textarea",
        }
      )}
    >
      {title && (
        <span className=" text-input-label cursor-default ">
          {title}
          {required && " *"}
        </span>
      )}

      {type === "textarea" ? (
        <textarea
          name="Text1"
          className={"input h-20 resize-none !leading-5 " + inputClassName}
          placeholder={placeholder}
          cols={20}
          rows={4}
          maxLength={255}
        ></textarea>
      ) : (
        <input
          className={"input " + inputClassName}
          placeholder={placeholder}
          type={type ?? "text"}
          accept={accept}
        />
      )}
    </div>
  );
};

export default Input;
