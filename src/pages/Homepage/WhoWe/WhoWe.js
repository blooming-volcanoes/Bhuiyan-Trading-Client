import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import whowe from "../../../assets/Images/whowe.png";

export default function WhoWe() {
  return (
    <section className="whowe-bg py-16">
      <div className="main-container">
        <div className="grid-cols-2 items-center gap-4 md:grid">
          <div className="mb-4 md:mb-0" data-aos="zoom-in-right">
            <h3 className="mb-3 text-4xl font-bold text-white">Who we are?</h3>
            <p className="text-justify text-xl text-white">
              Welcome to Bhuiyan Trading Corp. We have the pleasure to introduce
              with our company name Bhuiyan Trading Corporation for your kind
              reference and future necessary action. We are biggest stockiest
              for all kind marine Automation, Navigation, Hydraulic Pump and
              motor, Com pressure, Fire detection system etc . We are one point
              marine supplier solutions for all your vessels requirements. Our
              company provides the highest quality services. We are a trusted
              service provider over a decade with our efforts and our client’s
              satisfaction.
            </p>
          </div>
          <div className="p-4" data-aos="zoom-in-left">
            <LazyLoadImage
              height="100%"
              width="100%"
              className="w-full rounded-lg"
              effect="blur"
              src={whowe}
            />
            {/* <img className="w-full rounded-lg" src={whowe} alt="" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
