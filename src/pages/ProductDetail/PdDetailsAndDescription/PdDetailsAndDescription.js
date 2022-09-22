import React from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";
import PdDescriptionAccordion from "../PdDescriptionAccordion/PdDescriptionAccordion";

const PdDetailsAndDescription = ({ bgImage, product }) => {
  console.log(bgImage);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(230, 230, 230, 0.8) 70%, rgba(230, 230, 230, 0.8)), 
                url(${product?.featureImg})`,
      }}
      className="w-full bg-cover bg-center bg-no-repeat pt-5 pl-5 pr-5 lg:w-1/2"
    >
      <h1 className="mb-2 text-5xl font-bold">{product?.title}</h1>
      <h3 className="mb-5 text-xl font-bold">
        {product.title?.toLowerCase().includes("fish") ? "Fish" : ""}
      </h3>
      <p className="mb-3 font-bold">
        Price: ${" "}
        <span className="text-3xl font-bold text-red-600">
          {product?.price}
        </span>
        /unit
      </p>
      <p className="mb-10 text-2xl">{product?.productDesc}</p>
      <PdDescriptionAccordion />

      <div className="flex items-center justify-center">
        <button className="mb-5 rounded-lg bg-red-900 px-3 py-2 text-lg font-bold text-white">
          Contact us to purchase
        </button>
      </div>

      <div className="flex w-full gap-1">
        <button className="flex h-20 w-1/2 items-center justify-center border-slate-500 bg-gray-100 hover:bg-gray-200">
          <IoIosArrowDropleftCircle className="text-2xl lg:text-3xl" />
          <span className="ml-1 text-lg  lg:text-2xl">Category Page</span>
        </button>
        <Link
          to="/"
          className="flex h-20 w-1/2 items-center justify-center border-slate-500 bg-gray-100 hover:bg-gray-200"
        >
          <span className="mr-1 text-lg lg:text-2xl">Home Page</span>
          <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" />
        </Link>
      </div>
    </div>
  );
};

export default PdDetailsAndDescription;
