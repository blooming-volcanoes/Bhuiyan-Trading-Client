import React from "react";
import whowe from "../../../assets/Images/whowe.png";

export default function WhoWe() {
  return (
    <section className="whowe-bg py-16">
      <div className="main-container">
        <div className="grid-cols-2 items-center gap-4 md:grid">
          <div className="mb-4 md:mb-0" data-aos="zoom-in-right">
            <h3 className="mb-3 text-4xl font-bold text-white">Who we are?</h3>
            <p className="text-justify text-xl text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              excepturi esse ipsum hic aspernatur doloribus vel ad eligendi est,
              provident aut neque unde nam molestias in possimus dolorum sint!
              Aperiam voluptatibus itaque vitae debitis ex, praesentium
              laudantium magni quas, maiores velit voluptate quidem. Facere cum
              maxime fugit, quasi neque dolore suscipit quidem voluptate vero
              voluptatem eaque, sint necessitatibus ullam eos! Quo nemo et quod
              maiores harum. Numquam enim nisi id.
            </p>
          </div>
          <div className="p-4" data-aos="zoom-in-left">
            <img className="w-full rounded-lg" src={whowe} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
