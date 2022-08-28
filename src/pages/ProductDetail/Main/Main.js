import React from 'react';
import PdImageSliders from '../PdImageSliders/PdImageSliders';
import PdDetailsAndDescription from '../PdDetailsAndDescription/PdDetailsAndDescription';

const Main = () => {
    return (
        <div className='flex'>
            <PdImageSliders />
            <PdDetailsAndDescription />
        </div>
    );
};

export default Main;