import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const GetInTouch = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  const cardData = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-[#2E3192] group-hover:text-white" />,
      title: "Location",
      content: "155 Water Street, Brooklyn NY 11201",
    },
    {
      icon: <FaPhoneAlt className="text-3xl text-[#2E3192] group-hover:text-white" />,
      title: "Phone Number",
      content: "+917-514-3080",
    },
    {
      icon: <FaClock className="text-3xl text-[#2E3192] group-hover:text-white" />,
      title: "Availability",
      content: "24/7",
    },
    {
      icon: <FaEnvelope className="text-3xl text-[#2E3192] group-hover:text-white" />,
      title: "Email",
      content: "info@healthexpressambulette.com",
    },
  ];
  return (
    <section className="py-20 px-4 md:px-20 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-4xl md:text-5xl font-bold text-center text-[#132870] mb-14"
          data-aos="fade-up"
        >
          Get in Touch
        </h1>

        <p
          className="text-center text-lg text-gray-700 max-w-4xl mx-auto mb-14"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in lorem sed risus convallis porta.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cardData.map((item, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
              className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 hover:bg-gradient-to-br from-[#2E3192] to-[#00AEEF] hover:text-white max-w-full"
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold group-hover:text-white">{item.title}</h3>
              </div>
              <p className="text-gray-700 group-hover:text-white leading-relaxed break-words">
                {item.content}
              </p>
            </div>
          ))}
        </div>


        {/* Contact Form */}
        <div
          className="bg-white p-8 md:p-12 rounded-2xl shadow-lg max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[#132870] mb-8 text-center">
            Need Transportation? Drop us a Line
          </h2>

          <form className="grid gap-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full p-5 text-gray-800 placeholder-gray-500 text-base font-medium rounded-xl border border-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2E3192] focus:border-[#2E3192] transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full p-5 text-gray-800 placeholder-gray-500 text-base font-medium rounded-xl border border-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2E3192] focus:border-[#2E3192] transition"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full p-5 text-gray-800 placeholder-gray-500 text-base font-medium rounded-xl border border-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2E3192] focus:border-[#2E3192] transition"
            />
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="w-full p-5 text-gray-800 placeholder-gray-500 text-base font-medium rounded-xl border border-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2E3192] focus:border-[#2E3192] transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-[#2E3192] to-[#00AEEF] text-white py-4 rounded-xl font-bold hover:opacity-90 transition text-lg"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
