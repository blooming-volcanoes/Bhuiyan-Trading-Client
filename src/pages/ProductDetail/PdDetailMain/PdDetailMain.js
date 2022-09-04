import PdImageSliders from '../PdImageSliders/PdImageSliders';
import PdDetailsAndDescription from '../PdDetailsAndDescription/PdDetailsAndDescription';

const PdDetailMain = ({ images }) => {

    return (
        <div className='flex flex-col lg:flex-row mt-24
        '>
            <PdImageSliders bgImages={images} />
            <PdDetailsAndDescription bgImage={images.primary} />
        </div>
    );
    // return (
    //     <div className='flex flex-col lg:flex-row mt-24
    //     '>
    //         <PdImageSliders bgImages={images} />
    //         <PdDetailsAndDescription bgImage={images.primary} />


    //     </div>
    // );
};

export default PdDetailMain;