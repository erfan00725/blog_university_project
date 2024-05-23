import React from "react";
import FeaturedPost from "./FeaturedPost";
import Input from "./Input";
import Reminder from "./Reminder";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

const Body = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <FeaturedPost />
      <Reminder />
      <div>
        <MainLeft />
        <MainRight />
      </div>
    </div>
  );
};

export default Body;
