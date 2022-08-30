import React, { useEffect, useRef, useState } from 'react';
import Footer from '../../Components/common/Footer/Footer';
import Header from '../../Components/common/Header/Header';
import { getAverageColor } from '../../lib/lib';
import PdDetailMain from './PdDetailMain/PdDetailMain';

const ProductDetail = () => {
    const image = useRef();
    const [color, setColor] = useState(null);
    const [images] = useState({
        primary: 'https://picsum.photos/id/501/500/300',
        secondary: [
            'https://picsum.photos/id/102/500/300',
            'https://picsum.photos/id/103/500/300',
            'https://picsum.photos/id/104/500/300',
            'https://picsum.photos/id/105/500/300',
            'https://picsum.photos/id/106/500/300',
        ]
    });


    useEffect(() => {
        image.current.onload = () => {
            const { R, G, B } = getAverageColor(image.current, 4);
            setColor({ R, G, B });
        }
    }, []);
    return (
        <>
            <Header color={color} />
            <PdDetailMain images={images} />
            <Footer />

            {/* the image below is not shown on the UI, rather used to find the average color of the banner image */}
            <img ref={image} src={images.primary} crossOrigin='' alt='hello' className='hidden' />
        </>
    );
};

export default ProductDetail;