import { useState } from "react";
import { ReachTextType } from "../../types/propsTypes";
import ReactQuill from "react-quill";
import InputWrapper from "./InputWrapper";

// const Block = Quill.import("blots/block") as any;

// class BlockquoteBlot extends Block {
//   static blotName = "blockquote";
//   static tagName = "blockquote";
// }

// Quill.register(BlockquoteBlot, true);

const ReachText = ({ onChange, placeHolder, title }: ReachTextType) => {
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "formula"],

    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
    console.log(content);
    onChange?.(content);
  };

  return (
    <InputWrapper title={title}>
      <ReactQuill
        value={editorContent}
        onChange={handleEditorChange}
        modules={modules}
        placeholder={placeHolder}
        formats={[
          "header",
          "font",
          "list",
          "bullet",
          "blockquote",
          "code-block",
          "bold",
          "italic",
          "underline",
          "strike",
          "script",
          "color",
          "background",
          "align",
          "link",
        ]}
      />
    </InputWrapper>
  );
};

export default ReachText;
