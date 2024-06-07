import React from "react";
import longArrow from "../../assets/images/noun-arrow-long-top-4411420.svg";
import Input from "../common/Input";
import { FooterProps } from "../../types/propsTypes";

const Footer = () => {
  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex flex-col items-center border-t border-main-color mt-8 py-20">
      <button onClick={scrollToTopHandler}>
        <img src={longArrow} alt="" className="h-28" />
      </button>
      <h3 className="header1 py-5">
        Drop Me a Line, Let Me Know What You Think
      </h3>
      <form
        className="flex flex-col items-center mt-10 min-w-[800px]"
        action="post"
        id="contactForm"
      >
        <div className="flex flex-row mb-10 w-full">
          <Input className="mr-7 flex-1 w-full" title="First Name" />
          <Input title="Last Name" className="flex-1 w-full" />
        </div>
        <Input title="Email" className="mb-10 flex-1 w-full" required />
        <Input title="Massge" className="h-20 flex-1 w-full" type="textarea" />
        <button type="submit" className="btn my-16 w-64">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Footer;
