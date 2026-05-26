import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Story from "../components/Story";
import Showroom from "../components/Showroom";
import Services from "../components/Services";
import Visitus from "../components/Visit";
import Footer from "../components/Footer";

export default function Landingpage() {
  return (
    <div>
      {/* upper part */}
      <div className="bg-[#E07B39] w-full min-h-10 sm:min-h-12 md:h-14 flex justify-center items-center font-bold text-xs sm:text-sm md:text-md text-white px-4 py-2 text-center">
        <h1>Visit our premier showroom in Gingoog City today.</h1>
      </div>

      <Header />
      <Hero />
      <Story />
      <Showroom />
      <Services />
      <Visitus />
      <Footer />
    </div>
  );
}
