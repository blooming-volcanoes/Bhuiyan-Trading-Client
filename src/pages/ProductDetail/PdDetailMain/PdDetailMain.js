/* eslint-disable react/prop-types */
import PdDetailsAndDescription from "../PdDetailsAndDescription/PdDetailsAndDescription";
import PdImageSliders from "../PdImageSliders/PdImageSliders";

function PdDetailMain({ images, product }) {
  return (
    <div
      className="mt-24 flex flex-col lg:flex-row
        "
    >
      <PdImageSliders bgImages={images} product={product} />
      <PdDetailsAndDescription bgImage={images.primary} product={product} />
    </div>
  );
  // return (
  //     <div className='flex flex-col lg:flex-row mt-24
  //     '>
  //         <PdImageSliders bgImages={images} />
  //         <PdDetailsAndDescription bgImage={images.primary} />

  //     </div>
  // );
}

export default PdDetailMain;
