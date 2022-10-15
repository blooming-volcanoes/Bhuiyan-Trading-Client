import React from "react";
import future from "../../../assets/Images/future.png";

export default function Future() {
  return (
    <section className="py-16" data-aos="zoom-in-up">
      <div className="main-container">
        <div className="grid-cols-2 items-center md:grid">
          <div className="">
            <img className="w-full p-4" src={future} alt="" />
          </div>
          <div className="">
            <p className="text-justify text-xl font-bold text-black">
              We listen carefully and understand the needs of our clients. We
              have been committed to setting the highest standards for quality
              and client service within the given period of time whatever your
              vessel’s needs, we can help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
