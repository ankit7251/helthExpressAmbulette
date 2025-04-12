import React from 'react';
import bgImage from "../../assets/Home/rescue-service-4975223_1920.jpg";

const HomeAsq = () => {
  const faqData = [
    {
      question: "Difference between Ambulance & Ambulette?",
      answer:
        "Ambulance is for emergencies while ambulette is for non-emergency medical transportation."
    },
    {
      question: "Is Ambulette covered by Medicaid insurance?",
      answer:
        "Yes, Medicaid will have to approve though, for those that are qualified for transportation assistance."
    },
    {
      question: "How to start Ambulette service?",
      answer:
        "The process of getting a Non-emergency medical transportation ambulette service from Expert Ambulette Services:\n\n1) Call us now or schedule a callback\n\n2) Schedule a pickup for transportation\n\n3) Driver will call you 15 minutes prior to your pickup.\n\nContact us now for the most comfortable and reliable ambulette transportation service."
    }
  ];

  return (
    <div
      className="w-full bg-fixed bg-cover bg-center md:px-20 px-4 py-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better readability */}
      <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6 md:p-10">
        <h1 className="text-[#132870] text-center font-bold text-[2.3rem] md:text-[2.8rem] mb-10" data-aos="fade-up">
          Frequently Asked Questions
        </h1>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((item, index) => (
            <details
              key={index}
              className="group bg-white shadow-md rounded-xl p-4 md:p-6 border-l-4 border-[#132870] transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <summary className="cursor-pointer list-none flex justify-between items-center text-[#132870] font-semibold text-[1.1rem] md:text-[1.3rem]">
                {item.question}
                <span className="ml-2 transition-transform duration-300 group-open:rotate-180">▼</span>
              </summary>
              <p className="text-[#444] mt-3 text-[0.95rem] md:text-[1.05rem] leading-relaxed whitespace-pre-line">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAsq;
