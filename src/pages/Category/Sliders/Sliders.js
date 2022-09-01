import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css';
import "swiper/css/autoplay";
import "swiper/css/bundle";

import { Autoplay, Navigation, Pagination } from "swiper";

const Sliders = () => {

  const slides = [];
  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide>
        <div
          className="flex h-72 items-end bg-cover bg-center bg-no-repeat lg:h-48"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 70%, rgba(74, 74, 74, 100)), 
                        url(https://picsum.photos/id/${i + 1}/500/300`,
          }}
    const slides = [];
    for (let i = 0; i < 5; i++) {
        slides.push(
            <SwiperSlide>
                <div
                    className='bg-no-repeat bg-cover bg-center h-72 lg:h-48 flex items-end'
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 70%, rgba(74, 74, 74, 100)), 
                        url(https://picsum.photos/id/${i + 1}/500/300)`,
                    }}>
                    <p className='text-white font-bold text-xl ml-3 mb-3'>Bata Fish</p>
                </div>
            </SwiperSlide>
        )
    }
    return (

        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            id='main'
            navigation
            pagination
            spaceBetween={20}
            slidesPerView={3}
            autoplay
            breakpoints={
                {
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
                }
            }
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
      spaceBetween={20}
      slidesPerView={3}
      autoplay
      breakpoints={{
        480: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
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
      {slides}
    </Swiper>
  );
};

export default Sliders;
