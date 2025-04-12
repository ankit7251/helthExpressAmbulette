import React, { useEffect } from 'react';
import { LuBus, LuHeartCrack } from 'react-icons/lu';
import ambulanceImage from "../../assets/Home/ambulanceService.jpeg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeTransportation = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    return (
        <>
            {/* Main Heading */}

            {/* Content Section */}
            <div className='md:flex items-center mt-8 md:mt-12 justify-between md:pb-10 mb-4 md:px-20 px-4 md:gap-8'>
                {/* Image Section */}
                <div className='md:w-[50%] w-full h-auto' data-aos="fade-up">
                    <img
                        src={ambulanceImage}
                        alt="Ambulance"
                        className='w-full h-full rounded-xl object-cover'
                    />
                </div>

                {/* Details Section */}
                <div className='md:w-[50%] w-full h-auto mt-8 md:mt-0' data-aos="fade-up" data-aos-delay="100">

                    {/* Card 1 */}
                    <div className='flex flex-col shadow-lg p-5 rounded-md justify-between md:mt-6 mt-3 gap-5 group' data-aos="fade-up" data-aos-delay="200">
                        <div className='md:h-[5vw] bg-[#558DCA] w-[7vh] h-[7vh] md:w-[5vw] flex items-center rounded-full justify-center md:text-[2vw] text-[2.4vh] text-white group-hover:[transform:rotateY(360deg)] transition-all duration-500'>
                            <LuHeartCrack />
                        </div>
                        <div className='w-[85%]'>
                            <h2 className='text-[2vh] md:text-[1.6vw] font-[700] text-[#132870]'>Specialized Support Service</h2>
                            <p className='md:text-[1.3vw] mt-2 text-[1.7vh] text-[#2E4583]'>
                                We’ve been offering private luxury wheelchair medical transportation ambulette services since 2009 — ensuring professionalism, comfort, and care.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='flex justify-between flex-col shadow-lg p-5 rounded-md md:mt-8 mt-4 gap-5 group' data-aos="fade-up" data-aos-delay="300">
                        <div className='md:h-[5vw] bg-[#223A66] md:w-[5vw] w-[7vh] h-[7vh] flex items-center rounded-full justify-center md:text-[2vw] text-[2.4vh] text-white group-hover:[transform:rotateY(360deg)] transition-all duration-500'>
                            <LuBus />
                        </div>
                        <div className='w-[85%]'>
                            <h2 className='text-[2vh] md:text-[1.6vw] font-[700] text-[#132870]'>State of Art Features</h2>
                            <p className='md:text-[1.3vw] mt-2 text-[1.7vh] text-[#2E4583]'>
                                Our fleet is fully equipped with high top roofs, wheelchair lifts, special suspension, front and rear A/C & heating systems, and secure wheelchair locking mechanisms.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default HomeTransportation;
