import React from 'react';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <section className="w-full relative bg-[#f9fbff] px-4 md:px-20 py-24 overflow-hidden">
      {/* Gradient Glow Background */}
      <div className="absolute w-[320px] h-[320px] bg-pink-300/30 rounded-full blur-3xl top-0 -left-20 animate-blob"></div>
      <div className="absolute w-[300px] h-[300px] bg-cyan-300/30 rounded-full blur-2xl bottom-10 -right-10 animate-blob animation-delay-2000"></div>
      <div className="absolute w-[200px] h-[200px] bg-purple-200/20 rounded-full blur-xl top-40 left-[40%] animate-blob animation-delay-4000"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-1 items-center text-center relative z-10">
        {/* Header Text */}
        <p className="text-[#0D1D5B] text-sm md:text-base font-semibold uppercase tracking-widest mb-4">
          About Us
        </p>

        <h2 className="text-[3.5vh] md:text-[2.3vw] font-extrabold text-[#0D1D5B] leading-snug mb-6">
          Since 2009 Health Express Ambulette has specialized in luxury ambulette services.
        </h2>

        <p className="text-gray-700 mt-2 text-[2vh] md:text-[1.15vw] leading-relaxed max-w-3xl mx-auto">
          Our 10+ vehicles are customized with wheelchair lifts, high top roofs and doors, special suspension, front and rear air conditioning, wheelchair locks.
          <br /><br />
          Heath Express Ambulette specializes in multinlingual drivers to care for our patients that live in the five boroughs of New York City. We speak English, Spanish and Russian.
        </p>

        <div className="mt-10">
          <Link
            to="/services"
            className="bg-gradient-to-r from-[#3E52AD] to-[#2f3d80] text-white px-10 py-3 text-[1.9vh] md:text-[1vw] rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
