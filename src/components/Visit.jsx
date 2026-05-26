import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

export default function Visitus() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <main id="visit">
      <div className="w-full bg-[#F2E9DC] px-6 sm:px-12 md:px-16 lg:px-24 py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-10 md:gap-14 lg:gap-16">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8">
          <h1
            className="text-[#2E1B0E] font-bold text-3xl sm:text-4xl lg:text-5xl font-poppins leading-tight text-center lg:text-left"
            data-aos="fade-right"
          >
            We Are Ready to <br /> Welcome You.
          </h1>

          {/* Location */}
          <div
            className="flex flex-col gap-1"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#E07B39]" size={20} />
              <p className="text-[#E07B39] font-bold font-poppins text-lg md:text-xl">
                Location
              </p>
            </div>
            <p className="text-[#2E1B0E]/75 font-inter text-sm md:text-base ml-6">
              Libetario Building, Doña Garciana Street, Brgy 20, Gingoog City
            </p>
          </div>

          {/* Contact Number */}
          <div
            className="flex flex-col gap-1"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="flex items-center gap-2">
              <FaPhone className="text-[#E07B39]" size={20} />
              <p className="text-[#E07B39] font-bold font-poppins text-lg md:text-xl">
                Contact Number
              </p>
            </div>
            <p className="text-[#E07B39] font-bold text-2xl sm:text-3xl lg:text-4xl font-poppins ml-6">
              09565685382
            </p>
          </div>

          {/* Store Hours */}
          <div
            className="flex flex-col gap-1"
            data-aos="fade-right"
            data-aos-delay="450"
          >
            <div className="flex items-center gap-2">
              <FaClock className="text-[#E07B39]" size={20} />
              <p className="text-[#E07B39] font-bold font-poppins text-lg md:text-xl">
                Store Hours
              </p>
            </div>
            <p className="text-[#2E1B0E]/75 font-inter text-sm md:text-base ml-6">
              Monday - Saturday: 8:00 AM – 5:30 PM
            </p>
          </div>
        </div>

        {/* Right Side — Map */}
        <div
          className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-md"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <iframe
            title="Store Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.847!2d125.1118!3d8.8267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff4f0e3b1e3b1%3A0x1234567890abcdef!2sGingoog+City%2C+Misamis+Oriental%2C+Philippines!5e0!3m2!1sen!2sph!4v1234567890"
            width="100%"
            height="400"
            className="sm:h-112.5 md:h-125 lg:h-145 xl:h-155"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  );
}
