import "animate.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Images/logo.png";

const Header = ({ color }) => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "Category", link: "/categories" },
        { name: "Product Detail", link: "/product-detail" },
        { name: "Contact Us", link: "/contact" },
        { name: "Latest News", link: "/latestNews" },
        { name: "Blog", link: "/blogPage" },
        { name: "Our Clients", link: "/ClientsPage" },
    ];
    let [open, setOpen] = useState(false);
    console.log("COLOR", color);
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
                <div className="rounded-b-lg bg-white px-2 pt-5 pb-3">
                    <Link to="/">
                        <img className="h-16" src={logo} alt="" />
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
                </ul>
            </nav>
        </header>
    );
};

export default Header;
