/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import boatPng from "../../../assets/Images/boat.jpg";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import httpCateGoryService from "../../../services/category.service";
const data = [
  {
    type: "Fish",
    img: boatPng,
  },
];

function PopularProducts() {
  const [cateGories, setCateGories] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    async function getProducts() {
      try {
        const data = await httpCateGoryService.getAllCategory();
        setCateGories(data);
      } catch (error) {
        setLoader(false);
        console.log(error);
      }
    }
    getProducts();
    setLoader(false);
  }, [cateGories.length]);

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
                className="relative"
                key={category.id}
              >
                <img
                  className="h-[100px] w-full overflow-hidden rounded-lg object-cover lg:w-[400px]"
                  src={category?.featureImg}
                  alt=""
                />
                <p className="center absolute bottom-0 left-0 right-0 w-full bg-black bg-opacity-10 p-2 text-2xl font-medium text-white">
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
