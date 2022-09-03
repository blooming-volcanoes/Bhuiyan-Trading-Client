import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';

import { Navigation, Thumbs } from 'swiper';
// SwiperCore.use([Pagination, Controller, Thumbs]);

const PdImageSliders = ({ bgImages }) => {
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);
    // const [controlledSwiper, setControlledSwiper] = useState(null);
    const [activeThumb, setActiveThumb] = useState({});

    const slides = [];
    for (let i = 0; i < 5; i++) {
        slides.push(
            <SwiperSlide key={`slide-${i}`}>

                <div
                    className='bg-no-repeat bg-cover bg-center h-[300px] lg:h-[500px] flex items-end'
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 70%, rgba(74, 74, 74, 100)), 
                        url(https://picsum.photos/id/${i + 1}/500/300)`,
                    }}>
                    <p className='text-white font-bold text-xl ml-3 mb-3'>Bata Fish</p>
                </div>
            </SwiperSlide>
        )
    }

    const thumbs = [];
    for (let i = 0; i < 5; i++) {
        thumbs.push(
            <SwiperSlide key={`thumbs-${i}`}>
                <div
                >
                    <img src={`https://picsum.photos/id/${i + 1}/163/100`} alt="thumbnail" />
                </div>
            </SwiperSlide>
        )
    }
    return (

        <div className='w-full lg:w-1/2'>
            <div className='mb-2'>
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    // navigation={true}
                    modules={[Navigation, Thumbs]}
                    grabCursor={true}
                // thumbs={{ swiper: activeThumb }}
                // id='main'
                // slidesPerView={1}
                // autoplay
                // controller={{ control: controlledSwiper }}
                >
                    {slides}
                </Swiper >
            </div>
            <div className='mb-2'>
                <Swiper
                    // onSwiper={setActiveThumb}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    modules={[Navigation, Thumbs]}
                    grabCursor={true}
                // id='main'
                // slidesPerView={1}
                // autoplay
                // controller={{ control: controlledSwiper }}
                >
                    {thumbs}
                </Swiper >
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