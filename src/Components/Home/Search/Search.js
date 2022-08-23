import React from "react";
import boatPng from "../../../assets/Images/boat.jpg";
import ropePng from "../../../assets/Images/rope.jpg";

function Search() {
  return (
    <div className="bg-red-700 py-14">
      <div className="mx-5 grid max-w-full grid-cols-1 lg:mx-auto lg:max-w-6xl lg:grid-cols-5">
        {/* left side */}

        <div className="space-y-4 md:col-span-2 lg:col-span-2">
          <h1 className="text-lg font-medium text-white lg:text-3xl">
            What are you looking for ?
          </h1>
          <input
            className="w-full rounded-lg border-none lg:w-[400px]"
            type="text"
            placeholder="ex. Ship, Fish, Plastic"
          />

          <p className="text-xl text-white">Ex - Ship, Fish, Plastic</p>
        </div>

        {/* Right Side */}
        <div className="my-4 flex flex-col space-x-0 space-y-4 md:col-span-3 md:flex-row md:space-y-0  md:space-x-2 lg:col-span-3 lg:-mb-52 lg:flex-row lg:space-y-0  lg:space-x-2">
          <img
            className="h-[200px] w-full rounded object-cover lg:w-[400px]"
            src={boatPng}
            alt=""
          />
          <img
            className="h-[200px] w-full rounded object-cover  lg:w-[400px]"
            src={ropePng}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
