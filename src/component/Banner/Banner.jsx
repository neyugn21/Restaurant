import React from "react";
import BannerImg from "./../../assets/banner (1).png";

const Banner = () => {
  return (
    <>
      <div className="min-h-[620px] flex justify-center items-center py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Image section */}
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              className="flex justify-center items-center"
            >
              <img
                src={BannerImg}
                alt=""
                className=" max-w-[450px] mx-auto w-full shadow-1"
              />
            </div>
            {/* Text section */}
            <div className="flex flex-col justify-center text-center sm:text-left space-y-4 sm:pt-0">
              <p
                data-aos="fade-up"
                className="uppercase text-3xl font-semibold text-dark"
              >
                About
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-5xl text-primary font-bold font-cursive2 "
              >
                Fresh Bowl
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sm text-gray-500 tracking-wide leading-5"
              >
                {" "}
                Rice bowl là một món ăn phổ biến trong ẩm thực châu Á, kết hợp
                cơm với các loại thịt, rau, và gia vị để tạo ra một bữa ăn đầy
                đủ dinh dưỡng. Những tô cơm này không chỉ dễ chế biến mà còn
                mang lại sự hài hòa giữa các thành phần, từ vị ngọt của rau củ,
                đậm đà của thịt, cho đến sự dẻo mềm của hạt cơm. Mỗi quốc gia có
                cách chế biến riêng, làm cho rice bowl trở thành một món ăn
                phong phú về hương vị và văn hóa
              </p>
              <div data-aos="fade-up" data-aos-delay="400">
                <button className="primary-btn">View Our Menu</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
