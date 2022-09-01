import PdDetailsAndDescription from "../PdDetailsAndDescription/PdDetailsAndDescription";
import PdImageSliders from "../PdImageSliders/PdImageSliders";

const PdDetailMain = ({ images }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <PdImageSliders bgImages={images} />
      <PdDetailsAndDescription bgImage={images.primary} />
    </div>
  );
};

export default PdDetailMain;
