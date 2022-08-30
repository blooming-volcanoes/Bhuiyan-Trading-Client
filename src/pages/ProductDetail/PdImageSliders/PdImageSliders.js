import React from 'react';

const PdImageSliders = ({ bgImages }) => {
    return (
        <div
            style={{
                backgroundImage: `url(${bgImages.primary})`,
            }}
            className='w-1/2 bg-red-200 bg-no-repeat bg-cover bg-center'>
        </div>
    );
};

export default PdImageSliders;