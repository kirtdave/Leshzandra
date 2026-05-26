import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Story() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <main id="story">
      {/* Our Story Section */}
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 py-12 md:py-16 lg:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-0">
        {/* Left - Image */}
        <div
          className="w-full md:w-[50%] flex items-center justify-center md:justify-end md:pr-12 lg:pr-20"
          data-aos="fade-right"
        >
          <img
            className="w-[80%] sm:w-[60%] md:w-[75%] lg:w-[55%] aspect-4/5 rounded-xl shadow-2xl object-start"
            src="ceo pics.jpg"
            alt=""
          />
        </div>

        {/* Right - Text */}
        <div className="w-full md:w-[50%] flex flex-col gap-6 md:gap-8 justify-center md:pl-2">
          <h1
            className="font-montserrat text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black text-[#2E1B0E] text-center md:text-left"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            Welcome to our Showroom
          </h1>
          <p
            className="font-inter text-[#2E1B0E]/85 leading-7 md:leading-8 text-base md:text-lg font-normal text-center md:text-left md:max-w-[72%]"
            data-aos="fade-left"
            data-aos-delay="250"
          >
            At Leszhandra Arhjane, we believe your home should be your
            sanctuary. I started this business to bring stylish, durable, and
            affordable pieces directly to our community. We invite you to
            experience our collections in person.
          </p>
          <h6
            className="font-inter font-bold text-base md:text-lg md:pt-8 text-center md:text-left"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            - Chary Frejoles, Business Owner
          </h6>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="text-white w-full bg-[#2E1B0E] px-6 sm:px-12 md:px-16 lg:px-24 py-12 md:py-16 flex flex-col md:flex-row justify-center items-start md:items-center gap-10 md:gap-0">
        {/* Mission */}
        <div
          className="flex flex-col gap-4 md:gap-5 md:pl-12 w-full md:w-[50%]"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-center md:text-left">
            Our Mission
          </h1>
          <p className="font-inter opacity-85 leading-7 tracking-wider text-sm sm:text-base md:text-md text-center md:text-left md:max-w-[70%]">
            To provide high-quality, affordable, and stylish furniture and
            appliances that improve the comfort and lifestyle of every home,
            while delivering excellent customer service and building lasting
            relationships with our customers.
          </p>
        </div>

        {/* Divider on mobile */}
        <div className="block md:hidden w-full h-px bg-white/20" />

        {/* Vision */}
        <div
          className="flex flex-col gap-4 md:gap-5 md:pl-12 w-full md:w-[50%]"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-center md:text-left">
            Our Vision
          </h1>
          <p className="font-inter opacity-85 leading-7 tracking-wider text-sm sm:text-base md:text-md text-center md:text-left md:max-w-[70%]">
            To become a trusted and leading furniture and appliance store in the
            community, known for innovation, reliability, and customer
            satisfaction, offering products that make every house a comfortable
            home.
          </p>
        </div>
      </div>
    </main>
  );
}
