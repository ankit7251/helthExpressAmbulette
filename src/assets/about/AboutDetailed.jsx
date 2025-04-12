import React from 'react';

const AboutDetailed = () => {
    return (
        <section className="w-full bg-[#f8f9fc] py-16 px-4 md:px-20">
            <div
                data-aos="fade-up"
                className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-16 border-l-[10px] border-[#3E52AD]"
            >
                <p className="text-[#3E52AD] text-[1.6vh] md:text-[0.9vw] uppercase tracking-wider font-semibold mb-2">
                    More About Us
                </p>

                <h2 className="text-[3.5vh] md:text-[2.5vw] font-bold text-[#0D1D5B] mb-6 leading-tight">
                    Health Express Ambulette Inc.  Inc: Committed to Excellence and Ethics
                </h2>

                <p className="text-gray-700 text-[2.2vh] md:text-[1.15vw] leading-relaxed">
                    Health Express Ambulette Inc.  Inc will conduct its business honestly and ethically wherever operations are maintained.
                    <br /><br />
                    Our drivers must pass a rigorous 2-day training course in vehicle safety and passenger care and courtesy.
                    All our vehicles are equipped with GPS and are tracked by satellite to pinpoint their exact location.
                    We are always reliable and we put safety first. Health Express Ambulette Inc.  Inc has a perfect twenty-year safety record with no major accidents or personal injuries.
                    <br /><br />
                    We are compliant with the Health Insurance Portability and Accountability Act of 1996 (Public law 104-191) (“HIPPA”).
                    <br /><br />
                    We strive to improve the quality of our operations and will maintain a reputation for honesty, fairness, respect, responsibility, integrity, trust, and sound business judgment.
                </p>

                <div
                    className="mt-8 bg-[#0D1D5B] text-white rounded-2xl p-6 shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <h3 className="text-[2.8vh] md:text-[1.6vw] font-bold mb-3">
                        Our Mission
                    </h3>
                    <p className="text-[2.1vh] md:text-[1.1vw] leading-relaxed">
                        The mission of our company is: to work as a team to give our customers the best of service and the genuine courtesy they deserve,
                        thereby upholding the high standards upon which we have based our reputation.
                        We will continue to be a credit to our community and to be considerate drivers on our state’s roads.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutDetailed;
