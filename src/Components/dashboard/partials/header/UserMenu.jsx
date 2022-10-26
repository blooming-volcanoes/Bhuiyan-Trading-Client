import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Transition from "../../../../utils/Transition";

import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import UserAvatar from "../../../../assets/Images/user-avatar-32.png";
import { removeUser } from "../../../../redux/auth/authAction";

function UserMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const trigger = useRef(null);
  const dropdown = useRef(null);

  const handelLogout = () => {
    Swal.fire({
      title: "Are you sure you want to Logout?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(removeUser());
        Swal.fire("Logged out!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Ok no Problem", "", "info");
      }
    });
  };

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="group inline-flex items-center justify-center"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <img
          className="h-8 w-8 rounded-full"
          src={UserAvatar}
          width="32"
          height="32"
          alt="User"
        />
        <div className="flex items-center truncate">
          <span className="ml-2 truncate text-sm font-medium group-hover:text-slate-800">
            {user?.name || "Admin"}
          </span>
          <svg
            className="ml-1 h-3 w-3 shrink-0 fill-current text-slate-400"
            viewBox="0 0 12 12"
          >
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className="absolute top-full right-0 z-10 mt-1 min-w-44 origin-top-right overflow-hidden rounded border border-slate-200 bg-white py-1.5 shadow-lg"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="mb-1 border-b border-slate-200 px-3 pt-0.5 pb-2">
            <div className="font-medium text-slate-800">
              {user?.name || "Admin"}.
            </div>
            <div className="text-xs italic text-slate-500">Administrator</div>
          </div>
          <ul>
            <li>
              <Link
                className="flex items-center py-1 px-3 text-sm font-medium text-indigo-500 hover:text-indigo-600"
                to="/admin/dashboard/user/profile"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Settings
              </Link>
            </li>
            <li>
              {user?.email && (
                <button
                  type="button"
                  className="flex items-center py-1 px-3 text-sm font-medium text-indigo-500 hover:text-indigo-600"
                  onClick={() => {
                    setDropdownOpen(!dropdownOpen);
                    handelLogout();
                  }}
                >
                  Sign Out
                </button>
              )}
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default UserMenu;
