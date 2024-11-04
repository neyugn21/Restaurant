import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Noodle Soup",
    link: "#",
  },
  {
    id: 2,
    name: "Rice Bowls",
    link: "/#",
  },
  {
    id: 3,
    name: "Salad Bowls",
    link: "/#",
  },
  {
    id: 4,
    name: "Beverages",
    link: "/#",
  },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="bg-lightBlue">
        <div className="container py-2">
          <div className=" flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a href="#">
                <img src={Logo} alt="Logo" className="w-36" />
              </a>
            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="hidden lg:flex justify-center items-center gap-4"
            >
              <ul className="hidden lg:flex justify-center items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a href="{menu.link}" className="inline-block text-xl p-4 ">
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Responsive menu for Mobile Device */}
            <div className=" lg:hidden">
              <button onClick={toggleMenu}>
                <FaBars className="text-3xl" />
              </button>
              {/* Drop down menu */}
              {open && (
                <div>
                  <ul className="bg-white space-y-3 rounded-md shadow-lg absolute right-10 top-24 z-50">
                    {Menu.map((menu) => (
                      <li key={menu.id}>
                        <a
                          href="{menu.link}"
                          className="inline-block text-xl p-4 hover:bg-primary hover:text-white w-full rounded-md "
                        >
                          {menu.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
