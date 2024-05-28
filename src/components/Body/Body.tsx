import React from "react";
import FeaturedPost from "./FeaturedPost";
import Reminder from "./Reminder";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight/MainRight";

const Body = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <FeaturedPost />
      <Reminder />
      <div className="flex flex-row w-full">
        <MainLeft />
        <MainRight />
      </div>
    </div>
  );
};

export default Body;
