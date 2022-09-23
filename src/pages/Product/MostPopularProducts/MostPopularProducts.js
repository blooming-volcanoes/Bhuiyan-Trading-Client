import React from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Sliders from "../Sliders/Sliders";

const MostPopularProducts = ({ products }) => {
  return (
    <div className="main-container py-20">
      {/* Title */}
      <div className="pl-2 md:pl-0">
        <h1 className="text-3xl font-semibold">
          <span>We are</span>
          <br />
          <span className="text-6xl">
            {/* {products[Math.floor(Math.random() * products.length)]?.title ||
              "Here"} */}
            Red Fish
          </span>
        </h1>
      </div>
      <div className="w-full lg:w-4/6">
        <div className="mb-4 flex items-center justify-end pr-2 md:pr-0">
          <IoIosArrowDropleftCircle className="text-xl font-bold" />
          <p className="ml-2 text-lg font-bold">Most Popular</p>
        </div>
        <Sliders products={products} />
      </div>
    </div>
  );
};

export default MostPopularProducts;
