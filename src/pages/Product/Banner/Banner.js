import React from "react";
import bannerRoundedImg from "../../../assets/Images/pexels-奥尼尔-孙-2871757.jpg";

const Banner = ({ bannerImage }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
      className="h-screen w-full bg-cover bg-no-repeat"
    >
      <img
        className="absolute right-0 -bottom-20 h-40 w-40 rounded-full md:-bottom-28 md:h-60 md:w-60 lg:-bottom-48 lg:h-96 lg:w-96  "
        src={bannerRoundedImg}
        alt="rounded"
      />
    </div>
  );
};

export default Banner;
