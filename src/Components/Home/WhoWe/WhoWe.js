import React from "react";
import whowe from "../../../assets/Images/whowe.png";

export default function WhoWe() {
  return (
    <section className="whowe-bg py-5">
      <div className="container mx-auto items-center justify-center px-20 lg:flex ">
        <div className="lg:w-[50%]">
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
        <div className="lg:w-[50%]">
          <img className="w-full p-6" src={whowe} alt="" />
        </div>
      </div>
    </section>
  );
}
