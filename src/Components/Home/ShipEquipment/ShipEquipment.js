import React from "react";
import shipequipment from "../../../assets/Images/shipequipment.jpg";

export default function ShipEquipment() {
  return (
    <section className=" bg-blue-900">
      <div className="mx-auto items-center  justify-center lg:flex lg:justify-between ">
        <div className="lg:w-[50%]">
          <img className="w-full " src={shipequipment} alt="" />
        </div>
        <div className="px-4 lg:w-[50%]">
          <h3 className="mb-3 text-4xl text-white">Our Research</h3>
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
      </div>
    </section>
  );
}
