import React from "react";
import HeroImg from "./../../assets/hero.png";

const Hero = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-lightBlue flex justify-center items-center ">
      <div className="container pb-8 sm:pb-0 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* text content section */}
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left  ">
            <h1
              data-aos="zoom-out"
              data-aos-delay="300"
              className="text-8xl lg:text-[12rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/80 font-cursive"
            >
              Rice
              <span className="text-3xl font-sans text-dark">Bowl</span>
            </h1>
            <p
              data-aos="fade"
              data-aos-delay="300"
              className="text-sm font-sans text-dark"
            >
              Rice bowl là một món ăn phổ biến trong ẩm thực châu Á, kết hợp cơm
              với các loại thịt, rau, và gia vị để tạo ra một bữa ăn đầy đủ dinh
              dưỡng. Những tô cơm này không chỉ dễ chế biến mà còn mang lại sự
              hài hòa giữa các thành phần, từ vị ngọt của rau củ, đậm đà của
              thịt, cho đến sự dẻo mềm của hạt cơm. Mỗi quốc gia có cách chế
              biến riêng, làm cho rice bowl trở thành một món ăn phong phú về
              hương vị và văn hóa
            </p>
            <div data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">
              <button className="primary-btn  ">View Our Menu</button>
            </div>
          </div>
          {/* image section */}

          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 "
          >
            <img
              src={HeroImg}
              alt="hero image"
              className="max-w-[450px] w-full mx-auto   sm:scale-125 shadow-1  "
            />
            <div className="bg-primary p-3 rounded-xl absolute top-10 left-10 hidden md:block text-white">
              <h1>Fresh Food</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
