import { LoginInputProps } from "../types/propsTypes";

const emailValidation = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const passValidation = (pass: string): boolean => {
  return pass.length < 6;
};

export const formVAlidation = (
  rules: string[],
  setMassages: React.Dispatch<
    React.SetStateAction<
      { [key: string]: { [key: string]: string } } | undefined
    >
  >,
  inputName: string,
  value: string
): boolean => {
  let hasError: boolean = false;

  rules.forEach((rule) => {
    switch (rule) {
      case "required":
        if (value.length <= 0) {
          setMassages((prev) => {
            return { ...prev, [inputName]: { [rule]: "fiels is required" } };
          });
          hasError = true;
        }
        break;

      case "email":
        if (!emailValidation(value)) {
          setMassages((prev) => {
            return { ...prev, [inputName]: { [rule]: "email is not valid" } };
          });
          hasError = true;
        }
        break;

      case "password":
        if (passValidation(value)) {
          setMassages((prev) => {
            return { ...prev, [inputName]: { [rule]: "password is to short" } };
          });
          hasError = true;
        }
        break;

      default:
    }
  });

  if (!hasError) {
    setMassages((prev) => {
      return { ...prev, [inputName]: {} };
    });
  }

  return hasError;
};
