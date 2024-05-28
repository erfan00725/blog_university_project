import React from "react";
import LoginInput from "../common/LoginInput";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginForm = () => {
  return (
    <div className="w-[600px] h-[600px] flex flex-col  justify-center  border border-slate-300 items-center shadow-lg shadow-gray-400 mb-10 rounded-full">
      <h2 className="font-semibold text-3xl text-secondery-color mb-10">
        Admin Login
      </h2>
      <LoginInput placeholder="Username" />
      <LoginInput
        icon={<FontAwesomeIcon icon={faLock} />}
        placeholder="Password"
        type="password"
      />
      <button
        type="submit"
        className="w-40 h-12 border transition-colors duration-150 text-indigo-400 border-secondery-color rounded-full hover:bg-secondery-color hover:text-alt-color"
      >
        Submit
      </button>
    </div>
  );
};

export default LoginForm;
