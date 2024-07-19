import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Input from "../common/Input";
import FormValidation from "../../utilities/formValidate";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Api from "../../utilities/apis";
import { CommentsInputType } from "../../types/propsTypes";

const CommentsInput = ({ setComments }: CommentsInputType) => {
  const [isExtended, setIsExtended] = useState(false);
  const [inputsValue, setInputsValue] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const textArea = useRef(null);
  const param = useParams();
  const api = new Api();

  const formValidation = new FormValidation();

  useEffect(() => {}, []);

  const validate = (key: string, value: string) => {
    let validated = formValidation.validation(key, value);

    if (validated != "") {
      setErrors((prev) => ({
        ...prev,
        [key]: validated,
      }));
    } else {
      let newErr = errors;
      delete newErr[key];
      setErrors(newErr);
    }
  };

  const onChageHandler = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputsValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    validate(e.target.name, e.target.value);
  };

  const onSubmitHandler = () => {
    for (let key in inputsValue) {
      validate(key, inputsValue[key]);
    }

    if (!Object.values(errors)[0]) {
      console.log(param);
      api
        .addComment(
          {
            user_name: inputsValue.name,
            content: inputsValue.content,
            email: inputsValue.email,
          },
          Number(param.post)
        )
        .then((res) => {
          toast.success("Comment posted successfully!");
          setComments((prev) => {
            return [...prev, res.data.data];
          });
          console.log([res.data.data]);
        })
        .catch((err) => {
          toast.error("Somthing went wrong: ", err);
          console.log(err);
        });
    } else {
      toast.error(Object.values(errors)[0]);
    }
  };

  const onFocusHandler = () => {
    setIsExtended(true);
  };

  const onCancelHandler = () => {
    setInputsValue({});
    setIsExtended(false);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col main-border px-5 py-3 ">
        <TextareaAutosize
          ref={textArea}
          minRows={isExtended ? 2 : 1}
          className="font-light text-wrap resize-none"
          placeholder="Write a commnet..."
          onFocus={onFocusHandler}
          onChange={onChageHandler}
          value={inputsValue["content"]}
          aria-disabled
          name="content"
        />
        {isExtended && (
          <div className="flex flex-col pt-2 mt-3 border-t border-main-color">
            <Input
              title="name"
              required
              name="name"
              value={inputsValue["name"]}
              onChange={onChageHandler}
            />
            <Input
              title="email"
              required
              name="email"
              value={inputsValue["email"]}
              onChange={onChageHandler}
            />
            <div className="flex flex-row mt-3">
              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                className="hidden"
              />
              <label htmlFor="img">
                <FontAwesomeIcon
                  icon={faCamera}
                  className="text-hover hover:text-gray-500 cursor-pointer"
                />
              </label>
            </div>
          </div>
        )}
      </div>
      <div className="w-full flex flex-row justify-end my-4">
        <button
          onClick={onCancelHandler}
          className="text-secondery-color transition-colors duration-100 hover:text-[#ac6bff] py-2 px-5 mr-2"
        >
          cancel
        </button>
        <button
          className="text-alt-color bg-secondery-color transition-colors duration-100 hover:bg-[#ac6bff] py-2 px-5 disabled:bg-gray-400"
          disabled={!isExtended}
          onClick={onSubmitHandler}
        >
          publish
        </button>
      </div>
    </div>
  );
};

export default CommentsInput;
