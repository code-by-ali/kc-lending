"use client";
import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import ClientLogo1 from "@/public/assets/home-testimonial-client-logo-1.svg";
import ClientLogo2 from "@/public/assets/home-testimonial-client-logo-2.svg";
import CommonImage from "../common/CommonImage";

const TestimonialsSection = () => {
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  const testimonials = [
    {
      name: "Reynolds Anthony",
      date: "May 14",
      handle: "@TrustPilot",
      text: "For years, I've trusted Finto Insurance. Their attentive team consistently finds me the perfect coverage. I'm confident in their protection of assets.",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Eleanor Emily",
      date: "May 14",
      handle: "@TrustPilot",
      text: "Finto Insurance makes everything smooth and simple. I love their transparent process and reliable support.",
      avatar: "https://i.pravatar.cc/150?img=45",
    },
    {
      name: "Tomasz Adem",
      date: "May 14",
      handle: "@TrustPilot",
      text: "Fantastic experience! I got customized solutions that perfectly fit my business needs.",
      avatar: "https://i.pravatar.cc/150?img=33",
    },
  ];

  useEffect(() => {
    const left = leftColRef.current;
    const right = rightColRef.current;
    let leftY = 0;
    let rightY = 0;

    const scroll = () => {
      if (left) {
        leftY += 0.3;
        if (leftY >= left.scrollHeight / 2) leftY = 0;
        left.style.transform = `translateY(-${leftY}px)`;
      }

      if (right) {
        rightY -= 0.3;
        if (rightY <= -right.scrollHeight / 2) rightY = 0;
        right.style.transform = `translateY(${rightY}px)`;
      }

      requestAnimationFrame(scroll);
    };

    const anim = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(anim);
  }, []);

  const Card = ({ item }) => (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md mb-6 transition-transform hover:scale-[1.02] duration-300">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="text-[#1A202C] font-semibold text-sm sm:text-base">
            {item.name}
          </h4>
          <p className="text-gray-500 text-xs sm:text-sm">
            {item.date} {item.handle}
          </p>
        </div>
      </div>
      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
        "{item.text}"
      </p>
    </div>
  );

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-10 overflow-hidden gradient-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Right side content - Appears first on mobile */}
          <div className="lg:order-2 lg:w-2/5 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 tracking-[-0.5%] leading-tight">
              Rated 4.9 Out of 5 by Over 1,200 Happy Customers
            </h2>
            <p className="text-white/90 text-sm sm:text-base md:text-lg mb-8 lg:mb-10">
              From first-time buyers to seasoned investors, our clients trust us
              because we deliver what we promise: better rates, faster
              approvals, and genuine support every step of the way.
            </p>

            {/* Rating cards - Side by side on all screens */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Clutch Rating */}
              <div className="rounded-2xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
                <CommonImage
                  src={ClientLogo1.src || ClientLogo1}
                  height={50}
                  width={50}
                />
                <div className="mt-auto">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4 fill-[#7BDAF8] text-[#7BDAF8]"
                      />
                    ))}
                  </div>
                  <span className="text-white font-bold text-sm sm:text-base block mb-1">
                    5.0
                  </span>
                  <p className="text-white text-[10px] sm:text-xs font-medium uppercase">
                    26 REVIEWS
                  </p>
                </div>
              </div>

              {/* Trustpilot Rating */}
              <div className="rounded-2xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
                <CommonImage
                  src={ClientLogo2.src || ClientLogo2}
                  height={50}
                  width={50}
                />
                <div className="mt-auto">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4 fill-[#7BDAF8] text-[#7BDAF8]"
                      />
                    ))}
                  </div>
                  <span className="text-white font-bold text-sm sm:text-base block mb-1">
                    4.8
                  </span>
                  <p className="text-white text-[10px] sm:text-xs font-medium uppercase">
                    26 REVIEWS
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Left side - Scrolling testimonials - Single column on mobile, two columns on tablet+ */}
          <div className="lg:order-1 lg:w-3/5">
            <div className="relative h-[400px] sm:h-[480px] lg:h-[550px] overflow-hidden">
              <div className="flex gap-6">
                {/* First Column */}
                <div
                  ref={leftColRef}
                  className="flex flex-col space-y-6 flex-1"
                >
                  {[...testimonials, ...testimonials].map((item, i) => (
                    <Card key={`left-${i}`} item={item} />
                  ))}
                </div>

                {/* Second Column - Hidden on mobile */}
                <div
                  ref={rightColRef}
                  className="hidden sm:flex flex-col space-y-6 flex-1"
                >
                  {[...testimonials, ...testimonials].map((item, i) => (
                    <Card key={`right-${i}`} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
