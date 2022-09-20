import React from "react";
import { Link } from "react-router-dom";
import User01 from "../../../../assets/Images/user-36-01.jpg";
import User02 from "../../../../assets/Images/user-36-02.jpg";
import User03 from "../../../../assets/Images/user-36-03.jpg";
import User04 from "../../../../assets/Images/user-36-04.jpg";

function DashboardAvatars() {
  return (
    <ul className="mb-8 -ml-px flex flex-wrap justify-center -space-x-3 sm:mb-0 sm:justify-start">
      <li>
        <Link className="block" to="#0">
          <img
            className="h-9 w-9 rounded-full"
            src={User01}
            width="36"
            height="36"
            alt="User 01"
          />
        </Link>
      </li>
      <li>
        <Link className="block" to="#0">
          <img
            className="h-9 w-9 rounded-full"
            src={User02}
            width="36"
            height="36"
            alt="User 02"
          />
        </Link>
      </li>
      <li>
        <Link className="block" to="#0">
          <img
            className="h-9 w-9 rounded-full"
            src={User03}
            width="36"
            height="36"
            alt="User 03"
          />
        </Link>
      </li>
      <li>
        <Link className="block" to="#0">
          <img
            className="h-9 w-9 rounded-full"
            src={User04}
            width="36"
            height="36"
            alt="User 04"
          />
        </Link>
      </li>
      <li>
        <button className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-indigo-500 shadow-sm transition duration-150 hover:border-slate-300">
          <span className="sr-only">Add new user</span>
          <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
          </svg>
        </button>
      </li>
    </ul>
  );
}

export default DashboardAvatars;
