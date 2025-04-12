import React, { useEffect, useState } from 'react'
import image from "../../assets/Home/rescue-3735206_1920.jpg"
import { LuBus } from 'react-icons/lu'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdArrowDropDown } from "react-icons/md";
import AOS from 'aos'
import 'aos/dist/aos.css'

const HomeSchedule = () => {
    const [formData, setFormData] = useState({
        service: '',
        phone: ''
    });

    useEffect(() => {
        AOS.init({ duration: 800, once: false });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div
            className="relative w-full py-20 px-4 md:px-0 flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            data-aos="fade-zoom-in"
            data-aos-delay="100"
        >
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            <div
                className="relative z-10 md:w-[35%] w-full bg-white/30 backdrop-blur-lg p-6 md:p-10 rounded-xl shadow-lg text-[#132870]"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <div className="flex items-center gap-4 mb-6" data-aos="zoom-in" data-aos-delay="300">
                    <div className="text-[2.8rem] text-[#2E3192]">
                        <LuBus />
                    </div>
                    <div>
                        <h1 className="text-[1.3rem] md:text-[1.8rem] font-semibold leading-snug text-[#2E3192]">
                            Schedule Your Appointment
                            <br />
                            <span className="text-[#132870] font-bold">Online Now</span>
                        </h1>
                    </div>
                </div>

                <form className="space-y-6">
                    {/* Service Select */}
                    <div className="relative" data-aos="fade-up" data-aos-delay="400">
                        <label className="block text-white mb-2 font-medium">Select from the available transportation services</label>
                        <div className="relative">
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full appearance-none bg-white text-[#132870] px-4 py-3 rounded-lg shadow-md focus:outline-none font-semibold"
                            >
                                <option value="">Choose a service</option>
                                <option value="Private Medical Transportation">Livery</option>
                                <option value="Medicaid Ambulette Transportation">Ambulette</option>
                                <option value="Stair Assistance">Wheelchair</option>
                                <option value="Stair Assistance">2 Man assist</option>
                            </select>
                            <MdArrowDropDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl text-[#132870]" />
                        </div>
                    </div>

                    {/* Phone Input */}
                    <div className="relative" data-aos="fade-up" data-aos-delay="500">
                        <label className="block text-white mb-2 font-medium">Provide your contact number for coordination</label>
                        <div className="flex items-center bg-white px-4 py-3 rounded-lg shadow-md gap-3">
                            <FaPhoneAlt className="text-[#2B5A8D] text-xl" />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                className="w-full text-[#132870] font-semibold focus:outline-none placeholder:text-[#aaa]"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div data-aos="fade-up" data-aos-delay="600">
                        <button
                            type="submit"
                            className="w-full bg-[#132870] hover:bg-[#0f1e4d] text-white font-semibold py-3 rounded-lg transition duration-300"
                        >
                            Book An Appointment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HomeSchedule;
