import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bgTop from "../../../assets/Images/bg-top.png";
import fish1 from "../../../assets/Images/pexels-chevanon-photography-325044.jpg";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import httpCateGoryService from "../../../services/category.service";
// ..

const data = [{ name: "fish", img: fish1 }];

function OurProducts() {
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
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      data-aos-once="false"
      style={{ backgroundImage: `url('${bgTop}')` }}
      className={`w-full bg-right-top bg-no-repeat`}
    >
      <section
        className={`mx-5 max-w-full bg-right-top bg-no-repeat py-20 lg:mx-auto lg:max-w-6xl`}
      >
        {/* title */}
        <div>
          <h1 className="mx-auto w-[230px] border-b-2  border-red-400 pb-2 text-4xl font-medium lg:mx-0">
            Our Products
          </h1>
        </div>

        {/* categories */}

        <div className="my-20 grid grid-cols-2 gap-y-20  md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {loader ? (
            <div className="flex h-full justify-center space-y-4">
              <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
            </div>
          ) : (
            cateGories.map((category, i) => (
              <Link
                to={`/product/${category.id}?page=1`}
                className="flex flex-col items-center justify-center space-x-0 space-y-3 text-lg font-semibold capitalize text-gray-600 md:flex-row md:justify-start md:space-x-6 lg:flex-row lg:justify-start lg:space-y-0 lg:space-x-6"
                key={i}
              >
                <img
                  className="h-20 w-20 rounded-full  object-cover  md:h-10 md:w-10 lg:h-[60px] lg:w-[60px]"
                  src={category?.featureImg}
                  alt=""
                />
                <p>{category?.categoryName}</p>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default OurProducts;
