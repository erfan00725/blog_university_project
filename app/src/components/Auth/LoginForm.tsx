import React, { useEffect, useState } from "react";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Api from "../../utilities/apis";
import FormInput from "../common/FormInput";
import { useNavigate } from "react-router-dom";

const emailValidation = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const passValidation = (pass: string): boolean => {
  return pass.length > 6;
};

const LoginForm = () => {
  const api = new Api();

  const navigation = useNavigate();

  const [inputs, setInputs] = useState<{ [key: string]: string }>({});

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const isValidated = (rules?: string[]) => {
    let validated = false;

    validated = Object.values(errors).every((error) => error === "");

    return validated;
  };

  const validation = (inputName: string, value: string) => {
    let validated: boolean = true;

    switch (inputName) {
      case "password":
        validated = passValidation(value);
        break;
      case "email":
        validated = emailValidation(value);
        break;

      default:
        validated = true;
        break;
    }

    if (value.length <= 0) validated = false;

    if (validated) {
      setErrors((prev) => {
        return { ...prev, [inputName]: "" };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, [inputName]: "enter a valid " + inputName };
      });
    }
  };

  const inputsChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    validation(e.target.name, e.target.value);
    console.log(errors);
  };

  const submitHandler = (e: React.MouseEvent<HTMLElement>) => {
    for (let key in inputs) {
      validation(key, inputs[key]);
    }

    if (isValidated()) {
      api
        .login(inputs["email"], inputs["password"])
        .then((res) => {
          localStorage.setItem("token", res.data.data.token);
          navigation("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (isValidated()) {
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
      <FormInput
        placeholder="email"
        onchage={inputsChangeHandler}
        value={inputs["email"]}
        isVAlid={errors["email"] ? errors["email"].length <= 0 : true}
        name="email"
        error={errors["email"]}
      />
      <FormInput
        icon={<FontAwesomeIcon icon={faLock} />}
        placeholder="Password"
        type="password"
        onchage={inputsChangeHandler}
        value={inputs["password"]}
        isVAlid={errors["password"] ? errors["password"].length <= 0 : true}
        name="password"
        error={errors["password"]}
      />
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
