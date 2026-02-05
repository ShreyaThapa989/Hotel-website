import Slider from "react-slick";

import React from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner20 from "../assets/banner20.jpg";
import banner4 from "../assets/banner4.jpg";
import banner21 from "../assets/banner21.jpg";
export default function BannerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  const banners = [
    { id: 1, image: banner1 },
    { id: 2, image: banner2},
    { id: 3, image: banner20 },
    { id: 4, image: banner4 },
    { id: 5, image: banner21 },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-6">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="h-[400px]">
            <img
              src={banner.image}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
