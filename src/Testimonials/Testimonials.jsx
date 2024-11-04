import React from "react";
import Slider from "react-slick";
import Nobita from "./../assets/nobita.jpg";
import Shizuka from "./../assets/shizuka-photo_3.jpg";
import Suneo from "./../assets/536079c1068dbc83854a742fa1cb75d2.jpg";
import Chaien from "./../assets/Jaian02.webp";

const data = [
  {
    id: 1,
    name: "Nobita",
    text: "Món ăn này thật sự mang đến một trải nghiệm ẩm thực đáng nhớ. Hương vị tinh tế và đậm đà của từng nguyên liệu hòa quyện, tạo ra một sự cân bằng hoàn hảo. Đặc biệt, nước sốt có độ chua ngọt vừa phải, giúp làm nổi bật hương vị tự nhiên của món ăn. Tôi thực sự rất hài lòng với chất lượng cũng như cách chế biến công phu.",
    img: Nobita,
  },
  {
    id: 2,
    name: "Shizuka",
    text: "Tôi rất ấn tượng với cách bày trí đẹp mắt và sự tinh tế trong từng chi tiết. Món ăn không chỉ bắt mắt mà còn khiến tôi cảm nhận được sự tươi mới và nhẹ nhàng của từng nguyên liệu. Hương vị thanh mát, kết hợp hài hòa với nước sốt nhẹ nhàng, không quá gắt. Đây là lựa chọn tuyệt vời cho một bữa ăn thanh đạm nhưng vẫn đầy đủ dinh dưỡng.",
    img: Shizuka,
  },
  {
    id: 3,
    name: "Suneo",
    text: "Món ăn này thực sự là một trải nghiệm ẩm thực độc đáo. Vị ngon đậm đà, được kết hợp từ các loại gia vị đặc trưng và nguyên liệu chất lượng cao. Nước sốt đặc biệt thơm ngon, thấm đều vào từng miếng thịt, mang lại cảm giác khó quên. Đây là món ăn mà tôi chắc chắn sẽ quay lại để thưởng thức thêm nhiều lần nữa.",
    img: Suneo,
  },
  {
    id: 4,
    name: "Chaien",
    text: "Đây là món ăn tôi cực kỳ yêu thích! Từng miếng đều được chế biến kỹ lưỡng, không chỉ giữ được hương vị tự nhiên mà còn hòa quyện với nước sốt một cách hoàn hảo. Món ăn mang lại cảm giác thoải mái và dễ chịu, không hề quá nặng. Đây chính là món ăn mà tôi cảm thấy hài lòng nhất, từ hương vị đến cách bày trí đều rất tuyệt vời!",
    img: Chaien,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 2000,
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
    // <div className="py-10 mb-10">
    //   <div className="container">
    //     {/* Header section */}
    //     <div className="mb-10">
    //       <h1 className="text-center text-4xl font-bold font-cursive2">
    //         Our Testimonials
    //       </h1>
    //     </div>
    //     {/* Slider section */}
    //     <Slider {...settings}>
    //       {data.map((item) => (
    //         <div key={item.id} className="my-6">
    //           <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative ">
    //             <div className="mb-4 max-w-[400px]">
    //               <img
    //                 src={item.img}
    //                 alt=""
    //                 className="w-20 h-20 rounded-full"
    //               />
    //             </div>
    //             {/* Content section */}
    //             <div>
    //               <div>
    //                 <p>{item.text}</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </Slider>
    //   </div>
    // </div>
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive2"
          >
            Our Testimonials
          </h1>
        </div>
        {/* Slider section */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {data.map((item) => (
              <div key={item.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative h-[270px] sm:max-h-[350px]">
                  <div className="mb-4 max-w-[400px] flex-shrink-0 flex-grow-0">
                    <img
                      src={item.img}
                      alt=""
                      className="w-20 h-20 rounded-full "
                    />
                  </div>
                  {/* Content section */}
                  <div className="flex flex-col gap-4 ">
                    <div className="max-h-[200px] overflow-hidden  px-4 ">
                      <p className="line-clamp-3 text-[px] font-cursive">
                        {item.text}
                      </p>
                      <h1 className="text-xl text-black/80 font-semibold font-cursive2 mt-2 ">
                        {item.name}
                      </h1>
                    </div>
                  </div>
                  <div>
                    <p className="text-9xl text-black/20 font-cursive absolute top-0 right-0">
                      ,,
                    </p>
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

export default Testimonials;
