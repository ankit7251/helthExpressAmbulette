import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const BrooklynMapSection = () => {
    return (
        <div className="w-full bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] py-14 px-6 md:px-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-5"
                >
                    <h2 className="text-[#132870] text-2xl md:text-4xl font-bold leading-tight">
                        Ambulette Service Brooklyn
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        Serving all of Brooklyn with professional ambulette transportation for doctor visits, hospital discharges, and non-emergency medical travel. Our team ensures reliable, safe, and compassionate care every time.
                    </p>
                    <div className="flex items-center gap-2 text-[#132870] font-semibold">
                        <MapPin className="w-5 h-5" />
                        Brooklyn, New York
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#132870]"
                >
                    
                    <iframe
                        title="Ambulette Service Brooklyn"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.669274184156!2d-73.99038492488795!3d40.70328093815083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a33cf5650e5%3A0xe13bb1cfc2daaf59!2s155%20Water%20St%2C%20Brooklyn%2C%20NY%2011201%2C%20USA!5e0!3m2!1sen!2sin!4v1744182862531!5m2!1sen!2sin"
                        className="w-full h-[300px] md:h-[350px]"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </motion.div>
            </div>
        </div>
    );
};

export default BrooklynMapSection;
