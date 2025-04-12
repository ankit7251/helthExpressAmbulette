import React, { useEffect, useState } from "react";
import {
    FaHospitalSymbol,
    FaUserMd,
    FaStethoscope,
    FaWheelchair,
    FaAmbulance,
} from "react-icons/fa";
import ambulatteService from "../../assets/Home/ambulanceService.jpeg"
import ambulatteService2 from "../../assets/Home/ambulanceService2.jpeg"
import ambulatteService3 from "../../assets/Home/ambulanceService3.jpeg"
import MedicalTransportation1 from "../../assets/Home/PrivateMedicalTransportation.jpg"
import MedicalTransportation2 from "../../assets/Home/PrivateMedicalTransportation2.jpg"
import MedicalTransportation3 from "../../assets/Home/PrivateMedicalTransportation3.jpg"
import TwoMenAssistStairs from "../../assets/Home/TwoMenAssistStairs.jpg"
import TwoMenAssistStairs2 from "../../assets/Home/TwoMenAssistStairs.jpeg"
import TwoMenAssistStairs3 from "../../assets/Home/TwoMenAssistOverStairs.jpg"
import MedicaidAmbuletteService from "../../assets/Home/MedicaidAmbuletteService.jpg"
import MedicaidAmbuletteService2 from "../../assets/Home/MedicaidAmbuletteService2.jpg"
import MedicaidAmbuletteService3 from "../../assets/Home/MedicaidAmbuletteService3.webp"
import WheelchairHandicappedTransportation from "../../assets/Home/WheelchairHandicappedTransportation.jpeg"
import WheelchairHandicappedTransportation2 from "../../assets/Home/WheelchairHandicappedTransportation2.webp"
import WheelchairHandicappedTransportation3 from "../../assets/Home/WheelchairHandicappedTransportation3.jpg"

import { useSelector } from "react-redux";

const servicesData = [
    {
        title: "Ambulette Services",
        icon: <FaAmbulance className="text-[#2E3192] text-xl mr-2" />,
        description: `Ambulette Service near me
Are you looking for a service that can take your patients or family members safely and carefully to the doctor? You can try using our Ambulette services for this job. We are the Health Express Ambulette  All City  Transportation Ambulette Company, and we want to help people who need to get around.


Visits to the doctor: People who are older or have physical disabilities often don’t have family or friends who can help them, especially when they need to go to the doctor’s office. We have state-of-the-art vans with hydraulic lifts that make it easy for people in wheelchairs to get to clinics for doctor appointments.

Transportation to the clinic: Have you ever had to move a patient, family member, or friend to a different hospital for better care and facilities? It’s so hard to figure out how to get there without having to pay for another ambulance. They can’t take a private cab or taxi because they aren’t made for wheelchairs, and taking an ambulance isn’t an option because it’s only used in emergencies.

Cities we serve:

Brooklyn 
Staten Island
Queens
Manhattan
Bronx
Nassau County 


Our Ambulette Services are suitable for
We offer a lot more than just rides to and from the hospital and doctor’s offices. One of our strongest suits is our commitment to the passenger’s security and convenience.

The following patients are good candidates for our Wheelchair Handicapped Transportation Services:

Cancer Patients
Elderly
Parkinson's Disease
Alzheimer
Spine or Back Injuries
Special Needs Patients
Rehabilitation Patients
Extremely Weak Patients`,
        images: [
            ambulatteService,
            ambulatteService2,
            ambulatteService3
        ],
    },
    {
        title: "Private Medical Transportation",
        icon: <FaUserMd className="text-[#2E3192] text-xl mr-2" />,
        description: `Private Medical Transportation
Health Express Ambulette Inc.  provides reliable and compassionate private medical transportation for individuals who require special assistance. Our non-emergency transportation services cater to patients who need a comfortable ride to medical appointments, therapy sessions, dialysis treatments, and hospital discharges.

Why Choose Us:
• Professional and trained drivers
• Clean and sanitized vehicles
• On-time service and courteous support
• Flexible scheduling options

This service is ideal for:
• Post-surgical patients
• Dialysis patients
• Patients requiring regular treatment
• Family members seeking private, safe transport for loved ones

Serving areas: Staten Island, Brooklyn, and more.
Let us handle the transportation so you can focus on care.`,
        images: [
            MedicalTransportation1,
            MedicalTransportation2,
            MedicalTransportation3,
        ],
    },
    {
        title: "Two Men Assist Over Stairs",
        icon: <FaStethoscope className="text-[#2E3192] text-xl mr-2" />,
        description: `Two Men Assist Over Stairs
Health Express Ambulette Inc.  offers a specialized Two Men Assist Over Stairs service for patients who have limited mobility and live in buildings without elevators. Our trained staff ensures a safe and smooth stair navigation process using proper equipment and techniques.

We assist in:
• Stairs-only access buildings
• Difficult stair layouts
• Entry and exit from residences

Ideal for:
• Elderly patients
• Bariatric patients
• Physically disabled patients
• Post-surgery individuals

We prioritize safety, dignity, and comfort in every step of the transfer process.`,
        images: [
            TwoMenAssistStairs,
            TwoMenAssistStairs2,
            TwoMenAssistStairs3
        ],
    },
    {
        title: "Medicaid Ambulette Service",
        icon: <FaHospitalSymbol className="text-[#2E3192] text-xl mr-2" />,
        description: `Medicaid Ambulette Service
We are an approved Medicaid transportation provider. Our ambulette services for Medicaid beneficiaries are designed to be safe, reliable, and on-time for every appointment.

We assist clients with:
• Medicaid medical appointments
• Dialysis visits
• Hospital admissions and discharges

Why trust Health Express Ambulette Inc. :
• State-approved vehicles
• Knowledgeable drivers trained in patient handling
• Seamless coordination with Medicaid facilities

We ensure accessible and affordable transportation for all Medicaid-covered trips in Staten Island, Brooklyn, and neighboring areas.`,
        images: [
            MedicaidAmbuletteService,
            MedicaidAmbuletteService2,
            MedicaidAmbuletteService3
        ],
    },
    {
        title: "Wheelchair Handicapped Transportation",
        icon: <FaWheelchair className="text-[#2E3192] text-xl mr-2" />,
        description: `Wheelchair Handicapped Transportation
Our wheelchair handicapped transportation ensures comfort, care, and dignity for individuals using wheelchairs. Our vehicles are equipped with ramps and lifts, and our team is trained in secure boarding and deboarding.

We provide:
• Safe, stress-free trips
• Assistance from door to doctor
• Friendly and respectful support

Best suited for:
• Permanent wheelchair users
• Temporary mobility-impaired patients
• Rehab attendees

Available across Staten Island, Brooklyn, and beyond.`,
        images: [
            WheelchairHandicappedTransportation,
            WheelchairHandicappedTransportation2,
            WheelchairHandicappedTransportation3,
        ],
    },
];

const ServiceHero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const index = useSelector((state) => state.index.index);

    useEffect(() => {
        if (index && !isNaN(parseInt(index))) {
            setActiveIndex(parseInt(index));
        }
    }, [index]);

    useEffect(() => {
        setSelectedImageIndex(0);
    }, [activeIndex]);

    const { title, description, images } = servicesData[activeIndex];

    return (
        <section className="py-20 px-4 md:px-20 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
                {/* Left Buttons */}
                <div className="lg:w-1/4 flex flex-col gap-4">
                    {servicesData.map((service, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setActiveIndex(idx);
                                localStorage.setItem("serviceIndex", idx);
                            }}
                            className={`flex items-center px-6 py-4 rounded-xl font-semibold text-lg transition border border-gray-300 hover:bg-[#2E3192] hover:text-white text-left ${idx === activeIndex
                                ? "bg-[#2E3192] text-white"
                                : "bg-gray-100 text-[#132870]"
                                }`}
                        >
                            {service.icon}
                            {service.title}
                        </button>
                    ))}
                </div>

                {/* Right Content */}
                <div className="lg:w-3/4 space-y-8">
                    {/* Large Main Image */}
                    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-md">
                        <img
                            src={images[selectedImageIndex]}
                            alt="Main"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Thumbnail Images */}
                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {images.map((img, i) => (
                            <div
                                key={i}
                                onClick={() => setSelectedImageIndex(i)}
                                className={`min-w-[90px] h-20 cursor-pointer rounded-xl overflow-hidden shadow-md border-2 ${selectedImageIndex === i
                                    ? "border-[#2E3192]"
                                    : "border-transparent"
                                    }`}
                            >
                                <img
                                    src={img}
                                    alt={`Thumb ${i}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Title & Description */}
                    <h2 className="text-3xl md:text-4xl font-bold text-[#132870]">
                        {title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
