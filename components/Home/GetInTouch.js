import { MessageSquareMore, PhoneCall } from "lucide-react";
import React from "react";

const GetInTouch = () => {
  return (
    <section className="py-16 px-10 bg-white">
      <div className="flex flex-col gap-10 items-center justify-center">
        <p className="text-primary text-center font-semibold text-xl md:text-2xl lg:text-3xl">
          Get in Touch
        </p>
        <p className="text-description text-center font-normal text-lg md:text-xl lg:text-2xl">
          Whether you're buying a home or are ready to refinance, our experts
          are here to help.
        </p>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <button className="gradient-bg text-white rounded-xl p-6 w-70 flex justify-center items-center gap-4 text-base md:text-lg lg:text-xl font-semibold tracking-[-0.48px]">
            <PhoneCall />
            <span>Call us now</span>
          </button>
          <button className="gradient-bg text-white rounded-xl p-6 w-70 flex justify-center items-center gap-4 text-base md:text-lg lg:text-xl font-semibold tracking-[-0.48px]">
            <MessageSquareMore />
            <span>Book a consultation</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
