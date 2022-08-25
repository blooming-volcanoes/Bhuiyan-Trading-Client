import React from 'react';

const MostPopularProducts = () => {
    return (
        <div className='container mx-auto'>
            {/* Title */}
            <div>
                <h1>
                    <span className='text-3xl font-bold'>We are</span>
                    <br />
                    <span className='text-7xl font-bold'>Red Fish</span>
                </h1>
            </div>
            {/* Slider text*/}
            <div className='flex justify-end'>
                <p>arrow icon</p>
                <p className='font-bold'>Most Popular</p>
            </div>
            {/* slider images */}
            <div>
                {/* slider images here
                // user swiper js for this
                */}
            </div>
        </div>
    );
};

export default MostPopularProducts;