import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/Product.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const Sliders = ({ products }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide>
            <div className="relative">
              <img className="rounded" src={product?.featureImg} alt="" />
              <div
                style={{
                  background:
                    "linear-gradient(rgba(255, 255, 255, 0.01) 70%, rgb(74, 74, 74))",
                }}
                className="absolute top-0 bottom-0 left-0 right-0 h-full w-full "
              ></div>
              <p className="absolute bottom-0 z-10 ml-3 mb-3 text-xl font-bold text-white">
                {product.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

/*
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
 */

export default Sliders;
