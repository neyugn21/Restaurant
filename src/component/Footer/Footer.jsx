import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "./../../assets/logo.png";
const FotterLink = [
  {
    id: 1,
    title: "Home",
    link: "/#",
  },
  {
    id: 2,
    title: "About Us",
    link: "/#about",
  },
  {
    id: 3,
    title: "Contact",
    link: "/#contact",
  },
  {
    id: 4,
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div>
      <div className="container grid md:grid-cols-3 pb-20">
        {/* company info */}
        <div data-aos="fade-up" className="py-8 ">
          <img src={Logo} alt="" className="w-32" />
          <div className="space-y-5">
            <p className="pt-4 opacity-60">
              Cozy Vibes, Unforgettable Moments – Your Perfect Espresso Escape
            </p>
            <div>
              <button
                href="https://facebook.com"
                target="_blank"
                className="primary-btn"
              >
                My channel
              </button>
            </div>
          </div>
        </div>
        {/* links */}
        <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
          <div data-aos="fade-up" className="py-8 px-4">
            <h1 className="text-xl font-semibold sm:text-left mb-5">
              Important Links
            </h1>
            <ul>
              {FotterLink.map((item) => (
                <li key={item.id} className="hover:underline duration-500 ">
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* second link */}
          <div data-aos="fade-up" data-aos-delay="200" className="py-8 px-4">
            <h1 className="text-xl font-semibold sm:text-left mb-5">
              Quick Links
            </h1>
            <ul>
              {FotterLink.map((item) => (
                <li key={item.id} className="hover:underline">
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* third link */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="py-8 px-4 col-span-2 sm:col-auto"
          >
            <h1 className="text-xl font-semibold sm:text-left mb-5">Address</h1>
            <div className="flex items-center space-x-4 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaTwitter className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="bg-gray-200">
        <div
          data-aos="fade-right"
          className="container flex justify-between items-center py-4 text-xs md:text-sm"
        >
          <p>Copyright © 2024 - NTT</p>
          <div className="flex justify-center items-center gap-3">
            <a href="#">Privacy</a>
            <a href="#">Accessibility</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
