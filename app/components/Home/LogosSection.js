"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Logo1 from "@/public/assets/home-slider-logo-1.svg";
import Logo2 from "@/public/assets/home-slider-logo-2.svg";
import Logo3 from "@/public/assets/home-slider-logo-3.svg";
import Logo4 from "@/public/assets/home-slider-logo-4.svg";
import Logo5 from "@/public/assets/home-slider-logo-5.svg";
import CommonImage from "../common/CommonImage";

const LogosSection = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous movement
    speed: 3000, // Slower speed for smoother movement
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    cssEase: "linear",
    variableWidth: false,
    centerMode: false,
    swipeToSlide: true,
    pauseOnHover: false, // Prevent pausing on hover
    pauseOnFocus: false, // Prevent pausing on focus
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 3000,
          autoplaySpeed: 0,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 3000,
          autoplaySpeed: 0,
        },
      },
    ],
  };

  const logos = [
    { src: Logo1, alt: "Logo1" },
    { src: Logo2, alt: "Logo2" },
    { src: Logo3, alt: "Logo3" },
    { src: Logo4, alt: "Logo4" },
    { src: Logo5, alt: "Logo5" },

    { src: Logo1, alt: "Logo1" },
    { src: Logo2, alt: "Logo2" },
    { src: Logo3, alt: "Logo3" },
    { src: Logo4, alt: "Logo4" },
    { src: Logo5, alt: "Logo5" },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Slider {...settings}>
          {logos.map((logo, idx) => (
            <div key={idx} className="flex justify-center items-center">
              <CommonImage
                src={logo.src.src || logo.src}
                alt={logo.alt}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LogosSection;
