import React from "react";
import { IoIosArrowDroprightCircle, IoIosSearch } from "react-icons/io";
import { Link, useSearchParams } from "react-router-dom";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const AllProducts = ({
  products,
  filteredProductsBySubCate,
  handelProductBySearch,
  isDataLimitDone,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
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
            onChange={(e) => handelProductBySearch(e.target.value)}
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
          filteredProductsBySubCate ? (
            filteredProductsBySubCate.map((product) => (
              <Link to={`/product-detail/${product?.id}`} key={product.id}>
                <div className="relative flex h-[200px] items-end justify-center rounded-lg bg-cover bg-center">
                  <div>
                    <img
                      className="h-[200px] w-full object-cover"
                      src={product.featureImg}
                      alt=""
                    />
                    <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full rounded bg-black bg-opacity-20 "></div>
                    <p
                      to={`/product-detail/${product?.id}`}
                      className="absolute bottom-0 z-20 ml-3 mb-3 text-xl font-bold text-white"
                    >
                      {product.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            products.map((product) => (
              <Link to={`/product-detail/${product?.id}`} key={product.id}>
                <div className="relative flex h-[200px] items-end justify-center rounded-lg bg-cover bg-center">
                  <div>
                    <img
                      className="h-[200px] w-full object-cover"
                      src={product.featureImg}
                      alt=""
                    />
                    <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full rounded bg-black bg-opacity-20 "></div>
                    <p
                      to={`/product-detail/${product?.id}`}
                      className="absolute bottom-0 z-20 ml-3 mb-3 text-xl font-bold text-white"
                    >
                      {product.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          )
        ) : (
          <h1 className="col-span-full w-full text-center text-2xl font-semibold text-gray-400">
            No Product is available Right now
          </h1>
        )}
      </div>

      {/* load more button */}
      <div className="mb-10 flex items-center justify-center">
        {isDataLimitDone ? (
          <button
            onClick={() => {
              setSearchParams({
                page: searchParams.get("page")
                  ? +searchParams.get("page") - 1
                  : 1,
              });
            }}
            className="flex items-center rounded border-2 border-red-800 bg-red-800 px-6 py-3 text-lg font-semibold text-white transition-all hover:scale-110 hover:border-red-800 hover:bg-transparent hover:text-red-800"
          >
            <span className="mr-2 text-2xl">
              <BsArrowLeft />
            </span>
            Back
          </button>
        ) : (
          <div className="flex space-x-4">
            <button
              onClick={() => {
                setSearchParams({
                  page: searchParams.get("page")
                    ? +searchParams.get("page") - 1
                    : 1,
                });
              }}
              className="flex items-center rounded border-2 border-red-800 bg-red-800 px-6 py-3 text-lg font-semibold text-white transition-all hover:scale-110 hover:border-red-800 hover:bg-transparent hover:text-red-800"
            >
              <span className="mr-2 text-2xl">
                <BsArrowLeft />
              </span>
              Back
            </button>
            <button
              onClick={() => {
                setSearchParams({
                  page: searchParams.get("page")
                    ? +searchParams.get("page") + 1
                    : 1,
                });
              }}
              className="flex items-center  rounded border-2 border-red-800 bg-red-800 px-6 py-3 text-lg font-semibold text-white transition-all hover:scale-110 hover:border-red-800 hover:bg-transparent hover:text-red-800"
            >
              Load More
              <span className="ml-2 text-2xl">
                <BsArrowRight />
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
