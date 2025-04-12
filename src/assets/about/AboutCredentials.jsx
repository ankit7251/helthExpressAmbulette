import React from 'react';
import { ShieldCheck, Hospital, FileBadge2, HeartPulse, Medal } from 'lucide-react';

const credentials = [
    {
        icon: <ShieldCheck className="h-[4vh] md:h-[2.2vw] w-[4vh] md:w-[2.2vw] text-white" />,
        title: "Licensed by US Department of Transportation",
    },
    {
        icon: <Hospital className="h-[4vh] md:h-[2.2vw] w-[4vh] md:w-[2.2vw] text-white" />,
        title: "Licensed by NY State Department of Transportation",
    },
    {
        icon: <HeartPulse className="h-[4vh] md:h-[2.2vw] w-[4vh] md:w-[2.2vw] text-white" />,
        title: "Registered as a national health care provider",
    },
    {
        icon: <Medal className="h-[4vh] md:h-[2.2vw] w-[4vh] md:w-[2.2vw] text-white" />,
        title: "Registered as a Medicaid provider with NY State",
    },
];

const AboutCredentials = () => {
    return (
        <section className="w-full bg-[#f1f5f9] py-20 px-4 md:px-24">
            <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
                <h2 className="text-[3.5vh] md:text-[2.5vw] font-bold text-[#0D1D5B] mb-4">
                    Health Express Ambulette Inc.  Credentials
                </h2>
                <p className="text-[2vh] md:text-[1.2vw] text-gray-600 mb-12 max-w-3xl mx-auto">
                    Our managers and employees are expected to adhere to high standards of business and personal integrity as a representation of our business practices.
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                    {credentials.map((cred, index) => (
                        <div
                            key={index}
                            className="bg-[#0D1D5B] text-white p-6 rounded-3xl shadow-xl flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="bg-[#3E52AD] p-4 rounded-full mb-4">
                                {cred.icon}
                            </div>
                            <p className="text-[1.8vh] md:text-[1.05vw] font-medium">
                                {cred.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutCredentials;
