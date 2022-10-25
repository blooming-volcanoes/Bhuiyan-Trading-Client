/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";

function PopularProducts({ cateGories, loader }) {
  return (
    <section className="py-16" data-aos="fade-up">
      <div className="main-container">
        {/* title */}
        <h1 className="mx-auto mb-10 w-[260px] border-b-2  border-red-400 pb-2 text-3xl font-medium lg:mx-0">
          Popular Products
        </h1>

        {/* All products */}
        {loader ? (
          <div className="flex h-full justify-center space-y-4">
            <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cateGories.map((category) => (
              <Link
                to={`/product/${category.id}?page=1`}
                className="relative block"
                key={category.id}
              >
                <LazyLoadImage
                  height="100%"
                  width="100%"
                  className="h-[100px] w-full overflow-hidden rounded-lg object-cover lg:w-[400px]"
                  effect="blur"
                  src={category?.featureImg}
                />
                {/* <img
                  className="h-[100px] w-full overflow-hidden rounded-lg object-cover lg:w-[400px]"
                  src={category?.featureImg}
                  alt=""
                /> */}
                <div className="absolute bottom-0 top-0 left-0 right-0 z-[10] w-full rounded-lg bg-black bg-opacity-50"></div>
                <p className="center absolute bottom-0 z-[12] w-full p-2 text-center  text-2xl font-medium text-white">
                  {category.categoryName}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default PopularProducts;
