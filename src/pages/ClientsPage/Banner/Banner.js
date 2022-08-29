import React from "react";
import fish from "../../../assets/Images/fish1.jpg";
import "./Banner.css";

function Banner() {
  return (
    <section className="client-banner-bg h-screen ">
      <div className="main-container flex h-full flex-col items-center justify-center md:static md:flex-row md:justify-start">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-black md:text-4xl">
            Lorem, ipsum.
          </h3>
          <h1 className="text-[50px] font-bold text-black md:text-[70px]">
            Lorem, ipsum
          </h1>
          <h3 className="text-right text-2xl font-bold text-black md:text-4xl">
            Lorem, ipsum.
          </h3>
        </div>

        <div className="md:top-50 md:absolute md:right-0 md:w-[40%]">
          <img className="w-full p-6 md:p-0" src={fish} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
