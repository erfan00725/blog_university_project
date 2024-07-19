import { CommentsType, PostType } from "./fetchResponseTypes";

export type InputWrapperType = {
  children?: React.ReactNode;
  title?: string;
  required?: boolean;
  error?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  name?: string;
  type?: string;
  className?: string;
  inputClassName?: string;
  isVAlid?: boolean;
};

export interface InputProps extends InputWrapperType {
  accept?: string;
}

export interface ReachTextType extends Omit<InputWrapperType, "onChange"> {
  onChange?: (value: string) => void;
  placeHolder?: string;
}
export type PostPrevProps = {
  isBig?: boolean;
  page?: number;
  perPage?: number;
};

export interface LoginInputProps extends InputWrapperType {
  icon?: JSX.Element;
}

export type FooterProps = {
  contactForm: React.RefObject<HTMLFormElement>;
};

export type HeaderProps = {
  contactForm: React.RefObject<HTMLFormElement>;
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
