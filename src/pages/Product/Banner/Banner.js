import React from "react";
import bannerRoundedImg from "../../../assets/Images/pexels-奥尼尔-孙-2871757.jpg";

const Banner = ({ bannerImage }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
      className="h-full min-h-[550px] bg-cover bg-center bg-no-repeat"
    >
      <img
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
        className="absolute right-0 -bottom-20 hidden rounded-full lg:-bottom-48 lg:inline-block lg:h-[27rem] lg:w-[420px]"
        src={bannerRoundedImg}
        alt="rounded"
      />
    </div>
  );
};

export default Banner;
