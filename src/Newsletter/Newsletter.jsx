import React from "react";
import BgPng from "./../assets/food2-plate.png";

const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "right ",
  height: "100%",
  width: "100%",
};
const Newsletter = () => {
  return (
    <div className="bg-primary text-white" style={backgroundStyle}>
      <div className="container bg-black/60 py-16 sm:bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4 text-center sm:text-left">
            {/* text section */}
            <h1
              data-aos="fade-right"
              className="text-2xl sm:text-3xl font-semibold"
            >
              Ready to get started
            </h1>
            <p data-aos="fade-up" data-aos-delay="200">
              Subscribe to our newsletter
            </p>
          </div>

          {/* input section */}

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-center sm:text-left"
          >
            <input
              type="text"
              placeholder="Enter your email"
              className="max-w-[400px] px-4 py-2 rounded-l-md ring-0 focus:outline-none text-dark"
            />
            <button className="bg-white text-primary px-4 py-2 rounded-r-md">
              <span className="text-sm uppercase font-semibold">
                Get Started
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
