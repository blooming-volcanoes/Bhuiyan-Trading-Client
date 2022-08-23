import React from "react";
import boatPng from "../../../assets/Images/boat.jpg";
const data = [
  {
    type: "Fish",
    img: boatPng,
  },
];

function PopularProducts() {
  return (
    <div className="mx-5 max-w-full py-20 lg:mx-auto lg:max-w-6xl">
      {/* title */}
      <h1 className="mx-auto mb-10 w-[290px] border-b-2  border-red-400 pb-2 text-4xl font-medium lg:mx-0">
        Popular Products
      </h1>

      {/* All products */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array(6)
          .fill("")
          .map((_, i) => (
            <div className="relative " key={i}>
              <img
                className="h-[100px] w-full overflow-hidden rounded object-cover lg:w-[400px]"
                src={data[0].img}
                alt=""
              />
              <h1 className="center absolute bottom-0 left-0 right-0 w-full bg-black bg-opacity-30 p-2 text-2xl font-medium text-white">
                {data[0].type}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PopularProducts;
