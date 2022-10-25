import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import adidas from "../../../assets/Images/adidas.png";
import nike from "../../../assets/Images/nike.png";
import twitter from "../../../assets/Images/twitter.png";
import uber from "../../../assets/Images/uber.png";
import youtube from "../../../assets/Images/youtube.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "./OurBrands.css";

const brands = [
  {
    name: "uber",
    logo: uber,
  },
  {
    name: "twitter",
    logo: twitter,
  },
  {
    name: "youtube",
    logo: youtube,
  },
  {
    name: "adidas",
    logo: adidas,
  },
  {
    name: "nike",
    logo: nike,
  },
];

function OurBrands() {
  return (
    <section className="bg-gray-100 py-20">
      <div
        style={{ boxShadow: "0 0 60px 0 rgb(0 0 0 / 10%)" }}
        className="main-container rounded-lg bg-white py-20 shadow-lg"
      >
        {/* Brands head */}
        <div className="text-center text-3xl">
          <h1 className="font-semibold text-gray-800">With Great Outcomes.</h1>
        </div>

        {/* Brand names */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2000,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {brands.map((brand, i) => (
            <SwiperSlide key={i}>
              <div className="mx-auto w-[200px] ">
                <LazyLoadImage
                  effect="blur"
                  className="grayscale"
                  src={brand.logo}
                />
              </div>
              {/* <img
                className="mx-auto w-[200px] grayscale"
                src={brand.logo}
                alt=""
              /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default OurBrands;
