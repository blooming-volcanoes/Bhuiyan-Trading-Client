import React from 'react';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Sliders from '../Sliders/Sliders';

const MostPopularProducts = () => {
    return (
        <div className='container mx-auto mb-14'>
            {/* Title */}
            <div className='pl-2 md:pl-0'>
                <h1>
                    <span className='text-3xl font-bold'>We are</span>
                    <br />
                    <span className='text-5xl lg:text-7xl font-bold'>Red Fish</span>
                </h1>
            </div>
            <div className='w-full lg:w-4/6'>
                <div className='flex justify-end mb-4 items-center pr-2 md:pr-0'>
                    <IoIosArrowDropleftCircle className='font-bold text-xl' />
                    <p className='font-bold text-lg ml-2'>Most Popular</p>
                </div>
                <Sliders />
            </div>
        </div>
    );
};

export default MostPopularProducts;