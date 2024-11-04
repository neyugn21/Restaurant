import React from "react";
import Slider from "react-slick";
import BanerImg from "./../assets/banner (1).png";
import Rb12 from "./../assets/rb12.jpg";
import Rb11 from "./../assets/rb11.jpg";
import Rb9 from "./../assets/rb9.jpg";
import Rb5 from "./../assets/rb5.webp";
import Rb13 from "./../assets/rb13.jpg";
const Menu = [
  {
    id: 1,
    name: "Noodle Soup",
    price: "150.000 VND",
    img: Rb13,
  },
  {
    id: 2,
    name: "Rice Bowls",
    price: "250.000 VND",
    img: Rb5,
  },
  {
    id: 3,
    name: "Salad Bowls",
    price: "350.000 VND",
    img: Rb9,
  },
  {
    id: 4,
    name: "Beverages",
    price: "450.000 VND",
    img: Rb12,
  },
  {
    id: 5,
    name: "Noodle Soup",
    price: "200.000 VND",
    img: Rb5,
  },
];

const OurMenu = () => {
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 700,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplaySpeed: 2000,
  //     autoplay: true,
  //   };

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToScroll: 1,
    // fade: true,

    autoplaySpeed: 1000,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          initiaSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          autoplaySpeed: 2000,
          autoplay: true,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-16 bg-primary text-white">
      <div className="container">
        {/* Header section */}
        <div className="mb-10 space-y-5">
          <h1 data-aos="fade-up" className="text-center text-4xl font-bold">
            Our Menu
          </h1>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center sm:max-w-sm mx-auto text-xs opacity-75"
          >
            Khám phá thực đơn của chúng tôi, nơi kết hợp hài hòa giữa hương vị
            truyền thống và sự sáng tạo hiện đại. Từ các món ăn đặc trưng đến
            những món mới đầy phá cách, mỗi món đều được chuẩn bị kỹ lưỡng để
            mang đến trải nghiệm ẩm thực tinh tế và trọn vẹn nhất. Hãy cùng
            chúng tôi thưởng thức sự đa dạng và phong phú trong từng hương vị
            tại đây!
          </div>
        </div>

        {/* Slider section */}

        <div data-aos="zoom-in">
          <Slider {...settings}>
            {Menu.map((menu) => (
              <div key={menu.id} className="my-16">
                <div className=" flex flex-col gap-4 py-8 px-6 mx-4 rounded-xl">
                  {/* Image section */}
                  <div>
                    <img
                      src={menu.img}
                      alt=""
                      className="rounded-full w-auto sm:max-w-[200px] md:max-w-[250px]  mx-auto shadow-1"
                    />
                  </div>
                  {/* Text section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3 text-center">
                      <h1 className="text-xl">{menu.name}</h1>
                      <p className="text-3xl font-semibold">
                        <span className="text-2xl font-cursive">
                          {menu.price}
                        </span>
                      </p>
                      <div className="">
                        <button className="primary-btn">Order Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
