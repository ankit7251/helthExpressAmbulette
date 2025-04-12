import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaMapMarkerAlt } from 'react-icons/fa'

const locations = [
  'Williamsburg', 'Manhattan Beach', 'Bay Ridge', 'Greenpoint', 'Bushwick', 'Bedford Stuyvesant',
  'Brooklyn Heights', 'Red Hook', 'Park Slope', 'Crown Heights', 'Prospect Park', 'Brownsville',
  'East New York', 'East Flatbush', 'Sunset Park', 'Flatbush', 'Brighton Beach', 'Kensington',
  'Borough Park', 'Canarsie', 'Bergen Beach', 'Flatlands', 'Mill Basin', 'Marine Park',
  'Sheepshead Bay', 'Gerritsen Beach', 'Gravesend', 'Midwood', 'Bensonhurst', 'Bath Beach',
  'Dyker Heights', 'Ford Hamilton'
]

const AmbuletteBrooklynOverview = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className="w-full bg-white text-gray-800 py-20 px-6 md:px-16 space-y-20">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Text Section */}
        <div data-aos="fade-up" className="lg:w-2/3 space-y-6">
          <h1 className="text-[4.5vh] md:text-[3.2vw] font-extrabold text-blue-900 leading-tight">
            Brooklyn
          </h1>
          <p className="text-[2.1vh] md:text-[1.1vw] text-gray-700">
            Regular taxis are inaccessible to passengers in wheelchairs and cannot accommodate passengers with special needs. Using an unreliable and uncaring taxi service could cause you to be late for your next doctor’s appointment.
          </p>
          <p className="text-[2.1vh] md:text-[1.1vw] text-gray-700">
            Health Express Ambulette Inc.  service in Brooklyn offers prompt and pleasant transportation to hospitals, airports, and other locations throughout Brooklyn New York.
          </p>
          <p className="pt-4 text-[2.2vh] md:text-[1.1vw] text-gray-800 font-semibold">
            Looking for <span className="text-blue-600">"ambulette service near me"</span> in Brooklyn New York?
          </p>

          {/* Location List */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-6">
            {locations.map((loc, idx) => (
              <div key={idx} className="flex items-center text-gray-600 text-sm md:text-base">
                <FaMapMarkerAlt className="text-blue-600 mr-2" />
                {loc}
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div data-aos="fade-up" className="lg:w-1/3 w-full">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100">
            <iframe
              title="Brooklyn Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24122.83235644425!2d-74.0060154!3d40.6781784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ba328a96a07%3A0x5cb9ba8d99c9a995!2sBrooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1649816451170!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AmbuletteBrooklynOverview
