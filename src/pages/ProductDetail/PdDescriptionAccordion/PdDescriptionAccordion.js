import React from "react";
import Accordion from "./../../../Components/custom/Accordion/Accordion";

const PdDescriptionAccordion = ({ product }) => {
  return (
    <div className="mb-5 rounded-lg bg-white py-3 pl-3 lg:py-0">
      <Accordion product={product} />
    </div>
  );
};

export default PdDescriptionAccordion;
