import React from 'react';
import PdDescriptionAccordion from '../PdDescriptionAccordion/PdDescriptionAccordion';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const PdDetailsAndDescription = ({ bgImage }) => {
    console.log(bgImage);
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(230, 230, 230, 0.8) 70%, rgba(230, 230, 230, 0.8)), 
                url(${bgImage})`,
            }}
            className='w-1/2 pt-5 pl-5 pr-5 bg-no-repeat bg-cover bg-center'>
            <h1 className='font-bold text-5xl mb-2'>Red Fish</h1>
            <h3 className='text-xl font-bold mb-5'>Category here</h3>
            <p className='font-bold mb-3'>Price: $ <span className='font-bold text-3xl text-red-600'>800.00</span>/unit</p>
            <p className='text-2xl mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, velit quae! Quae nisi ipsa quasi ea nobis dolore ex vero!</p>
            <PdDescriptionAccordion />

            <button className='mb-3 font-bold text-white text-lg px-3 py-2 bg-red-900 rounded-lg'>Contact us to purchase</button>

            <div className='w-full flex mb-3'>
                <button className='flex w-1/2 items-center justify-center bg-gray-100 h-20 hover:bg-gray-200 border-slate-500'>
                    <IoIosArrowDropleftCircle className='text-3xl' />
                    <span className='text-2xl ml-1'>Category Page</span>
                </button>
                <button className='flex w-1/2 items-center justify-center bg-gray-100 h-20 hover:bg-gray-200 border-slate-500'>
                    <span className='text-2xl mr-1'>Home Page</span>
                    <IoIosArrowDroprightCircle className='text-3xl' />
                </button>
            </div>
        </div>
    );
};

export default PdDetailsAndDescription;