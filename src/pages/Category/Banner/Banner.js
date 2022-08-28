import React from 'react';
import bannerRoundedImg from '../../../assets/Images/pexels-奥尼尔-孙-2871757.jpg';

const Banner = ({ bannerImage }) => {
    return (
        <div
            style={{
                backgroundImage: `url(${bannerImage})`,
            }}
            className='w-full h-56 md:h-96 lg:h-screen bg-no-repeat bg-cover bg-center mb-14'
        >
            <img className='absolute w-40 h-40 md:w-60 md:h-60 lg:w-96 lg:h-96 right-0 bottom-60 md:bottom-12 lg:-bottom-72 rounded-full  ' src={bannerRoundedImg} alt="rounded" />
        </div>
    );
};

export default Banner;