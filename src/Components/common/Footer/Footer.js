import React, { useEffect, useState } from "react";
import { MdCall, MdLocationOn, MdMarkEmailRead } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import logo from "../../../assets/Images/logo.png";
import httpCateGoryService from "../../../services/category.service";
import SocialMedia from "./../SocialMedia/SocialMedia";

function Footer() {
  const [cateGories, setCateGories] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    async function getProducts() {
      try {
        const data = await httpCateGoryService.getAllCategory();
        setCateGories(data);
      } catch (error) {
        setLoader(false);
        console.log(error);
      }
    }
    getProducts();
    setLoader(false);
  }, [cateGories.length]);

  return (
    <section className="bg-[#282828] pb-5 text-white ">
      <div className="mx-auto mb-20 grid w-2/3 grid-cols-1 pt-5 lg:w-full lg:max-w-6xl lg:grid-cols-4">
        {/* Contact Us */}
        <ul className="mx-auto mb-4 space-y-2 lg:mx-0">
          <li className="mb-4 w-[150px] rounded bg-white p-2">
            <LazyLoadImage
              height="100%"
              width="100%"
              effect="blur"
              src={logo}
            />
            {/* <img src={logo} alt="" /> */}
          </li>

          <SocialMedia styles="flex items-center space-x-4" />
        </ul>

        <ul className="mb-4 mt-6 space-y-3 text-center lg:mb-0 lg:text-start">
          <li className="text-xl font-medium">Our Products</li>
          {cateGories.slice(0, 6).map((category, i) => (
            <li key={i} className="capitalize">
              <Link to={`/product/${category?.id}?page=1`}>
                {category?.categoryName}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="mb-4 mt-6 space-y-3 text-center lg:mb-0 lg:text-start">
          <li className="text-xl font-medium">About Us</li>
          <li className="capitalize">
            <Link to="/latestNews">Latest News</Link>
          </li>
          <li className="capitalize">
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>

        <ul className="mb-4 mt-6 space-y-3 text-center lg:mb-0 lg:text-start">
          <li className="text-xl font-medium">Contact Us</li>
          <li className="flex  space-x-2">
            <span>
              <MdLocationOn className="inline text-xl" />
            </span>
            <span>
              Mohiddin Market (2nd floor), Abdul Barek Road, North Pahartali,
              Chittagong, Bangladesh.
            </span>
          </li>
          <li className="flex  space-x-2">
            <span>
              <MdMarkEmailRead className="inline text-xl" />
            </span>
            <a href="mailto:info@bhuiyantrad.com">info@bhuiyantrad.com</a>
          </li>
          <li className="flex space-x-2">
            <span>
              <MdCall className="inline text-xl" />
            </span>
            <a href="tel:01818929292">+88-01818929292</a>
          </li>
        </ul>
      </div>
      <hr className="mx-auto my-4 max-w-6xl" />
      <p className="my-4  text-center font-medium">
        Copyright @ Bhuiyan Trading Corporation
      </p>
    </section>
  );
}

export default Footer;
