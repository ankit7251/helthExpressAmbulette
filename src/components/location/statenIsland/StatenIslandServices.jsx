import React from "react";
import { FaWheelchair, FaUserMd, FaMedkit, FaPeopleCarry } from "react-icons/fa";

const StatenIslandServices = () => {
    return (
        <section className="bg-[#f9f9f9] py-20 px-4 md:px-20">
            <div className="max-w-7xl mx-auto space-y-14">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#132870] mb-4 tracking-tight">
                        Ambulette Service Staten Island
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        Health Express Ambulette Inc.  services all counties of Staten Island, New York. We specialize in wheelchair handicap medical transportation & handle all non-emergency medical needs in Staten Island and beyond.
                    </p>
                </div>
                {/* Service Cards */}
                <div className="grid md:grid-cols-3 gap-10">
                    {/* Card Component */}
                    {[
                        {
                            icon: <FaPeopleCarry size={24} />,
                            title: "Two Men Assist",
                            desc: "We provide two men assistance to help patients go up or down stairs if there is no elevator access in their building. All necessary equipment included.",
                        },
                        {
                            icon: <FaUserMd size={24} />,
                            title: "Private Medical Transport",
                            desc: "Affordable and luxury non-emergency transportation for all private clients. We ensure timely, comfortable trips across Staten Island.",
                        },
                        {
                            icon: <FaMedkit size={24} />,
                            title: "Medicaid Transportation",
                            desc: "Health Express Ambulette Inc.  offers medical transportation to appointments covered by Medicaid. Safe and dependable for Medicaid beneficiaries.",
                        },
                    ].map((service, i) => (
                        <div
                            key={i}
                            className="group relative bg-white rounded-2xl p-6 shadow-md transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-transparent hover:bg-gradient-to-br hover:from-[#f0f4ff] hover:to-[#e8ebfc]"
                        >
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#2E3192] to-[#3841a3] text-white mb-6 shadow-lg transform group-hover:scale-105 transition">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-[#132870] mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.desc}
                            </p>

                            {/* Gradient Border Bottom */}
                            <span className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#2E3192] to-[#3841a3] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-bl-xl rounded-br-xl"></span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatenIslandServices;
