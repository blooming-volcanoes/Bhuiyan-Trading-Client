import React from "react";

const Accordion = ({ product }) => {
  return (
    <div className="relative mb-2 w-full overflow-hidden lg:mb-0">
      <input
        type="checkbox"
        className="peer absolute inset-x-0 top-0 z-10 h-12 w-full cursor-pointer opacity-0"
      />
      <div className="mb-2 flex h-12 w-full items-center lg:mb-0">
        <h1 className="pr-8 text-lg font-semibold lg:pr-0">
          Why should I buy your product? Convince me!
        </h1>
      </div>
      {/* Arrow icons */}
      <div className="absolute top-3 right-3 rotate-0 transition-transform duration-500 peer-checked:rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="max-h-0 overflow-hidden pl-5 transition-all duration-500 peer-checked:max-h-full">
        <p className="p-2">{product?.shortDesc}</p>
      </div>
    </div>
  );
};

export default Accordion;
