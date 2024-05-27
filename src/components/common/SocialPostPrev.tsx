import React from "react";
import img from "../../assets/images/01.jpg";

const SocialPostPrev = () => {
  return (
    <div className="w-[139px] h-[139px] even:mr-2 mb-2 relative">
      <a href="">
        <img src={img} alt="" />
        <div className="w-full h-full flex justify-center items-center transition-all duration-200 absolute top-0 bottom-0 bg-slate-950 opacity-0 hover:opacity-50">
          <p className="z-10 text-alt-color w-full text-center">
            @wix: #wix, #website, #freewebsite,...
          </p>
        </div>
      </a>
    </div>
  );
};

export default SocialPostPrev;
