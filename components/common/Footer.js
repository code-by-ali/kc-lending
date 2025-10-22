import React from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";
import KCLogo from "@/public/assets/kc-lending-logo.svg";
import CommonImage from "./CommonImage";
import SocialFBIcon from "@/public/assets/footer-social-fb-icon.svg";
import SocialTwitterIcon from "@/public/assets/footer-social-twitter-icon.svg";
import SocialLinkedinIcon from "@/public/assets/footer-social-linkedin-icon.svg";
import SocialInstaIcon from "@/public/assets/footer-social-insta-icon.svg";

const Footer = () => {
  const exploreLinks = [
    { name: "About", href: "#" },
    { name: "Our Service", href: "#" },
    { name: "Latest News", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Testimonial", href: "#" },
    { name: "Loan Calculator", href: "#" },
  ];

  const latestNews = [
    {
      date: "December 31, 2020",
      title: "For bar auto you will get 90% loan amount",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=200&h=200&fit=crop",
    },
    {
      date: "December 31, 2020",
      title: "How to get education loan for overseas",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=200&h=200&fit=crop",
    },
  ];

  const socialLinks = [
    {
      icon: (
        <CommonImage
          src={SocialFBIcon.src || SocialFBIcon}
          className="w-4 h-4"
        />
      ),
      href: "#",
      color: "bg-[#F3E063]",
    },
    {
      icon: (
        <CommonImage
          src={SocialTwitterIcon.src || SocialTwitterIcon}
          className="w-4 h-4"
        />
      ),
      href: "#",
      color: "bg-[#F3E063]",
    },
    {
      icon: (
        <CommonImage
          src={SocialLinkedinIcon.src || SocialLinkedinIcon}
          className="w-4 h-4"
        />
      ),
      href: "#",
      color: "bg-[#F3E063]",
    },
    {
      icon: (
        <CommonImage
          src={SocialInstaIcon.src || SocialInstaIcon}
          className="w-4 h-4"
        />
      ),
      href: "#",
      color: "bg-[#F3E063]",
    },
  ];

  return (
    <footer className="gradient-bg text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="inline-flex mb-2 items-center gap-2 backdrop-blur-[5px] bg-white/10 px-4 py-2 rounded-lg cursor-pointer">
              <CommonImage
                src={KCLogo.src || KCLogo}
                alt="KC Lending Logo"
                width={28}
                height={28}
              />
              <span className="font-semibold">KC LENDING</span>
            </div>

            <p className="text-white text-sm md:text-base leading-relaxed mb-6">
              Welcome to pylon loand company we are provide loan as very
              reasonably interest and you can provide document etur labore.
            </p>
            <div className="flex items-center gap-3 rounded-lg py-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#1751A8]" />
              </div>
              <div>
                <p className="text-xs font-medium text-[#B0C2D7]">
                  CALL ANYTIME
                </p>
                <p className="text-lg md:text-xl font-semibold">
                  44 666 888 0000
                </p>
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-white text-sm md:text-base group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest News */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6">Latest News</h3>
            <div className="space-y-8">
              {latestNews.map((news, index) => (
                <div key={index} className="flex gap-3">
                  <CommonImage
                    src={news.image.src || news.image}
                    alt={news.title}
                    className="w-16 h-16 rounded-sm object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="text-xs text-white mb-1">{news.date}</p>
                    <h4 className="text-base md:text-lg text-white leading-tight cursor-pointer">
                      {news.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="backdrop-blur-[5px] bg-white/10 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="mailto:needhelp@company.com"
                    className="text-white text-sm"
                  >
                    needhelp@company.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white text-sm">
                    Mon - Sat 8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white text-sm">
                    80 Brooklyn Golden
                    <br />
                    Street, New York, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary text-sm md:text-base">
              © Copyright 2025 by KC Lending
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`${social.color} w-12 h-12 rounded-full flex items-center justify-center text-primary`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
