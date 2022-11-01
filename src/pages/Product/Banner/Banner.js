import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Banner = ({ products, bannerImage }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(Math.floor(Math.random() * products.length));
  }, [products.length]);
  return (
    <div
      style={{
        backgroundImage: `url(${products[index]?.featureImg || ""})`,
      }}
      className="h-full min-h-[300px] border  bg-center bg-no-repeat"
    >
      <LazyLoadImage
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
        className="absolute right-0 -bottom-20 hidden  rounded-full object-contain lg:-bottom-48 lg:inline-block lg:h-[27rem] lg:w-[420px]"
        src={products[index]?.featureImg || ""}
      />
      {/* <img
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
        className="absolute right-0 -bottom-20 hidden  rounded-full object-cover lg:-bottom-48 lg:inline-block lg:h-[27rem] lg:w-[420px]"
        src={products[index]?.featureImg || bannerRoundedImg}
        alt="rounded"
      /> */}
    </div>
  );
};

export default Banner;
