import React from 'react';
import bannerBgImage from '../../../assets/Images/pexels-kindel-media-8352350.jpg'

const Banner = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bannerBgImage})`,
                height: '516px'
            }}
            className='bg-no-repeat bg-cover bg-center'
        />
    );
};

export default Banner;