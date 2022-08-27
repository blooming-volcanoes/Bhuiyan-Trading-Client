import React from 'react';
import bannerRoundedImg from '../../../assets/Images/pexels-奥尼尔-孙-2871757.jpg';

const Banner = ({ bannerImage }) => {
    return (
        <div
            style={{
                backgroundImage: `url(${bannerImage})`,
            }}
            className='w-full h-80 sm:h-96 lg:h-screen bg-no-repeat bg-cover bg-center mb-14'
        >
            <img className='absolute right-0 -bottom-72 rounded-full w-96 h-96' src={bannerRoundedImg} alt="rounded" />
        </div>
    );
};

export default Banner;