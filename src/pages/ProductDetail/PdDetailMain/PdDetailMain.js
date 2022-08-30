import PdImageSliders from '../PdImageSliders/PdImageSliders';
import PdDetailsAndDescription from '../PdDetailsAndDescription/PdDetailsAndDescription';

const PdDetailMain = ({ images }) => {

    return (
        <div className='flex'>
            <PdImageSliders bgImages={images} />
            <PdDetailsAndDescription bgImage={images.primary} />


        </div>
    );
};

export default PdDetailMain;