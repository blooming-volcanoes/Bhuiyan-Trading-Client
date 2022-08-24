import { Link } from "react-router-dom";
import logo from "../../../assets/Images/logo.png";

const menus = [
  {
    name: "Home",
  },
  {
    name: "Our Products",
  },
  {
    name: "Contact Us",
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-gray-200 bg-gray-100">
      <nav className="max-w-3xl px-4 py-2 md:mx-auto md:max-w-7xl lg:mx-auto lg:max-w-7xl ">
        <div className="flex justify-between">
          {/* left side */}
          <div className="flex items-center space-x-3 ">
            {/* logo */}
            <div>
              <div className="relative  cursor-pointer py-2">
                <Link to="/">
                  <img
                    className=" w-[90px]"
                    src={logo}
                    alt=""
                    layout="fill"
                    objectFit="contain"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* right side */}
          <ul className="flex items-center space-x-5">
            {menus.map((menu, i) => (
              <li className=" font-medium text-red-500" key={i}>
                {menu.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
