import React from 'react';
import StatenIslandServices from './StatenIslandServices';
import HomeSchedule from '../../home/HomeSchedule';
import StatenIslandAmbulette from './StatenIslandAmbulette';
import ServiceForm from '../../service/ServiceForm';
import { useNavigate } from 'react-router';


const StatenIsland = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="relative h-[60vh] w-full bg-black">
        {/* Background Image */}
        <img
          src="https://ambulancemed.com/wp-content/uploads/2021/08/Iveco-ambulance-delivery-.jpg"
          alt="Staten Island Transportation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Staten Island</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Ambulette Medical Transportation</h2>
          <p className="text-base md:text-lg mb-6 max-w-xl">
            Best non Emergency transportation for all counties of Staten Island NY.
          </p>
          <button
            onClick={() => navigate('/schedule')}
           className="bg-[#2E3192] hover:bg-[#1d2066] text-white font-semibold px-6 py-3 rounded-xl transition">
            BOOK NOW
          </button>
        </div>
      </div>
      < StatenIslandServices />
      <HomeSchedule />
      <StatenIslandAmbulette />
      <ServiceForm />

    </>
  );
};

export default StatenIsland;
