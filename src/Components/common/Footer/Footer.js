import React from "react";
import facebook from "../../../assets/Images/facebook.png";
import logo from "../../../assets/Images/logo.png";

function Footer() {
  return (
    <section className="bg-[/282828] pb-5 text-white ">
      <div className="mx-auto mb-20 grid w-2/3 grid-cols-1 pt-5 lg:w-full lg:max-w-6xl lg:grid-cols-4">
        {/* Contact Us */}
        <ul className="mx-auto mb-4 space-y-2 lg:mx-0">
          <li>
            <img src={logo} alt="" />
          </li>
          <li className="space-x-2 text-2xl">
            <a href="/">About. </a>
            <a href="/">Contact Us</a>
          </li>
          <li className="flex space-x-3">
            {Array(4)
              .fill("")
              .map((_, i) => (
                <a key={i} href="/">
                  <img className="h-10 w-10" src={facebook} alt="" />
                </a>
              ))}
          </li>
        </ul>

        {Array(3)
          .fill("")
          .map((_, i) => (
            <ul
              key={i}
              className="mb-4 space-y-3 text-center lg:mb-0 lg:text-start"
            >
              <li className="font-medium">Who we are</li>
              {Array(7)
                .fill("About")
                .map((menus, i) => (
                  <li key={i}>{menus}</li>
                ))}
            </ul>
          ))}
      </div>
      <hr className="mx-auto my-4 max-w-6xl" />
      <p className="my-4  text-center font-medium">Copyright @ BTC</p>
    </section>
  );
}

export default Footer;
