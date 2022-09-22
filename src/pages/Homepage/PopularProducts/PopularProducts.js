import React, { useEffect, useState } from "react";
import boatPng from "../../../assets/Images/boat.jpg";
import httpCateGoryService from "../../../services/category.service";
const data = [
  {
    type: "Fish",
    img: boatPng,
  },
];

function PopularProducts() {
  const [cateGories, setCateGories] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await httpCateGoryService.getAllCategory();
        setCateGories(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

  console.log(cateGories);

  return (
    <section className="py-16" data-aos="fade-up">
      <div className="main-container">
        {/* title */}
        <h1 className="mx-auto mb-10 w-[260px] border-b-2  border-red-400 pb-2 text-3xl font-medium lg:mx-0">
          Popular Products
        </h1>

        {/* All products */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cateGories.map((category) => (
            <div className="relative" key={category.id}>
              <img
                className="h-[100px] w-full overflow-hidden rounded-lg object-cover lg:w-[400px]"
                src={data[0].img}
                alt=""
              />
              <h1 className="center absolute bottom-0 left-0 right-0 w-full bg-black bg-opacity-30 p-2 text-2xl font-medium text-white">
                {category.categoryName}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularProducts;
