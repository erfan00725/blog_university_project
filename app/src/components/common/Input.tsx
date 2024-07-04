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
  value,
  name,
  onChange,
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
          name={name}
          className={"input h-20 resize-none !leading-5 " + inputClassName}
          placeholder={placeholder}
          cols={20}
          rows={4}
          maxLength={255}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          className={"input " + inputClassName}
          placeholder={placeholder}
          type={type ?? "text"}
          accept={accept}
          value={value}
          onChange={onChange}
          name={name}
        />
      )}
    </div>
  );
};

export default Input;
