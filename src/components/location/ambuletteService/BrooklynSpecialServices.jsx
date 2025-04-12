import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router'

const BrooklynSpecialServices = () => {
    const navigate = useNavigate()
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    



    return (
        <div className="w-full bg-white text-gray-800 py-20 px-6 md:px-16 space-y-24">
            {/* Section 1: Senior Transportation */}
            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Text */}
                <div data-aos="fade-up" className="md:w-1/2 space-y-5">
                    <h2 className="text-[4vh] md:text-[2.8vw] font-bold text-blue-900">
                        Transportation for Seniors in Brooklyn New York
                    </h2>
                    <p className="text-gray-700 text-[2.2vh] md:text-[1.1vw]">
                        Ambulette drivers in Brooklyn do not merely pick up and drop off your elderly loved ones. We assist over stairs your loved ones in getting ready, transporting them, and providing return after the appointment.
                    </p>
                    <p className="text-gray-700 text-[2.2vh] md:text-[1.1vw]">
                        Depending on your requirements, we will provide Two Men assist over stairs, curbside or room-to-room service.
                    </p>
                    <button
                        onClick={() => navigate("/contact")}
                        className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                        FREE QUOTE
                    </button>
                </div>

                {/* Image */}
                <div data-aos="fade-up" className="md:w-1/2">
                    <img
                        src="https://bklyner.com/content/images/wp-content/uploads/2012/07/ambulette.jpg"
                        alt="Senior Transportation"
                        className="w-full h-auto rounded-2xl shadow-xl"
                    />
                </div>
            </div>

            {/* Section 2: Hospital Transportation */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-12 bg-gray-50 p-6 rounded-3xl shadow-inner">
                {/* Image */}
                <div data-aos="fade-up" className="md:w-1/2">
                    <img
                        src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/5793224005001/6ce4dfed-afd9-4007-ac70-ee855312630e/34cde204-7a43-43c0-bd72-344e07f52d00/640x360/match/image.jpg"
                        alt="Hospital Transportation"
                        className="w-full h-auto rounded-2xl shadow-xl"
                    />
                </div>

                {/* Text */}
                <div data-aos="fade-up" className="md:w-1/2 space-y-5">
                    <h2 className="text-[4vh] md:text-[2.8vw] font-bold text-blue-900">
                        Transportation To or From the Hospitals in Brooklyn
                    </h2>
                    <p className="text-gray-700 text-[2.2vh] md:text-[1.1vw]">
                        Ambulette in Brooklyn, we provide regular or wheelchair accessible transportation to or from any hospital in Brooklyn.
                    </p>
                    <p className="text-gray-700 text-[2.2vh] md:text-[1.1vw]">
                        We will provide regular or wheelchair accessible from the above list of Hospitals in Brooklyn. In addition, we can provide a wheelchair if you need one; our driver can wait until you are done with your appointment, or you can call when you’re ready to return.
                    </p>
                    <button 
                    onClick={() => navigate("/contact")}
                    className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                         FREE QUOTE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BrooklynSpecialServices
