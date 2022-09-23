import React from "react";
import { IoIosArrowDroprightCircle, IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const AllProducts = ({ products }) => {
  return (
    <div className="main-container py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        {/* title and serch box */}
        <div className="mb-4 flex items-center justify-end pl-2 md:pl-0">
          <IoIosArrowDroprightCircle className="text-xl font-bold" />
          <p className="ml-2 text-lg font-bold">All Products</p>
        </div>
        {/* search box */}
        <div className="relative mb-10 flex pr-2 md:pr-0">
          <input
            className="w-full rounded-xl border-slate-300 sm:w-80 md:w-80 lg:w-80"
            type="text"
            name="searchproduct"
            id=""
            placeholder="Search products"
          />
          <IoIosSearch className="absolute right-4 top-3 text-xl font-bold lg:right-2" />
        </div>
      </div>
      {/* products */}
      <div className="mb-10 grid grid-cols-1 gap-y-3 gap-x-10 md:grid-cols-2 md:gap-y-4 md:gap-x-5 lg:grid-cols-4 lg:gap-y-9 lg:gap-x-9">
        {products.length > 0 ? (
          products.map((product) => (
            <Link
              to={`/product-detail/${product?.id}`}
              key={product.id}
              className="flex h-56 items-end rounded-lg bg-cover bg-center bg-no-repeat lg:h-52"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 70%, rgba(74, 74, 74, 100)),
                          url(${product.featureImg})`,
              }}
            >
              <p
                to={`/product-detail/${product?.id}`}
                className="ml-3 mb-3 text-xl font-bold text-white"
              >
                {product.title}
              </p>
            </Link>
          ))
        ) : (
          <h1 className="col-span-full w-full text-center text-2xl font-semibold text-gray-400">
            No Product is available Right now
          </h1>
        )}
      </div>

      {/* load more button */}
      <div className="mb-10 flex items-center justify-center">
        <button className="rounded-xl bg-red-800 px-4 py-2 text-lg font-bold text-white">
          Load More
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
