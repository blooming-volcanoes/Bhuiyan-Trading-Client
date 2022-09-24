import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/Product.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const Sliders = ({
  modifiedSubCategories,
  handelFilterProductBySubCategory,
}) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={3}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {modifiedSubCategories.length > 0 ? (
          modifiedSubCategories?.map((sub, i) => (
            <SwiperSlide key={i}>
              <div
                onClick={() => handelFilterProductBySubCategory(sub?.title)}
                className="relative cursor-pointer"
              >
                <img className="rounded" src={sub?.featureImg} alt="" />
                <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full rounded "></div>
                <p className="absolute bottom-0 z-10 ml-3 mb-3 text-xl font-bold text-white">
                  {sub?.title}
                </p>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <h1>No Product is Available</h1>
        )}
      </Swiper>
    </>
  );
};

export default Sliders;
