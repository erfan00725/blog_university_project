import React, { useEffect, useState } from "react";
import Input from "../../common/Input";
import ReachText from "../../common/ReachText";
import FormValidation from "../../../utilities/formValidate";
import { toast } from "react-toastify";
import Api from "../../../utilities/apis";

const INPUTSCONFIG = {
  title: "",
  description: "",
  body: "",
};

const PostForm = () => {
  const [inputs, setInputs] = useState<{ [key: string]: string }>(INPUTSCONFIG);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  // const [postImage, setPostImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState<string>();

  const validation = new FormValidation();
  const api = new Api();

  const onChageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const bodyOnChangeHandler = (value: string) => {
    setInputs((prev) => ({ ...prev, body: value }));
  };

  const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      // setPostImage(file);
    }
  };

  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    Object.keys(inputs).forEach((input) => {
      let error = validation.validation(input, inputs[input]);
      setErrors((prev) => ({ ...prev, [input]: error }));
    });

    if (validation.isValidated(errors)) {
      api.addPost();
      toast.success("validated");
    }
  };

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  return (
    <div>
      <form
        className="flex flex-col items-center mt-10 min-w-[800px]"
        action="post"
      >
        <Input
          className="w-full"
          name="title"
          title="Title"
          value={inputs["title"]}
          onChange={onChageHandler}
        />
        <Input
          title="Discreption"
          className="w-full mt-5"
          inputClassName="!h-15"
          type="textarea"
          name="description"
          value={inputs["description"]}
          onChange={onChageHandler}
        />
        <Input
          title="Post Image"
          className="w-full mt-5 border-b-0"
          inputClassName="h-auto leading-normal mt-5"
          type="file"
          accept="image/*"
          onChange={imageChangeHandler}
        />

        {imagePreview && (
          <img
            className="max-w-50 max-h-60 border border-main-color shadow-lg shadow-gray-700 mt-4"
            src={imagePreview}
            alt="Preview"
          />
        )}
        <ReachText
          title="content"
          name="body"
          value={inputs["body"]}
          onChange={bodyOnChangeHandler}
        />
        <button onClick={onSubmit} type="submit" className="btn my-16 w-64">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
