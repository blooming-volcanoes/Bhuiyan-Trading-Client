import React from "react";
import honorable from "../../../assets/Images/dummy.jpg";

export default function HonorableClient() {
  return (
    <section className="bg-[#3DDC84] py-10">
      <div className="main-container">
        <div>
          <h3 className="text-2xl font-bold text-black">Our</h3>
          <h2 className="text-4xl font-bold text-black">Honorable Client</h2>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          <div>
            <img src={honorable} alt="" className="w-full" />
          </div>
          <div>
            <img src={honorable} alt="" className="w-full" />
          </div>
          <div>
            <img src={honorable} alt="" className="w-full" />
          </div>
          <div>
            <img src={honorable} alt="" className="w-full" />
          </div>
        </div>
        <h3 className="text-right text-2xl font-bold text-black">
          Since - 2022
        </h3>
      </div>
    </section>
  );
}
