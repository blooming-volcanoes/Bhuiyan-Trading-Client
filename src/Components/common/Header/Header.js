import "animate.css";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../../assets/Images/logo.png";
import httpDashboardService from "../../../services/dashboard.service";
let Links = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-us" },
  { name: "Latest News", link: "/latestNews?page=1" },
  { name: "Contact Us", link: "/contact" },
];

const Header = ({ color }) => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth.user);
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    async function getHeaderData() {
      try {
        const data = await httpDashboardService.getHeaderData();
        setHeaderData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getHeaderData();
  }, []);

  return (
    <header
      style={{
        backgroundColor: `${
          color ? `rgba(${color.R}, ${color.G}, ${color.B}, 0.8)` : "#243e4aa6"
        }`,
      }}
      className="animate__fadeInDown animate__animated fixed top-0 z-10 w-full shadow-md"
    >
      <nav className="main-container items-center justify-between md:flex">
        <div className="px-2 pt-5 pb-3">
          <Link to="/">
            <LazyLoadImage
              height="100%"
              width="100%"
              className="h-16 object-contain md:w-[100px] lg:w-[100px]"
              effect="blur"
              src={logo}
            />
            {/* <img
              className="h-16  object-contain md:w-[100px] lg:w-[100px]"
              src={headerData?.logo || logo}
              alt=""
            /> */}
          </Link>
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
              <Link
                to={link.link}
                className="font-bold text-white duration-100 hover:border-b-4 hover:border-red-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          {user?.role === "admin" && (
            <li className="my-7 text-lg md:my-0 md:ml-8">
              <Link
                to="/admin/dashboard"
                className="font-bold text-white duration-100 hover:border-b-4 hover:border-red-500"
              >
                Dashboard
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
