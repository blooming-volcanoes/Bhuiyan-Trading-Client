import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import lottie from "../../../assets/Images/lottie-product.svg";

const Banner = ({ products, bannerImage }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(Math.floor(Math.random() * products.length));
  }, [products.length]);
  return (
    <div
      style={{
        backgroundImage: `url(https://i.ibb.co/qk6LRfc/12628435-5026563.jpg)`,
      }}
      className="h-full min-h-[300px] border  bg-cover bg-no-repeat"
    >
      <LazyLoadImage
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
        className="absolute right-0 -bottom-20 hidden  rounded-full object-contain lg:-bottom-48 lg:inline-block lg:h-[27rem] lg:w-[420px]"
        src="https://i.ibb.co/vsSPDjM/22484-bakery-shop-store-building.gif"
      />
    </div>
  );
};

export default Banner;
