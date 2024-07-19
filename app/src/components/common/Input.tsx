import { InputProps } from "../../types/propsTypes";
import InputWrapper from "./InputWrapper";

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
    <InputWrapper title={title} required={required} className={className}>
      <input
        className={"input " + inputClassName}
        placeholder={placeholder}
        type={type ?? "text"}
        accept={accept}
        value={value}
        onChange={onChange}
        name={name}
      />
    </InputWrapper>
  );
};

export default Input;
