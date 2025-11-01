"use client";
import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import CommonImage from "./CommonImage";
import KCLogo from "@/public/assets/kc-lending-logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#184FA1] text-white">
      {/* First Row: Logo, Nav (on lg+), Phone, Get Started */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2 backdrop-blur-[5px] bg-white/10 px-4 py-2 rounded-lg cursor-pointer">
          <CommonImage
            src={KCLogo.src || KCLogo}
            alt="KC Lending Logo"
            width={28}
            height={28}
          />
          <span className="font-semibold">KC LENDING</span>
        </div>

        {/* Desktop Navigation (laptop and above - shows in first row) */}
        <nav className="hidden lg:flex gap-6 backdrop-blur-[5px] bg-white/10 px-6 py-3 rounded-lg text-base font-medium">
          <a href="/" className="hover:text-[#F3E063] transition-colors">
            Home
          </a>
          <a href="/contact" className="hover:text-[#F3E063] transition-colors">
            Contact
          </a>
          <a href="/about" className="hover:text-[#F3E063] transition-colors">
            About
          </a>
          <a href="/loan-programs" className="hover:text-[#F3E063] transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-[#F3E063] transition-colors">
            Blog
          </a>
        </nav>

        {/* Right Side: Phone + CTA + Menu Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <Phone size={18} />
            <span className="text-sm md:text-base">(595) 555-0123</span>
          </div>
          <button className="hidden md:block bg-[#F3E063] text-[#1A202C] font-medium px-4 py-2 rounded-xl text-base">
            Get Started
          </button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Second Row: Tablet Navigation (centered, only shows on md to lg) */}
      <nav className="hidden md:flex lg:hidden max-w-7xl gap-6 backdrop-blur-[5px] bg-white/10 px-6 py-3 rounded-lg text-base font-medium justify-center mb-4 w-fit mx-auto">
        <a href="/" className="hover:text-[#F3E063] transition-colors">
          Home
        </a>
        <a href="/contact" className="hover:text-[#F3E063] transition-colors">
          Contact
        </a>
        <a href="/about" className="hover:text-[#F3E063] transition-colors">
          About
        </a>
        <a href="/loan-programs" className="hover:text-[#F3E063] transition-colors">
          Services
        </a>
        <a href="#" className="hover:text-[#F3E063] transition-colors">
          Blog
        </a>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="flex flex-col gap-4 px-6 py-4 bg-[#184FA1] md:hidden text-base font-medium">
          <a href="/" className="hover:text-[#F3E063] transition-colors">
            Home
          </a>
          <a href="/contact" className="hover:text-[#F3E063] transition-colors">
            Contact
          </a>
          <a href="/about" className="hover:text-[#F3E063] transition-colors">
            About
          </a>
          <a href="/loan-programs" className="hover:text-[#F3E063] transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-[#F3E063] transition-colors">
            Blog
          </a>
          <button className="bg-[#F3E063] text-[#1A202C] font-medium px-4 py-2 rounded-xl text-base mt-2 w-full">
            Get Started
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
