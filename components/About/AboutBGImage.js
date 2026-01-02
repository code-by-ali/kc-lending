import React from "react";
import CommonImage from "../common/CommonImage";
import AboutBG from "@/public/assets/about-bg-image.svg";

const AboutBGImage = () => {
  return (
    <div>
      <CommonImage src={AboutBG.src || AboutBG} className="object-contain w-full"/>
    </div>
  );
};

export default AboutBGImage;
