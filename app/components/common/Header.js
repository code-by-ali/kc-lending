"use client";
import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import CommonImage from "./CommonImage";
import KCLogo from "@/public/assets/kc-lending-logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#184FA1] text-white">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 backdrop-blur-[5px] bg-white/10 px-6 py-2 rounded-lg text-base font-medium">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
        </nav>

        {/* Contact + CTA (always visible, but shrink on mobile) */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <Phone size={18} />
            <span className="text-sm md:text-base">(595) 555-0123</span>
          </div>
          <button className="bg-[#F3E063] text-[#1A202C] font-medium px-3 py-2 md:px-4 md:py-2 rounded-xl text-sm md:text-base">
            Get Started
          </button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="flex flex-col gap-4 px-6 py-4 bg-[#184FA1] md:hidden text-base font-medium">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
