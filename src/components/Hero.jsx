import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <main id="hero">
      <div
        className="relative w-full h-100 sm:h-125 md:h-150 lg:h-175 xl:h-187.5 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('1.png')" }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/30 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center px-6 sm:px-12 md:px-16 lg:px-24 pt-10 sm:pt-14 md:pt-16">
          <div className="flex flex-col gap-4 sm:gap-5 text-white font-poppins max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
            <h1
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Transforming Houses into
              <br />
              Comfortable Homes
            </h1>
            <p
              className="text-sm sm:text-base md:text-md text-gray-300 font-medium tracking-wider"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              High-quality, affordable, and Stylish furniture and appliances
            </p>
            <button
              className="bg-[#E07B39] hover:bg-[#fa741b] hover:cursor-pointer hover:translate-x-3 transition-transform duration-300 ease-out font-bold text-sm sm:text-base py-3 sm:py-4 px-8 sm:px-12 md:px-14 rounded-lg w-fit"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Shop the Collection
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
