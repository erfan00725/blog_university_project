import React, { useState } from "react";
import { LoginInputProps } from "../../types/propsTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

const FormInput = ({
  placeholder,
  required = true,
  type,
  icon,
  onchage,
  value,
  isVAlid,
  name,
  error,
}: LoginInputProps) => {
  return (
    <div
      className={classNames(
        "w-60 h-12 mb-5 px-4 border border-secondery-color flex flex-row items-center rounded-xl relative text-indigo-400",
        { "!border-red-700": !isVAlid }
      )}
    >
      {icon || <FontAwesomeIcon icon={faUser} />}
      <input
        type={type || "text"}
        className="w-full ml-3 bg-transparent"
        placeholder={placeholder}
        required={required}
        onChange={onchage}
        value={value}
        name={name}
      />
      {error ? (
        <span className="absolute left-full ml-2 cursor-default text-red-700 w-max">
          {error}
        </span>
      ) : null}
    </div>
  );
};

export default FormInput;
