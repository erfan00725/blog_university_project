import { LoginInputProps } from "../../types/propsTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import InputWrapper from "./InputWrapper";

const FormInput = ({
  placeholder,
  required = true,
  type,
  icon,
  onChange,
  value,
  isVAlid,
  name,
  error,
}: LoginInputProps) => {
  return (
    <InputWrapper
      isVAlid={isVAlid}
      className="w-60 h-12 mb-5 px-4 border border-secondery-color flex flex-row items-center rounded-xl relative text-indigo-400"
      error={error}
      required={required}
    >
      {icon || <FontAwesomeIcon icon={faUser} />}
      <input
        type={type || "text"}
        className="w-full ml-3 bg-transparent"
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
        name={name}
      />
    </InputWrapper>
  );
};

export default FormInput;
