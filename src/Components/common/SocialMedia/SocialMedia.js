import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from "react-share";
import facebook from "../../../assets/Images/facebook.png";
import Gmail from "../../../assets/Images/gmail.png";
import instagram from "../../../assets/Images/instagram.png";
import linkedin from "../../../assets/Images/linkedin.png";

function SocialMedia({ share, styles, data }) {
  return (
    <>
      {share ? (
        <ul className={`${styles} mx-auto mb-4  lg:mx-0`}>
          <li>
            <FacebookShareButton url={data?.url}>
              <img className="h-10 w-10" src={facebook} alt="" />
            </FacebookShareButton>
          </li>
          <li>
            <LinkedinShareButton url={data?.url}>
              <img className="h-10 w-10" src={linkedin} alt="" />
            </LinkedinShareButton>
          </li>
          <li>
            <EmailShareButton subject={data?.title} body={data?.url}>
              <img className="h-10 w-10" src={Gmail} alt="" />
            </EmailShareButton>
          </li>
        </ul>
      ) : (
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
      )}
    </>
  );
}

export default SocialMedia;
