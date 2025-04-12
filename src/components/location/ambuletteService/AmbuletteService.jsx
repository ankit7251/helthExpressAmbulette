import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import BrooklynServices from './BrooklynServices'
import HomeSchedule from '../../home/HomeSchedule'
import BrooklynSpecialServices from './BrooklynSpecialServices'
import AmbuletteBrooklynOverview from './AmbuletteBrooklynOverview'
import HomeAsq from '../../home/HomeAsq'
import ServiceForm from '../../service/ServiceForm'
import HomeLocationMap from "../../../components/home/HomeLocationMap"
import { Link, useNavigate } from 'react-router'


const AmbuletteService = () => {
    const navigate = useNavigate()
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <>
            <div className="relative w-full h-[100vh] bg-black">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
                    style={{
                        backgroundImage:
                            "url('https://cdn.pixabay.com/photo/2016/11/07/05/13/map-1804891_640.jpg')",
                    }}
                ></div>
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-16 text-white">
                    <div className="max-w-4xl text-center space-y-6" data-aos="fade-up">
                        <h1
                            className="font-extrabold leading-tight"
                            style={{
                                fontSize: '6vh',
                            }}
                        >
                            <span className="hidden md:inline" style={{ fontSize: '4.5vw' }}>
                                Ambulette Service Brooklyn NY
                            </span>
                            <span className="md:hidden">Ambulette Service Brooklyn NY</span>
                        </h1>

                        <h2
                            className="font-medium"
                            style={{
                                fontSize: '3.5vh',
                            }}
                        >
                            <span className="hidden md:inline" style={{ fontSize: '2vw' }}>
                                Health Express Ambulette Inc.  Service in Brooklyn New York
                            </span>
                            <span className="md:hidden">
                                Health Express Ambulette Inc.  Service in Brooklyn New York
                            </span>
                        </h2>

                        <p
                            className="text-gray-200"
                            style={{
                                fontSize: '2.3vh',
                            }}
                        >
                            <span className="hidden md:inline" style={{ fontSize: '1.2vw' }}>
                                Our fleet is always ready to transport our valued customers to their daily appointments. We provide a wheelchair if needed or send two men to carry over stairs. Our Ambulette Service in Brooklyn New York is the best Transportation New York has to offer.
                            </span>
                            <span className="md:hidden">
                                Our fleet is always ready to transport our valued customers to their daily appointments. We provide a wheelchair if needed or send two men to carry over stairs. Our Ambulette Service in Brooklyn New York is the best Transportation New York has to offer.
                            </span>
                        </p>

                        <button
                            onClick={() => navigate("/schedule")}
                            className="mt-4 px-6 py-3 bg-gradient-to-r from-[#3E52AD] to-blue-600 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                            SCHEDULE NOW
                        </button>
                    </div>
                </div>
            </div>

            <BrooklynServices />
            <HomeSchedule />
            <BrooklynSpecialServices />
            <AmbuletteBrooklynOverview />
            <HomeAsq />
            <ServiceForm />
            <HomeLocationMap />
        </>
    )
}

export default AmbuletteService
