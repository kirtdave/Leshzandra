import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTruck, FaWrench, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaTruck size={20} />,
    title: "Careful Delivery",
    description:
      "We ensure your new furniture and appliances arrive at your doorstep safely and securely.",
  },
  {
    icon: <FaWrench size={20} />,
    title: "Expert Setup",
    description:
      "Our team provide installation guidance for appliances and assembly for complex furniture pieces.",
  },
  {
    icon: <FaShieldAlt size={20} />,
    title: "After-Sales Support",
    description:
      "We stand by our products with dedicated support and reliable warranty assistance.",
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <main id="services" className="bg-[#F2E9DC]">
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 text-center py-12 md:py-16 lg:py-20 flex flex-col gap-8 md:gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3" data-aos="fade-up">
          <h1 className="text-[#2E1B0E] font-bold text-2xl sm:text-3xl lg:text-4xl font-poppins">
            Why Buy From Us
          </h1>
          <p className="text-[#2E1B0E]/70 font-inter text-base md:text-lg">
            Premium services that make your purchase worthwhile
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-14">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="bg-[#FDF6EC] rounded-2xl p-8 md:p-10 lg:p-12 text-left flex flex-col gap-4 md:gap-5 border border-[#e0d5c5] shadow-[inset_2px_4px_10px_rgba(0,0,0,0.07)]"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              {/* Icon */}
              <div className="w-11 h-11 md:w-12 md:h-12 bg-[#E07B39] rounded-full flex items-center justify-center text-white">
                {service.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h2 className="text-[#2E1B0E] font-bold text-lg md:text-xl font-poppins">
                  {service.title}
                </h2>
                <p className="text-[#2E1B0E]/70 font-inter text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
