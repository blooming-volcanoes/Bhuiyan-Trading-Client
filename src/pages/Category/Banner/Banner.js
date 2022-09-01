import React from "react";
import bannerRoundedImg from "../../../assets/Images/pexels-奥尼尔-孙-2871757.jpg";

const Banner = ({ bannerImage }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
      className="relative mb-14 h-56 w-full bg-cover bg-center bg-no-repeat md:h-96 lg:h-screen"
    >
      <img
        className="absolute right-0 bottom-[-20%] h-20 w-20 rounded-full md:h-60 md:w-60 lg:h-96 lg:w-96  "
        src={bannerRoundedImg}
        alt="rounded"
      />
    </div>
  );
};

export default Banner;
