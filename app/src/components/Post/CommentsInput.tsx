import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const CommentsInput = () => {
  const [isExtended, setIsExtended] = useState(false);
  const [value, setValue] = useState("");
  const textArea = useRef(null);

  useEffect(() => {}, []);

  const onChageHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const onFocusHandler = () => {
    setIsExtended(true);
  };

  const onCancelHandler = () => {
    setValue("");
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
          value={value}
        />
        {isExtended && (
          <div className="flex flex-row mt-3">
            <FontAwesomeIcon
              icon={faCamera}
              className="text-hover hover:text-gray-500 cursor-pointer"
            />
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
        >
          publish
        </button>
      </div>
    </div>
  );
};

export default CommentsInput;
