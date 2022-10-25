import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// custom styles
import "../styles/ProductDetails.css";

// import required modules
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FreeMode, Lazy, Navigation, Thumbs } from "swiper";

const PdImageSliders = ({ product }) => {
  const [galleryImages] = useState(product?.gallaryImg?.split(";"));
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full lg:w-1/2">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        lazy={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Lazy, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {galleryImages?.map((img) => (
          <SwiperSlide>
            <LazyLoadImage
              className="!h-[400px] !object-contain"
              effect="blur"
              src={img}
            />
            {/* <img className="!h-[400px] !object-contain" src={img} alt="" /> */}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        lazy={true}
        watchSlidesProgress={true}
        modules={[Lazy, FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {galleryImages?.map((img) => (
          <SwiperSlide>
            <LazyLoadImage
              className="!h-[100px] cursor-pointer !object-contain"
              effect="blur"
              src={img}
            />
            {/* <img
              className="!h-[100px] cursor-pointer !object-contain"
              src={img}
              alt=""
            /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PdImageSliders;

// <div className="mb-2">
// <Swiper
//   loop={true}
//   spaceBetween={10}
//   // navigation={true}
//   modules={[Navigation, Thumbs]}
//   grabCursor={true}
//   // thumbs={{ swiper: activeThumb }}
// >
//   {galleryImages?.map((img, i) => (
//     <SwiperSlide key={i}>
//       <div
//         className="flex h-screen w-full justify-center bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 70%, rgba(74, 74, 74, 100)), url(${img})`,
//         }}
//       >
//         <p className="ml-3 mb-3 text-xl font-bold text-white">
//           {product?.title}
//         </p>
//       </div>
//     </SwiperSlide>
//   ))}
// </Swiper>
// </div>
// <div className="mb-2">
// <Swiper
//   // onSwiper={setActiveThumb}
//   loop={true}
//   spaceBetween={10}
//   slidesPerView={4}
//   modules={[Navigation, Thumbs]}
//   grabCursor={true}
//   // controller={{ control: controlledSwiper }}
// >
//   {galleryImages?.map((img, i) => (
//     <SwiperSlide key={i}>
//       <div>
//         <img src={img} alt="thumbnail" />
//       </div>
//     </SwiperSlide>
//   ))}
// </Swiper>
// </div>
