import React from "react";
import whowe from "../../../assets/Images/whowe.png";

export default function WhoWe() {
  return (
    <section className="whowe-bg py-20">
      <div className="mx-5 flex max-w-full flex-col items-center justify-center lg:mx-auto lg:max-w-6xl lg:flex-row">
        <div className="order-2 mt-5 md:order-2 lg:order-1 lg:mt-0 lg:w-[50%]">
          <h3 className="mb-3 text-4xl text-white">Who we are?</h3>
          <p className="text-justify text-xl text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            excepturi esse ipsum hic aspernatur doloribus vel ad eligendi est,
            provident aut neque unde nam molestias in possimus dolorum sint!
            Aperiam voluptatibus itaque vitae debitis ex, praesentium laudantium
            magni quas, maiores velit voluptate quidem. Facere cum maxime fugit,
            quasi neque dolore suscipit quidem voluptate vero voluptatem eaque,
            sint necessitatibus ullam eos! Quo nemo et quod maiores harum.
            Numquam enim nisi id.
          </p>
        </div>
        <div className="order-1 md:order-1 lg:order-2 lg:w-[50%]">
          <img className="mx-auto w-full lg:w-[400px]" src={whowe} alt="" />
        </div>
      </div>
    </section>
  );
}
