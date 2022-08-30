import React, { useState } from 'react';
import PdImageSliders from '../PdImageSliders/PdImageSliders';
import PdDetailsAndDescription from '../PdDetailsAndDescription/PdDetailsAndDescription';

const Main = () => {
    const [images] = useState({
        primary: 'https://picsum.photos/id/101/500/300',
        secondary: [
            'https://picsum.photos/id/102/500/300',
            'https://picsum.photos/id/103/500/300',
            'https://picsum.photos/id/104/500/300',
            'https://picsum.photos/id/105/500/300',
        ]
    });
    return (
        <div className='flex'>
            <PdImageSliders bgImages={images} />
            <PdDetailsAndDescription bgImage={images.primary} />
        </div>
    );
};

export default Main;