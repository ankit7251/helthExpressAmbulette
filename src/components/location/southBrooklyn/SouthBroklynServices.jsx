import React from "react";

const services = [
  {
    title: "Two Men Assist Ambulette Transportation",
    description:
      "2-4 men to assist over the stairs where there’s no wheelchair accessibility. If you live on the 2nd or 3rd floor without an elevator, our trained private ambulette services staff will assist you up or down the steps.",
  },
  {
    title: "Private Medical Transportation",
    description:
      "Health Express Ambulette Inc.  services Brooklyn is an affordable luxury private medical transportation service company. We accept Credit Card payments for those without Medicaid.",
  },
  {
    title: "Medicaid Medical Transportation",
    description:
      "Non-emergency Ambulette service transportation to appointments is covered by Medicaid insurance, if qualified.",
  },
];

const SouthBrooklynServices = () => {
  return (
    <section className="w-full bg-[#f9fbff] px-4 md:px-20 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-[3.4vh] md:text-[2.3vw] font-extrabold text-[#0D1D5B] leading-tight">
            Private Transportation Service Brooklyn
          </h2>
          <p className="text-gray-700 mt-4 text-[2vh] md:text-[1.15vw] leading-relaxed max-w-4xl mx-auto">
            Getting around becomes increasingly difficult as you age, especially in Brooklyn NY. Health Express Ambulette Inc.  service transportation provides on-time and pleasant transportation to your doctor, airport, or other destinations.
            <br /><br />
            Our fleet includes vans with Braun Hydraulic wheelchair lifts, extended roofs, AC/heating units, and RICON lifts. Our chauffeurs are CPR and defensive driving trained for safety and emergency response.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white border border-[#d1d5db] rounded-3xl p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#3E52AD] to-[#1d265f] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 rounded-3xl"></div>

              <div className="relative z-10">
                <h3 className="text-xl md:text-[1.1vw] font-bold text-[#0D1D5B] group-hover:text-white mb-3 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-700 group-hover:text-gray-200 text-[1.9vh] md:text-[0.95vw] leading-relaxed transition-all duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SouthBrooklynServices;
