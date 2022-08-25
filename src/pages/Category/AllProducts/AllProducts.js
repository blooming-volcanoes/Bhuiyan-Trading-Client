import React from 'react';

const AllProducts = () => {
    return (
        <div className='container mx-auto flex justify-between'>
            {/* title and serch box */}
            <div className='flex'>
                <p>All fish</p>
                <p>arrow icon</p>
            </div>
            {/* search box */}
            <div className='flex'>
                <input type="text" name="searchproduct" id="" placeholder='Search products' />
                <p>search icon</p>
            </div>
        </div>
    );
};

export default AllProducts;