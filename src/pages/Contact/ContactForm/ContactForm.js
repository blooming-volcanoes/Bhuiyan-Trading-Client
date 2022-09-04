import React from "react";

export default function ContactForm() {
  return (
    <form className=" bg-[#073042]  text-white">
      <div className="main-container py-10">
        {/* titles */}
        <div className="flex flex-col justify-between space-y-6  md:flex-row lg:flex-row lg:space-y-0">
          <h1 className="w-2/4 text-3xl font-medium">
            Connect with us-
            <br />
            <span className="text-lg">Address Here</span>
            <br />
            <span className="text-lg">Address Here</span>
            <br />
            <span className="text-lg">Address Here</span>
            <br />
          </h1>
          <p className="w-full text-lg font-medium lg:w-2/6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum eaque
            fugit ad nostrum quos qui
          </p>
        </div>

        {/* inputs */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2">
          {/* left side form */}
          <div className="m-0 flex flex-col space-y-6 lg:mr-20">
            <input className="rounded-lg" type="text" placeholder="Name" />
            <input className="rounded-lg" type="email" placeholder="Email" />
            <input
              className="rounded-lg"
              type="text"
              placeholder="Product Name"
            />
            <input
              className="rounded-lg"
              type="text"
              placeholder="Email Title"
            />
            <textarea
              className="h-[150px] rounded-lg"
              id=""
              placeholder="Your comments"
            ></textarea>
          </div>

          {/* Right Side */}
          <div className="mt-10 flex flex-col space-y-6 lg:mt-0">
            <input className="rounded-lg" type="text" placeholder="Country" />
            <input className="rounded-lg" type="text" placeholder="City" />
            <input className="rounded-lg" type="text" placeholder="Zip Code" />
            <button
              type="submit"
              className="ml-auto w-36 rounded-lg bg-white py-2 px-4 font-extrabold text-[#073042]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
