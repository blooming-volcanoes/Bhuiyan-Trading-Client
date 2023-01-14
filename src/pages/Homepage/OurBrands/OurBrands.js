import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";

import { LazyLoadImage } from "react-lazy-load-image-component";
import LoadingButton from "../../../Components/custom/Buttons/LoadingButton";
import httpBrandService from "./../../../services/brand.service";
import "./OurBrands.css";

function OurBrands() {
  const [isBrandLoading, setIsBrandLoading] = useState(false);
  const [allBrands, setAllBrands] = useState([]);

  //   get All Brand
  useEffect(() => {
    async function getAlLBrands() {
      setIsBrandLoading(true);
      try {
        const data = await httpBrandService.getAllBrands();
        setAllBrands(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsBrandLoading(false);
      }
    }
    getAlLBrands();
  }, []);

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

        {isBrandLoading ? (
          <div className="flex h-full items-center justify-center space-y-4">
            <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
          </div>
        ) : allBrands.length <= 0 ? (
          <div className="mt-10 flex h-full  justify-center space-y-4 font-bold text-gray-500">
            <h1 className="text-2xl">No Brand uploaded yet!!!</h1>
          </div>
        ) : (
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
            {allBrands.length > 0 &&
              allBrands?.map((brand, i) => (
                <SwiperSlide key={i}>
                  <div className="mx-auto w-[200px] ">
                    <LazyLoadImage
                      effect="blur"
                      className="grayscale"
                      src={brand.logo}
                    />
                  </div>
                  <img
                    className="mx-auto w-[200px] grayscale"
                    src={brand.logo}
                    alt=""
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}

export default OurBrands;
