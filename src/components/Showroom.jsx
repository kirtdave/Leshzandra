import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Showroom() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const cards = [
    {
      title: "Living Space Comfort",
      sub: "Sofas, Coffee Tables, TV units",
      img: "livroom.jpg",
    },
    {
      title: "Electronics Necessities",
      sub: "Rice-Cooker, Heater, Washing Machine",
      img: "ss.jpg",
    },
    {
      title: "Restful Bedrooms",
      sub: "Bedframes, Premium Mattresses, Wardrobes",
      img: "bedrooom.jpg",
    },
    {
      title: "Culinary Appliances",
      sub: "Refrigerators, ovens, modern stoves",
      img: "appliance.jpg",
    },
    { title: "Dining", sub: "Dining Tables, Plates, Mugs", img: "ining.jpg" },
  ];

  return (
    <main id="showroom">
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 text-center py-12 md:py-16 lg:py-20 flex flex-col gap-6 md:gap-8">
        {/* Header */}
        <div className="flex flex-col gap-3" data-aos="fade-up">
          <h1 className="text-[#2E1B0E] font-bold text-2xl sm:text-3xl lg:text-4xl font-montserrat">
            Our Digital Showroom
          </h1>
          <p className="text-[#2E1B0E]/85 font-inter text-base md:text-lg">
            Browse our curated collections of premium furniture and appliances
          </p>
        </div>

        {/* Row 1 — stacks on mobile, 3 cols on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 pt-4 md:pt-6">
          {cards.slice(0, 3).map((card, i) => (
            <div
              key={card.title}
              className="card-element hover:cursor-pointer relative h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-2xl overflow-hidden bg-cover bg-center bg-gray-300"
              style={{
                backgroundImage: card.img ? `url(${card.img})` : undefined,
              }}
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-5 text-white text-left">
                <p className="font-bold text-base md:text-lg font-poppins">
                  {card.title}
                </p>
                <p className="text-xs md:text-sm text-white/80 font-inter">
                  {card.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 — stacks on mobile, wide+narrow on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10">
          <div
            className="card-element hover:cursor-pointer relative sm:col-span-1 lg:col-span-2 h-56 sm:h-64 md:h-72 lg:h-80 xl:h-120 rounded-2xl overflow-hidden bg-gray-300 bg-cover bg-center"
            style={{
              backgroundImage: cards[3].img
                ? `url(${cards[3].img})`
                : undefined,
            }}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-5 text-white text-left">
              <p className="font-bold text-base md:text-lg font-poppins">
                {cards[3].title}
              </p>
              <p className="text-xs md:text-sm text-white/80 font-inter">
                {cards[3].sub}
              </p>
            </div>
          </div>

          <div
            className="card-element hover:cursor-pointer relative sm:col-span-1 h-56 sm:h-64 md:h-72 lg:h-80 xl:h-120 rounded-2xl overflow-hidden bg-cover bg-center bg-gray-300"
            style={{
              backgroundImage: cards[4].img
                ? `url(${cards[4].img})`
                : undefined,
            }}
            data-aos="fade-left"
            data-aos-delay="250"
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-5 text-white text-left">
              <p className="font-bold text-base md:text-lg font-poppins">
                {cards[4].title}
              </p>
              <p className="text-xs md:text-sm text-white/80 font-inter">
                {cards[4].sub}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          className="visit-element w-full bg-[#E07B39] hover:cursor-pointer hover:bg-[#fa741b] transition-colors text-white font-black text-base md:text-lg py-5 md:py-6 lg:py-8 rounded-xl font-poppins"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Visit our store to see our full catalog
        </button>
      </div>
    </main>
  );
}
