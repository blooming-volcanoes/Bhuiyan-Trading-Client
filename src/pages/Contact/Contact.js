/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import PageLayout from "../../layouts/PageLayout";

function Contact() {
  return (
    <PageLayout>
      {/* Location */}
      <div className="h-full min-h-[300px]">
        <iframe
          style={{ width: "100%", height: "100%", minHeight: "500px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.5239599486977!2d91.82790081422624!3d22.333836447322092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a842bd40ad%3A0xb5a685e4e6129d80!2sChittagong%20Railway%20Staion%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1661600276225!5m2!1sen!2sbd"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>

      {/* Forms */}
      <form className=" bg-[#073042]  text-white">
        <div className="main-container py-10">
          {/* titles */}
          <div className="flex flex-col justify-between space-y-6  md:flex-row lg:flex-row lg:space-y-0">
            <h1 className="w-2/4 text-3xl font-medium">Connect with us-</h1>
            <p className="w-full text-lg font-medium lg:w-2/6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
              eaque fugit ad nostrum quos qui
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
              <input
                className="rounded-lg"
                type="text"
                placeholder="Zip Code"
              />
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
    </PageLayout>
  );
}

export default Contact;
