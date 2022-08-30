import React, { useState } from 'react';
import Footer from '../../Components/common/Footer/Footer';
import Header from '../../Components/common/Header/Header';
import PdDetailMain from './PdDetailMain/PdDetailMain';

const ProductDetail = () => {
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
        <>
            <Header />
            <PdDetailMain images={images} />
            <Footer />
        </>
    );
};

export default ProductDetail;