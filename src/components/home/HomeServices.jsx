import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img from "../../assets/Home/image.png";

// Icons
import { FaUserMd } from 'react-icons/fa';
import { MdLocalHospital } from 'react-icons/md';
import { GiStairs } from 'react-icons/gi';

const HomeServices = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    const cardData = [
        {
            title: "Private Medical Transportation",
            description: "Expert Ambulette Services specializes in luxury private ambulette transportation services.",
            color: "#0D1D5B",
            icon: <FaUserMd />,
        },
        {
            title: "Medicaid Ambulette Transportation",
            description: "Medicaid advantageous program that supports elderly & disabled patients to attend their doctor’s appointments.",
            color: "#E62E2D",
            icon: <MdLocalHospital />,
        },
        {
            title: "Two Men Assist Over Stairs",
            description: "2 Men safely carry you over steps if you live on 2nd or 3rd floor building that has no elevator.",
            color: "#91B956",
            icon: <GiStairs />,
        }
    ];

    return (
        <div className='md:px-20 px-4 md:py-14 py-8 relative overflow-hidden bg-white'>
            <p
                className='text-[1.8vh] md:text-[1.3vw] text-[#142B5B]'
                data-aos="fade-up"
            >
                Ambulette Services that you can depend on
            </p>

            <h1
                className='md:text-[3.4vw] text-[3.8vh] font-[700] leading-tight text-[#142B5B] mt-2'
                data-aos="fade-up"
                data-aos-delay="100"
            >
                We take pride in our medical transportation <br className='md:block hidden' /> Ambulette services
            </h1>

            <img
                src={img}
                alt="decor"
                className='w-[20%] object-contain absolute hidden md:block right-[-10%] md:top-[20%] opacity-10 pointer-events-none'
            />

            {/* Cards */}
            <div className='grid md:grid-cols-3 grid-cols-1 gap-7 mt-6 md:mt-14'>
                {
                    cardData.map((item, i) => (
                        <div
                            className='w-full h-auto p-6 md:p-8 rounded-2xl shadow-xl bg-white border relative overflow-hidden group transition-all duration-500'
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={100 * (i + 1)}
                        >
                            {/* Colored Box with Icon */}
                            <div
                                className='md:h-[5vw] h-[6vh] w-[6vh] md:w-[5vw] rounded-xl flex items-center justify-center text-white text-[2.2vh] md:text-[2vw]'
                                style={{ backgroundColor: item.color }}
                            >
                                {item.icon}
                            </div>

                            <h1 className='md:text-[1.5vw] text-[2.2vh] font-bold md:mt-8 mt-4 text-[#0D1D5B] group-hover:text-white transition-all'>
                                {item.title}
                            </h1>

                            <p className='mt-4 md:mt-6 group-hover:text-white md:text-[1.1vw] text-[1.7vh] text-[#0D1D5B]'>
                                {item.description}
                            </p>

                            <div
                                className="w-full h-full group-hover:top-0 duration-500 transition-all absolute top-[99%] left-0 z-[-1] rounded-2xl"
                                style={{ backgroundColor: item.color }}
                            ></div>
                        </div>
                    ))
                }
            </div>

            {/* Extra Section */}
            <div className='mt-16 text-center' data-aos="fade-up" data-aos-delay="400">
                <h2 className='text-[2.5vh] md:text-[1.8vw] font-bold text-[#0D1D5B] mb-3'>
                    Health Express Ambulette Inc.  transportation Fleet
                </h2>
                <p className='text-[1.7vh] md:text-[1.2vw] text-gray-700'>
                    Providing reliable, safe, and comfortable rides for patients in need of transportation.
                </p>
            </div>
        </div>
    );
};

export default HomeServices;
