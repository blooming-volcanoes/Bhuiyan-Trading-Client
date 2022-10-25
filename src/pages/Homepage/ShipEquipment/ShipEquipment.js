import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import shipment from "../../../assets/Images/shipequipment.jpg";

export default function ShipEquipment() {
  return (
    <section
      className="md:bg-shipment-bg bg-[#012962] bg-cover bg-center bg-no-repeat"
      data-aos="zoom-in-up"
    >
      <div className="main-container">
        <div className="grid-cols-2 items-center gap-x-0 md:grid md:gap-x-10 md:gap-y-0 lg:gap-y-0">
          <div>
            <LazyLoadImage
              height="100%"
              width="100%"
              className="mb-4 md:mb-0 lg:mb-0"
              effect="blur"
              src={shipment}
            />
            {/* <img className="mb-4 md:mb-0 lg:mb-0" src={shipment} alt="" /> */}
          </div>
          <div className="py-3 ">
            <h3 className="text-4xl font-bold text-white">Our Research</h3>
            <p className="text-justify text-xl text-white">
              Marine and Offshore units often operate in difficult environments,
              where they are subject to constant wave action. Given these
              circumstances, unit owners require their assets to be built,
              maintained and upgraded to the highest possible standards of
              safety, cost-efficiency and sustainability. To improve safety,
              Bureau Veritas invests in research and development, helping our
              experts gain a deeper knowledge of maritime conditions, and
              improve our suite of software programs. This technology enables us
              to carry out complex cutting-edge studies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
