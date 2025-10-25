"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AboutLogo1 from "@/public/assets/about-logo-section-1.svg";
import AboutLogo2 from "@/public/assets/about-logo-section-2.svg";
import AboutLogo3 from "@/public/assets/about-logo-section-3.svg";
import AboutLogo4 from "@/public/assets/about-logo-section-4.svg";
import CommonImage from "../common/CommonImage";

const AboutLogoSection = () => {
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
    { src: AboutLogo1, alt: "Logo1" },
    { src: AboutLogo2, alt: "Logo2" },
    { src: AboutLogo3, alt: "Logo3" },
    { src: AboutLogo4, alt: "Logo4" },

    { src: AboutLogo1, alt: "Logo1" },
    { src: AboutLogo2, alt: "Logo2" },
    { src: AboutLogo3, alt: "Logo3" },
    { src: AboutLogo4, alt: "Logo4" },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="flex items-center justify-center mb-10">
        <p className="text-lg md:text-xl text-primary font-medium">
          Trusted by nearly 5000+ paying customers
        </p>
      </div>
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

export default AboutLogoSection;
