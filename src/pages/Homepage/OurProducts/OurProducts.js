import React from "react";
import bgTop from "../../../assets/Images/bg-top.png";
import fish1 from "../../../assets/Images/pexels-chevanon-photography-325044.jpg";
import fashion from "../../../assets/Images/pexels-juan-mendez-1536619.jpg";
import plastic from "../../../assets/Images/pexels-pixabay-65612.jpg";
// ..

const data = [
  { name: "fish", img: fish1 },
  { name: "Fashion", img: fashion },
  { name: "Plastic", img: plastic },
];

function OurProducts() {
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
          <h1 className="mx-auto w-[219px] border-b-2  border-red-400 pb-2 text-4xl font-medium lg:mx-0">
            Our Products
          </h1>
        </div>

        {/* categories */}

        <div className="my-20 grid grid-cols-2 gap-y-20  md:grid-cols-2 lg:grid-cols-4 lg:gap-3">
          {Array(4)
            .fill("")
            .map((_, i) => (
              <ul key={i} className="mx-auto space-y-10 lg:mx-0">
                {data.map((categories, i) => (
                  <li
                    className="flex flex-col items-center justify-center space-x-0 space-y-3 text-lg font-semibold capitalize text-gray-600 md:flex-row md:justify-start md:space-x-6 lg:flex-row lg:justify-start lg:space-y-0 lg:space-x-6"
                    key={i}
                  >
                    <img
                      className="h-20 w-20 rounded-full md:h-10 md:w-10 lg:h-10 lg:w-10"
                      src={categories.img}
                      alt=""
                    />
                    <p>{categories.name}</p>
                  </li>
                ))}
              </ul>
            ))}
        </div>
      </section>
    </div>
  );
}

export default OurProducts;
