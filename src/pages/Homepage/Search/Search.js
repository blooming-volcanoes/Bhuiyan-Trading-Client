import React from "react";

function Search() {
  return (
    <section className="whowe-bg py-16">
      <div className="main-container">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          <div className="">
            <h3 className="mb-3 text-2xl font-bold text-white">
              What we are looking for?
            </h3>
            <input
              className="block w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
            <p className="text-md font-bold text-white">
              Ex- Ship, Fish, Plastic
            </p>
          </div>
          <div className="h-[273px] rounded-lg bg-rope-as-bg"></div>
          <div className="boat-as-bg flex flex-col items-center justify-end rounded-lg">
            <h3 className="mb-3 text-2xl font-bold text-white">
              What we are looking for?
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
