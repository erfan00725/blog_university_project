import React, { useContext, useEffect, useState } from "react";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Api from "../../utilities/apis";
import FormInput from "../common/FormInput";
import { useNavigate } from "react-router-dom";
import FormValidation from "../../utilities/formValidate";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/authContext";

const inputsConfig = { email: "", password: "" };

const LoginForm = () => {
  const api = new Api();

  const navigation = useNavigate();

  const [inputs, setInputs] = useState<{ [key: string]: string }>(inputsConfig);
  // const [postImage, setPostImage] = useState<File>();

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const setAuth = useContext(AuthContext)[1];

  const formValidation = new FormValidation();

  const inputsChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    let validate = formValidation.validation(e.target.name, e.target.value);

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: validate,
    }));
  };

  const submitHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault;
    for (let key in inputs) {
      let validate = formValidation.validation(key, inputs[key]);
      setErrors((prev) => ({
        ...prev,
        [key]: validate,
      }));
    }

    if (formValidation.isValidated(errors)) {
      api
        .login(inputs["email"], inputs["password"])
        .then((res) => {
          localStorage.setItem("token", res.data.data.token);
          setAuth(true);
          toast.success("Login successfully!");
          navigation("/");
        })
        .catch((error) => {
          toast.error("somthinsg wrong : ");
          console.log(error);
        });
    }
  };

  useEffect(() => {}, []);

  useEffect(() => {
    if (formValidation.isValidated(errors)) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [errors, inputs]);

  return (
    <div className="w-[600px] h-[600px] flex flex-col  justify-center  border border-slate-300 items-center shadow-lg shadow-gray-400 mb-10 rounded-full">
      <h2 className="font-semibold text-3xl text-secondery-color mb-10">
        Admin Login
      </h2>
      {Object.keys(inputsConfig).map((input) => (
        <FormInput
          icon={<FontAwesomeIcon icon={faLock} />}
          placeholder={input}
          type={input}
          onChange={inputsChangeHandler}
          value={inputs[input]}
          isVAlid={errors[input] ? errors[input].length <= 0 : true}
          name={input}
          error={errors[input]}
        />
      ))}
      <button
        disabled={submitDisabled}
        type="submit"
        onClick={submitHandler}
        className="w-40 h-12 border transition-colors duration-150 text-indigo-400 border-secondery-color rounded-full disabled:bg-secondery-color disabled:text-indigo-400 hover:bg-secondery-color hover:text-alt-color"
      >
        Submit
      </button>
    </div>
  );
};

export default LoginForm;
