import React from "react";
import { LoginInputProps } from "../../types/propsTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const LoginInput = ({
  placeholder,
  required = true,
  type,
  icon,
}: LoginInputProps) => {
  return (
    <div className="w-60 h-12 mb-5 px-4 border border-indigo-400 flex flex-row items-center rounded-xl text-indigo-400">
      {icon || <FontAwesomeIcon icon={faUser} />}
      <input
        type={type || "text"}
        className="w-full ml-3 bg-transparent"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default LoginInput;
