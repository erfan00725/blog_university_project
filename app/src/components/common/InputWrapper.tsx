import { InputWrapperType } from "../../types/propsTypes";
import classNames from "classnames";

const InputWrapper = ({
  children,
  title,
  required,
  className,
  isVAlid = true,
  error,
}: InputWrapperType) => {
  return (
    <div
      className={classNames(
        "relative border-b mt-5 border-main-color hover:border-secondery-color",
        className,
        { "!border-red-600": !isVAlid }
      )}
    >
      {title && (
        <span className=" text-input-label cursor-default ">
          {title}
          {required && " *"}
        </span>
      )}
      {children}
      {error ? (
        <span className="absolute left-full ml-2 cursor-default text-red-700 w-max">
          {error}
        </span>
      ) : null}
    </div>
  );
};

export default InputWrapper;
