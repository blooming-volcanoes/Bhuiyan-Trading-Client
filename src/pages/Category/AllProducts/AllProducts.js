import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const AllProducts = () => {
    const products = [];
    for (let i = 0; i < 16; i++) {
        products.push(
            <div
                className='bg-no-repeat bg-cover bg-center h-48 flex items-end'
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 70%, rgba(74, 74, 74, 100)), 
                        url(https://picsum.photos/id/${i + 1}/500/300`,
                }}>
                <p className='text-white font-bold text-xl ml-3 mb-3'>Bata Fish</p>
            </div>
        )
    }
    return (
        <div className='container mx-auto'>
            <div className=' flex justify-between'>
                {/* title and serch box */}
                <div className='flex justify-end mb-4 items-center'>
                    <IoIosArrowDroprightCircle className='font-bold text-xl' />
                    <p className='font-bold text-lg ml-2'>All Products</p>
                </div>
                {/* search box */}
                <div className='flex relative mb-10'>
                    <input
                        className='w-80 border-slate-300 rounded-xl'
                        type="text"
                        name="searchproduct"
                        id=""
                        placeholder='Search products' />
                    <IoIosSearch
                        className='font-bold text-xl absolute right-2 top-3'
                    />
                </div>
            </div>
            {/* products */}
            <div className='grid grid-cols-4 gap-y-7 gap-x-10 mb-10'>
                {products}
            </div>

            {/* load more button */}
            <div className='flex justify-center items-center mb-10'>
                <button
                    className='bg-red-800 text-white font-bold text-lg px-4 py-2 rounded-xl'
                >Load More</button>
            </div>
        </div>
    );
};

export default AllProducts;