import React, { useState } from "react";
import logo from "../../../assets/Images/logo.png";

const Header = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full shadow-md">
      <div className="items-center justify-between bg-white py-4 px-7 md:flex md:px-10">
        <div>
          <img className="h-10" src={logo} alt="" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer text-3xl md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`absolute left-0 z-[-1] w-full bg-white pb-12 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="my-7 text-xl md:my-0 md:ml-8">
              <a
                href={link.link}
                className="text-gray-800 duration-500 hover:text-gray-400"
              >
                {link.name}
              </a>
            </li>
          ))}
          {/* <Button>
          Get Started
        </Button> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
