import React from 'react';
import Header from '../../Components/common/Header/Header';
import AllProducts from './AllProducts/AllProducts';
import Banner from './Banner/Banner';
import MostPopularProducts from './MostPopularProducts/MostPopularProducts';

const Category = () => {
    return (
        <>
            {/* <Header /> */}
            <Banner />
            <MostPopularProducts />
            <AllProducts />
        </>
    );
};

export default Category;