import React from "react";
import boatPng from "../../../assets/Images/boat.jpg";
import ropePng from "../../../assets/Images/rope.jpg";

function Search() {
  return (
    <div className="bg-red-700 py-14">
      <div className="mx-5 grid max-w-full grid-cols-1 lg:mx-auto lg:max-w-6xl lg:grid-cols-5">
        {/* left side */}

        <div className="space-y-4 md:col-span-2 lg:col-span-2">
          <h1 className="text-3xl font-medium text-white">
            What are you looking for ?
          </h1>
          <input
            className="w-[400px] rounded-lg border-none"
            type="text"
            placeholder="ex. Ship, Fish, Plastic"
          />

          <p className="text-xl text-white">Ex - Ship, Fish, Plastic</p>
        </div>

        {/* Right Side */}
        <div className="my-4 flex space-x-2 md:col-span-3 lg:col-span-3 lg:-mb-52">
          <img
            className="h-[200px] w-[400px] rounded object-cover"
            src={boatPng}
            alt=""
          />
          <img
            className="h-[200px] w-[400px] rounded object-cover"
            src={ropePng}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
