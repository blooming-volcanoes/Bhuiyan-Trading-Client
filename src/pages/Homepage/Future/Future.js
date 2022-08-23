import React from "react";
import future from "../../../assets/Images/future.png";

export default function Future() {
  return (
    <section className="py-5">
      <div className="container mx-auto items-center justify-center px-20 lg:flex ">
        <div className="lg:w-[50%]">
          <img className="w-full p-6" src={future} alt="" />
        </div>
        <div className="lg:w-[50%]">
          <p className="text-justify text-xl font-bold text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            maiores, nihil fuga unde amet quia deleniti explicabo vitae
            molestiae optio ipsam, asperiores harum eligendi excepturi! At
            placeat quas et sint?
          </p>
        </div>
      </div>
    </section>
  );
}
