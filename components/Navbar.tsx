"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { assets } from "../app/assets/assets";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`w-full h-[10vh] fixed z-50 left-0 right-0 md:px-20 px-5 md:py-10 py-3 top-0 flex justify-between items-center transition-all duration-300 ${
          scroll
            ? "bg-white/90 backdrop-blur-sm shadow-sm"
            : "bg-white shadow-md"
        }`}
      >
        {/* Logo */}
        <h1 className="font-bold cursor-pointer text-4xl text-gray-800 hover:text-gray-600 transition-all duration-300">
          <a href="#home">Kaif</a>
        </h1>

        {/* Desktop Navigation Links */}
        <ul
          className={`md:flex hidden gap-10 font-medium px-8 py-3 rounded-full transition-all duration-300 ${
            scroll
              ? "bg-transparent shadow-none"
              : "bg-white shadow-md shadow-slate-200"
          }`}
        >
          {["Home", "About", "Experience", "Services", "Projects"].map(
            (item, index) => (
              <li key={index}>
                <a
                  className="font-medium text-gray-800 hover:text-gray-600 hover:underline underline-offset-4 transition-all duration-300"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Connect Button and Mobile Menu Toggle */}
        <div className="flex gap-5 items-center">
          <div
            className={`md:flex hidden items-center gap-2 cursor-pointer px-6 py-2 rounded-full transition-all duration-300 ${
              scroll
                ? "bg-slate-200/50 hover:bg-slate-300/50"
                : "bg-slate-200 hover:bg-slate-300"
            }`}
          >
            <a href="#contact" className="text-sm text-gray-800">
              Connect
            </a>
            <Image
              src={assets.arrow_icon}
              alt="Arrow"
              className="w-2 h-2 transition-all duration-300"
            />
          </div>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Image
              src={assets.menu_black}
              alt="Menu"
              className="w-6 h-6 hover:opacity-80 transition-all duration-300"
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden h-[65vh] w-2/3 absolute right-0 top-0 bg-white/95 shadow-xl shadow-slate-200 px-8 py-10 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "transform scale-100 opacity-100"
              : "transform scale-0 opacity-0"
          }`}
        >
          <div className="flex justify-end relative">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-gray-200 rounded-full transition-all duration-300"
            >
              <Image
                src={assets.close_black}
                alt="Close"
                className="w-6 h-6 absolute top-0 right-0"
              />
            </button>
          </div>
          <ul className="flex flex-col items-center gap-8 mt-10">
            {[
              "Home",
              "About",
              "Experience",
              "Services",
              "Projects",
              "Contact",
            ].map((item, index) => (
              <li key={index}>
                <a
                  onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                  className="font-medium text-xl text-gray-800 hover:text-gray-600 hover:underline underline-offset-4 transition-all duration-300"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
