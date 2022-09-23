/* eslint-disable react/prop-types */
import PdDetailsAndDescription from "../PdDetailsAndDescription/PdDetailsAndDescription";
import PdImageSliders from "../PdImageSliders/PdImageSliders";

function PdDetailMain({ product }) {
  return (
    <div
      className="mt-24 flex flex-col lg:flex-row
        "
    >
      <PdImageSliders product={product} />
      <PdDetailsAndDescription product={product} />
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
