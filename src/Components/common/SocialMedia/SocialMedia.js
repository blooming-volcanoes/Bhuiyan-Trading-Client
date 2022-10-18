import React from "react";
import facebook from "../../../assets/Images/facebook.png";
import instagram from "../../../assets/Images/instagram.png";
import linkedin from "../../../assets/Images/linkedin.png";

function SocialMedia({ styles }) {
  return (
    <ul className={`${styles} mx-auto mb-4  lg:mx-0`}>
      <li>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img className="h-10 w-10" src={facebook} alt="" />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <img className="h-10 w-10" src={linkedin} alt="" />
        </a>
      </li>
      <li>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img className="h-10 w-10" src={instagram} alt="" />
        </a>
      </li>
    </ul>
  );
}

export default SocialMedia;
