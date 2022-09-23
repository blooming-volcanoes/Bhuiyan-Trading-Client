import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css';
import "swiper/css/autoplay";
import "swiper/css/bundle";
import dummyImage from "../../../assets/Images/pexels-gotta-be-worth-it-5209866.jpg";

import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper";

const Sliders = ({ products }) => {
  const slides = [];
  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide>
        <div
          className="flex h-72 items-end rounded-lg bg-cover bg-center bg-no-repeat lg:h-48"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 70%, rgba(74, 74, 74, 100)), 
                        url(${dummyImage})`,
          }}
        >
          <p className="ml-3 mb-3 text-xl font-bold text-white">Bata Fish</p>
        </div>
      </SwiperSlide>
    );
  }
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      id="main"
      navigation
      pagination
      spaceBetween={30}
      slidesPerView={3}
      autoplay
      breakpoints={{
        100: {
          slidesPerView: 1,
        },
        // 640: {
        //     slidesPerView: 1,
        // },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
    >
      {products.map((product) => (
        <SwiperSlide>
          <Link
            to={`/product-detail/${product?.id}`}
            className="flex h-screen w-full items-end rounded-lg bg-cover bg-center bg-no-repeat lg:h-48"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 70%, rgba(74, 74, 74, 100)), 
                            url(${product?.featureImg})`,
            }}
          >
            <p className="ml-3 mb-3 text-xl font-bold text-white">
              {product.title}
            </p>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Sliders;
