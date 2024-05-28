import React from "react";
import LoginInput from "../common/LoginInput";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginForm = () => {
  return (
    <div className="w-[600px] h-[600px] flex flex-col  justify-center  border border-slate-300 items-center shadow-lg shadow-gray-400 mb-10 rounded-full">
      <h2 className="font-semibold text-3xl text-indigo-900 mb-10">
        Admin Login
      </h2>
      <LoginInput placeholder="Username" />
      <LoginInput
        icon={<FontAwesomeIcon icon={faLock} />}
        placeholder="Password"
        type="password"
      />
    </div>
  );
};

export default LoginForm;
