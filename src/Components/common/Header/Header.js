import React, { useState } from "react";
import logo from "../../../assets/Images/logo.png";

const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Our Products", link: "/" },
    { name: "Contact Us", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-10 w-full bg-[#243e4aa6]  shadow-md">
      <nav className="main-container items-center justify-between md:flex">
        <div className="rounded-b-lg bg-white px-2 pt-5 pb-3">
          <img className="h-16" src={logo} alt="" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer text-3xl md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`absolute left-0 z-[-1] w-full bg-[#243e4aa6] pb-5 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:bg-transparent md:pb-0 md:pl-0 ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="my-7 text-lg md:my-0 md:ml-8">
              <a
                href={link.link}
                className="font-bold text-white duration-100 hover:border-b-4 hover:border-red-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
