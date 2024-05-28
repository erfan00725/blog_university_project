export type InputProps = {
  className?: string;
  inputClassName?: string;
  placeholder?: string;
  title?: string;
  type?: string;
  required?: boolean;
  accept?: string;
};

export type PostPrevProps = {
  isBig?: boolean;
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
};
