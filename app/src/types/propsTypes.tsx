import { CommentsType, PostType } from "./fetchResponseTypes";

export type InputProps = {
  className?: string;
  inputClassName?: string;
  placeholder?: string;
  title?: string;
  type?: "text" | "textarea";
  required?: boolean;
  accept?: string;
  name?: string;
  value?: string;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

export type PostPrevProps = {
  isBig?: boolean;
  page?: number;
  perPage?: number;
};

export type FooterProps = {
  contactForm: React.RefObject<HTMLFormElement>;
};

export type HeaderProps = {
  contactForm: React.RefObject<HTMLFormElement>;
};

export type LoginInputProps = {
  className?: string;
  inputClassName?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  icon?: JSX.Element;
  onchage?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  isVAlid?: boolean;
  name?: string;
  error?: string;
};

export type PostReadInfoProps = {
  created_at?: string;
};

export type LoadingProps = {
  isLoading?: boolean;
};

export type CommentsProps = {
  comments: CommentsType[];
};

export type CommentProps = {
  comment: CommentsType;
};

export type CommentsInputType = {
  setComments: React.Dispatch<React.SetStateAction<CommentsType[]>>;
};

export type PostPrevSmallType = {
  post: PostType;
};
