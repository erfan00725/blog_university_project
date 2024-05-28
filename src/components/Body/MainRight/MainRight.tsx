import React from "react";
import userIMG from "../../../assets/images/User.webp";
import SocialPostPrev from "./SocialPostPrev";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Input from "../../common/Input";
import img from "../../../assets/images/books new smaller.webp";

const MainRight = () => {
  return (
    <div className="flex-1 flex flex-col justify-start items-center">
      <div className="main-right-sections flex-col  pb-16">
        <h3 className="section-title">ABOUT ME</h3>
        <img className="main-border w-72 h-52" src={userIMG} alt="" />
        <div className="px-2">
          <p className="main-right-post-description">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <a href="" className="post-prev-text font-normal block text-start">
            Read More &gt;
          </a>
        </div>
      </div>
      <div className="main-right-sections flex-row flex-wrap pb-10">
        <h3 className="section-title">FOLLOW ME</h3>
        <SocialPostPrev />
        <SocialPostPrev />
        <SocialPostPrev />
        <SocialPostPrev />
        <SocialPostPrev />
        <SocialPostPrev />
        <SocialPostPrev />
        <SocialPostPrev />
      </div>
      <div className="main-right-sections flex-row justify-center items-center p-5">
        <a className="social_icons" href="">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a className="social_icons" href="">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a className="social_icons" href="">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className="social_icons" href="">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className="main-right-sections flex-col pb-12">
        <h3 className="section-title">SUBSCRIBE</h3>
        <Input
          className="w-full"
          title="Enter your email"
          placeholder="test@gmail.com"
          required
        />
        <button className="btn w-full my-5 ">Subscribe</button>
      </div>
      <div className="main-right-sections flex-col !border-0">
        <h3 className="section-title text-start whitespace-pre">
          {"MY PICK\nOF THE MONTH"}
        </h3>
        <img src={img} alt="" className="w-full h-auto main-border" />
        <p className="main-right-post-description">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </p>
      </div>
    </div>
  );
};

export default MainRight;
