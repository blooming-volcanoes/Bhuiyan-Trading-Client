import React from "react";
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
            <img className="mb-4 md:mb-0 lg:mb-0" src={shipment} alt="" />
          </div>
          <div className="py-3 ">
            <h3 className="text-4xl font-bold text-white">Our Research</h3>
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
        </div>
      </div>
    </section>
  );
}
