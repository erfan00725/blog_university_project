import {
  faFacebook,
  faInstagram,
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full text-main-color">
      <div className="flex flex-col justify-center items-center mt-12 mb-12 pl-5 pr-5">
        <span className="text-2xl mb-3 text-center w-full tracking-[0.2em] font-extralight">
          EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.
        </span>
        <h1 className="font-bold text-8xl w-full">Train of Thought</h1>
      </div>

      <ul className="flex flex-row justify-center items-center border-t border-b border-main-color w-full h-[50px]">
        <li className="menu_items">
          <a href="">Home</a>
        </li>
        <li className="menu_items">
          <a href="">Home</a>
        </li>
        <li className="menu_items">
          <a href="">Home</a>
        </li>
        <li className="menu_items">
          <a href="">Home</a>
        </li>
        <li className="menu_items pl-2 pr-2 relative">
          <input
            type="search"
            placeholder="Search..."
            className="w-full h-8 border-b focus-visible:border-main-color hover:border-main-color px-1"
          />
          <FontAwesomeIcon
            className="absolute right-4"
            icon={faMagnifyingGlass}
          />
        </li>
        <li className="menu_items">
          <a className="menu_items_icons" href="">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a className="menu_items_icons" href="">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a className="menu_items_icons" href="">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a className="menu_items_icons" href="">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
