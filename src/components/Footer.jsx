import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <footer className="w-full bg-[#5C3D2E] px-6 sm:px-12 md:px-16 lg:px-24 py-12 md:py-16 flex flex-col gap-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 lg:gap-16">
        <div className="flex flex-col gap-4">
          <h2
            className="text-white font-bold text-2xl md:text-3xl font-montserrat"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Leszhandra Arhjane
          </h2>
          <p
            className="text-white/80 font-inter text-sm md:text-base leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Gingoog City's premiere destination for quality furniture and
            reliable appliances.
          </p>
          <p
            className="text-white/80 font-inter text-sm md:text-base leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Making homes more comfortable and stylish since day one.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2
            className="text-white font-bold text-2xl md:text-3xl font-montserrat"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Quick links
          </h2>
          <div className="flex flex-col gap-3">
            {["Home", "Our Story", "Showroom", "Services", "Visit Us"].map(
              (link) => (
                <a
                  key={link}
                  href=""
                  className="text-white/80 font-inter text-sm md:text-base hover:text-white transition-colors duration-200"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  {link}
                </a>
              ),
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <h2
            className="text-white font-bold text-2xl md:text-3xl font-montserrat"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            Contact Us
          </h2>
          <div className="flex flex-col gap-3">
            <p
              className="text-white/80 font-inter text-sm md:text-base leading-relaxed"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Libetario Building, <br />
              Doña Garciana Street <br />
              Brgy 20, Gingoog City
            </p>
            <p
              className="text-white/80 font-inter text-sm md:text-base"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              09565685382
            </p>
            <p
              className="text-white/80 font-inter text-sm md:text-base"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              Mon - Sat: 8:00 AM - 5:30 PM
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20" />

      <p className="text-white/50 font-inter text-sm text-center">
        © 2026 Leszhandra Arhjane Furniture & Appliance. All rights reserved.
      </p>
    </footer>
  );
}
