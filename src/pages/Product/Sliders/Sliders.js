import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/Product.css";

// import required modules
import { useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import httpCateGoryService from "../../../services/category.service";

const Sliders = ({
  products,
  modifiedSubCategories,
  handelFilterProductBySubCategory,
}) => {
  const [isIncludes, setIsIncludes] = useState({});

  useEffect(() => {
    async function checkSub() {
      try {
        if (modifiedSubCategories.length) {
          modifiedSubCategories.forEach((cate) => {
            httpCateGoryService
              .getProductBySubCategory(cate.title.trim())
              .then((data) => {
                if (data?.length) {
                  setIsIncludes((prev) => {
                    return {
                      ...prev,
                      [cate.title]: cate.title,
                    };
                  });
                }
              });
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
    checkSub();
  }, [modifiedSubCategories]);

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
          Object?.keys(isIncludes).map(
            (key, i) =>
              modifiedSubCategories[i]?.title.trim() === key.trim() && (
                <SwiperSlide key={i}>
                  <div
                    onClick={() =>
                      handelFilterProductBySubCategory(
                        modifiedSubCategories[i]?.title.trim() === key.trim() &&
                          modifiedSubCategories[i]?.title
                      )
                    }
                    className="relative cursor-pointer"
                  >
                    <img
                      className="!h-[200px] rounded !object-cover"
                      src={
                        modifiedSubCategories[i]?.title.trim() === key.trim() &&
                        modifiedSubCategories[i]?.featureImg
                      }
                      alt=""
                    />
                    <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full rounded bg-black bg-opacity-30"></div>
                    <p className="absolute bottom-0 z-10 ml-3 mb-3 text-xl font-bold text-white">
                      {modifiedSubCategories[i]?.title.trim() === key.trim() &&
                        modifiedSubCategories[i]?.title}
                    </p>
                  </div>
                </SwiperSlide>
              )
          )
        ) : (
          <h1>No Product is Available</h1>
        )}

        <SwiperSlide>
          <div
            onClick={() => handelFilterProductBySubCategory(null)}
            className="relative cursor-pointer"
          >
            <img
              className="rounded"
              src="https://api.bhuiyantrad.com/uploads/1666880778115-314988044-pngtree-gray-simple-gradient-background-image_557031.jpg"
              alt=""
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full rounded bg-black bg-opacity-25 "></div>
            <p className="absolute bottom-0 z-10 ml-3 mb-3 text-xl font-bold text-white">
              All
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Sliders;

// {modifiedSubCategories.length > 0 ? (
//   Object?.keys(isIncludes).map(
//     (key, i) =>
//       modifiedSubCategories[i]?.title === key && (
//         <SwiperSlide key={i}>
//           <div
//             onClick={() =>
//               handelFilterProductBySubCategory(
//                 modifiedSubCategories[i]?.title
//               )
//             }
//             className="relative cursor-pointer"
//           >
//             <img
//               className="!h-[200px] rounded !object-cover"
//               src={modifiedSubCategories[i]?.featureImg}
//               alt=""
//             />
//             <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full rounded bg-black bg-opacity-30"></div>
//             <p className="absolute bottom-0 z-10 ml-3 mb-3 text-xl font-bold text-white">
//               {modifiedSubCategories[i]?.title}
//             </p>
//           </div>
//         </SwiperSlide>
//       )
//   )
// ) : (
//   <h1>No Product is Available</h1>
// )}
