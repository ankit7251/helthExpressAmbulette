import React from 'react';
import { MapPin } from 'lucide-react';

const locations = [
    "Greenpoint", "Williamsburg", "Bushwick", "Bedford Stuyvesant", "Brooklyn Heights", "Red Hook", "Manhattan Beach",
    "Bay Ridge", "Park Slope", "Prospect Park", "Crown Heights", "Brownsville", "East New York", "East Flatbush",
    "Sunset Park", "Flatbush", "Kensington", "Borough Park", "Canarsie", "Bergen Beach", "Flatlands", "Mill Basin",
    "Marine Park", "Brighton Beach", "Gerritsen Beach", "Sheepshead Bay", "Gravesend", "Midwood", "Bensonhurst",
    "Bath Beach", "Dyker Heights", "Ford Hamilton"
];

const BrooklynAmbuletteSection = () => {
    return (
        <section className="w-full bg-[#f9fbff] py-20 px-4 md:px-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                {/* Content */}
                <div data-aos="fade-up">
                    <h2 className="text-[#0D1D5B] text-[2.5rem] font-extrabold leading-tight mb-6">
                        Ambulette Transportation Service in Brooklyn
                    </h2>
                    <p className="text-gray-700 text-lg mb-6">
                        Health Express Ambulette Inc.  transportation Services Brooklyn since 1987. Providing Non-Emergency medical ambulette service
                        transportation to elderly & handicapped. Getting our clients to their daily doctor’s appointments safely,
                        comfortably & in a timely fashion is our mission.
                    </p>
                    <p className="text-gray-700 text-base mb-8">
                        We cover all zip codes in Brooklyn. If you're looking for
                        <strong className="text-[#3E52AD]"> “ambulette service near me”</strong>, call us now for pick-up or schedule a call-back.
                        It’s very likely that our vans already have daily routes in your area transporting neighbors like yourself.
                    </p>

                    <div className="grid grid-cols-2 gap-3 max-h-[320px] overflow-y-auto pr-2">
                        {locations.map((loc, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-gradient-to-r from-[#e6ecff] to-[#f6f9ff]"
                            >
                                <MapPin size={18} className="text-[#3E52AD]" />
                                <span className="text-sm font-medium text-gray-800">{loc}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <h4 className="text-[#3E52AD] font-bold text-lg mb-2">Queries we service:</h4>
                        <p className="text-sm text-gray-600">
                            Ambulette service brooklyn, ambulette service near me, ambulette service, Health Express Ambulette Inc. , ambulette services near me,
                            ambulette transportation, private ambulette service, private ambulance service brooklyn, ambulette service in brooklyn, ambulette
                        </p>
                    </div>
                </div>

                {/* Map */}
                <div className="w-full h-[400px] md:h-full rounded-3xl overflow-hidden shadow-lg border border-gray-300" data-aos="fade-up">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12075.90903831099!2d-73.9499977!3d40.6781784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a31613d60cf%3A0x3c10b0a7c37b0609!2sBrooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1615162951111!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default BrooklynAmbuletteSection;
