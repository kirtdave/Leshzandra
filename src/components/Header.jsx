import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="sticky top-0 z-50 bg-[#FDF6EC]">
      <div className="w-full flex justify-between items-center px-6 sm:px-10 md:px-16 xl:px-24 py-4 shadow-md">
        {/* Left - Logo */}
        <div data-aos="fade-right">
          <h1 className="text-[#2E1B0E] text-xl sm:text-2xl md:text-3xl xl:text-4xl tracking-normal font-montserrat font-medium whitespace-nowrap">
            Leszhandra Arhjane
          </h1>
        </div>

        {/* Desktop Nav - xl and above */}
        <div className="hidden xl:flex items-center gap-6 2xl:gap-8 text-base 2xl:text-lg font-inter text-[#2E1B0E]">
          <a
            className="Headernav opacity-95 transition-all duration-300 ease-in-out hover:text-[#5C3D2E]"
            href="#hero"
            onClick={(e) => handleScroll(e, "hero")}
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            Home
          </a>
          <a
            className="Headernav opacity-95 transition-all duration-300 ease-in-out hover:text-[#5C3D2E]"
            href="#story"
            onClick={(e) => handleScroll(e, "story")}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            About us
          </a>
          <a
            className="Headernav opacity-95 transition-all duration-300 ease-in-out hover:text-[#5C3D2E]"
            href="#showroom"
            onClick={(e) => handleScroll(e, "showroom")}
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Showroom
          </a>
          <a
            className="Headernav opacity-95 transition-all duration-300 ease-in-out hover:text-[#5C3D2E]"
            href="#services"
            onClick={(e) => handleScroll(e, "services")}
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Services
          </a>
          <a
            className="Headernav opacity-95 transition-all duration-300 ease-in-out hover:text-[#5C3D2E]"
            href="#visit"
            onClick={(e) => handleScroll(e, "visit")}
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            Contact Us
          </a>
          <a
            className="direction-element bg-[#2E1B0E] text-white py-2 px-6 2xl:px-8 rounded-md opacity-95 transition-all duration-300 ease-in-out whitespace-nowrap"
            href="#visit"
            onClick={(e) => handleScroll(e, "visit")}
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            Get Directions
          </a>
        </div>

        {/* Hamburger - below xl */}
        <div className="flex xl:hidden items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#2E1B0E] focus:outline-none p-1"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Dropdown */}
      {menuOpen && (
        <div className="xl:hidden absolute right-6 sm:right-10 md:right-16 mt-1 w-60 bg-white rounded-md shadow-xl font-inter text-[#2E1B0E] z-50 overflow-hidden">
          <a
            className="Headernav block px-6 py-3 text-base border-b border-gray-100 hover:bg-gray-50 transition-all duration-300"
            href="#hero"
            onClick={(e) => {
              handleScroll(e, "hero");
              setMenuOpen(false);
            }}
          >
            Home
          </a>
          <a
            className="Headernav block px-6 py-3 text-base border-b border-gray-100 hover:bg-gray-50 transition-all duration-300"
            href="#story"
            onClick={(e) => {
              handleScroll(e, "story");
              setMenuOpen(false);
            }}
          >
            Our Story
          </a>
          <a
            className="Headernav block px-6 py-3 text-base border-b border-gray-100 hover:bg-gray-50 transition-all duration-300"
            href="#showroom"
            onClick={(e) => {
              handleScroll(e, "showroom");
              setMenuOpen(false);
            }}
          >
            Showroom
          </a>
          <a
            className="Headernav block px-6 py-3 text-base border-b border-gray-100 hover:bg-gray-50 transition-all duration-300"
            href="#services"
            onClick={(e) => {
              handleScroll(e, "services");
              setMenuOpen(false);
            }}
          >
            Services
          </a>
          <a
            className="Headernav block px-6 py-3 text-base border-b border-gray-100 hover:bg-gray-50 transition-all duration-300"
            href="#visit"
            onClick={(e) => {
              handleScroll(e, "visit");
              setMenuOpen(false);
            }}
          >
            Visit Us
          </a>
          <div className="px-6 py-4">
            <a
              className="direction-element block bg-[#2E1B0E] text-white text-center py-2 px-4 rounded-md transition-all duration-300 text-base"
              href="#visit"
              onClick={(e) => {
                handleScroll(e, "visit");
                setMenuOpen(false);
              }}
            >
              Get Directions
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
