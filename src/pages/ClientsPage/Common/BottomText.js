import React from "react";
import icon from "../../../assets/Images/correct.png";

export default function BottomText() {
  return (
    <div className="grid gap-7 py-6 md:grid-cols-3">
      <div className="flex">
        <img className="h-[30px] p-1" src={icon} alt="" />
        <p className="text-justify text-xl font-bold text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at nemo
          perspiciatis accusantium velit suscipit, veritatis eveniet eos
          repudiandae ab.
        </p>
      </div>
      <div className="flex">
        <img className="h-[30px] p-1" src={icon} alt="" />
        <p className="text-justify text-xl font-bold text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at nemo
          perspiciatis accusantium velit suscipit, veritatis eveniet eos
          repudiandae ab.
        </p>
      </div>
      <div className="flex">
        <img className="h-[30px] p-1" src={icon} alt="" />
        <p className="text-justify text-xl font-bold text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at nemo
          perspiciatis accusantium velit suscipit, veritatis eveniet eos
          repudiandae ab.
        </p>
      </div>
    </div>
  );
}
