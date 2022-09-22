import React, { useState } from "react";
import "swiper/css/autoplay";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Thumbs } from "swiper";

const PdImageSliders = ({ bgImages, product }) => {
  const [galleryImages] = useState(product?.gallaryImg?.split(";"));

  console.log(galleryImages);

  return (
    <div className="w-full lg:w-1/2">
      <div className="mb-2">
        <Swiper
          loop={true}
          spaceBetween={10}
          // navigation={true}
          modules={[Navigation, Thumbs]}
          grabCursor={true}
          // thumbs={{ swiper: activeThumb }}
        >
          {galleryImages?.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="flex h-[300px] items-end bg-cover bg-center bg-no-repeat lg:h-[500px]"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 70%, rgba(74, 74, 74, 100)), url(${product?.featureImg})`,
                }}
              >
                <p className="ml-3 mb-3 text-xl font-bold text-white">
                  {product?.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mb-2">
        <Swiper
          // onSwiper={setActiveThumb}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          modules={[Navigation, Thumbs]}
          grabCursor={true}
          // controller={{ control: controlledSwiper }}
        >
          {galleryImages?.map((img, i) => (
            <SwiperSlide key={i}>
              <div>
                <img src={img} alt="thumbnail" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PdImageSliders;

// breakpoints={
//     {
//         100: {
//             slidesPerView: 1,
//         },
//         // 640: {
//         //     slidesPerView: 1,
//         // },
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 15,
//         },
//         1024: {
//             slidesPerView: 3,
//             spaceBetween: 15,
//         },
//     }
// }
