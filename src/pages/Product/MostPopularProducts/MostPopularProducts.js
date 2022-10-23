import React from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Sliders from "../Sliders/Sliders";

const MostPopularProducts = ({
  products,
  modifiedSubCategories,
  handelFilterProductBySubCategory,
}) => {
  return (
    <div className="main-container py-20">
      {/* Title */}
      <div className="pl-2 md:pl-0">
        <h1 className="text-3xl font-semibold">
          <span>Product Category</span>
          <br />
          <span className="text-2xl lg:text-6xl">
            {products[0]?.categoryName}
          </span>
        </h1>
      </div>
      <div className="w-full lg:w-4/6">
        <div className="my-4 flex items-center justify-end pr-2 md:pr-0">
          <IoIosArrowDropleftCircle className="text-xl font-bold" />
          <p className="ml-2 text-lg font-bold">All Sub Categories</p>
        </div>
        <Sliders
          products={products}
          handelFilterProductBySubCategory={handelFilterProductBySubCategory}
          modifiedSubCategories={modifiedSubCategories}
        />
      </div>
    </div>
  );
};

export default MostPopularProducts;
