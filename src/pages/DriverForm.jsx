import { useState } from "react";

export default function DriverForm() {
    // Main Form State (All Sections)
    const [formData, setFormData] = useState({
        // 1. Personal Information
        fullName: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        email: "",
        dob: "",
        ssn: "",
        licenseNumber: "",
        licenseState: "",
        licenseExpiry: "",
        cdlClass: "",
        endorsement: "",

        // 2. Employment History (3 Employers)
        employmentHistory: [
            { from: "", to: "", name: "", address: "", contact: "", title: "", responsibilities: "", reason: "" },
            { from: "", to: "", name: "", address: "", contact: "", title: "", responsibilities: "", reason: "" },
            { from: "", to: "", name: "", address: "", contact: "", title: "", responsibilities: "", reason: "" },
        ],

        // 3. Driving Experience
        vehicleTypes: "",
        yearsExperience: "",
        certifications: "",
        accident1Date: "",
        accident1Description: "",
        accident2Date: "",
        accident2Description: "",

        // 4. Education & Training
        highSchoolDiploma: "",
        certificationsTraining: "",
        defensiveDriving: "",
        defensiveDrivingDate: "",

        // 5. References (3 References)
        references: [
            { name: "", contact: "", relationship: "" },
            { name: "", contact: "", relationship: "" },
            { name: "", contact: "", relationship: "" },
        ],

        // 6. Legal Compliance
        backgroundCheckConsent: "",
        drivingRecord: "",
        drugTestConsent: "",
        medicalReport: "",
        annualReview: "",
        felonyConviction: "",
        felonyExplanation: "",

        // 7. 19-A Compliance
        physicalExamDate: "",
        visionTestDate: "",
        article19ACertification: "",
        preServiceTraining: "",
        roadTestDate: "",

        // 8. Additional Info
        availability: "",
        workWeekends: "",
        specialSkills: "",

        // 9. Emergency Contact
        emergencyContact: {
            name: "",
            relationship: "",
            phoneNumber: "",
        },
    });

    // Handle Input Changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle Nested Changes (Employment, References, etc.)
    const handleNestedChange = (section, index, field, value) => {
        setFormData((prev) => {
            const updated = { ...prev };
            updated[section][index][field] = value;
            return updated;
        });
    };

    // Handle Emergency Contact Change
    const handleEmergencyContactChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            emergencyContact: { ...prev.emergencyContact, [name]: value },
        }));
    };

    // Final Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Final Form Data:", formData);
        // API Call / Further Processing Here
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-[90vw] mx-auto px-3 md:px-[5vw] py-[4vh] space-y-[6vh] bg-gradient-to-br from-slate-100 to-slate-300 rounded-3xl shadow-2xl"
        >
            {/* ========== 1. Personal Information ========== */}
            <section className="bg-white rounded-3xl p-[4vw] shadow-xl border border-gray-300">
                <h2 className="text-xl md:text-[2vw] font-extrabold text-slate-800 mb-[3vh] border-b-2 border-slate-300 pb-[1.5vh]">
                    1. Personal Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[3vw] gap-y-[4vh]">
                    {[
                        { label: "Full Name", name: "fullName" },
                        { label: "Phone Number", name: "phoneNumber" },
                        { label: "Address", name: "address" },
                        { label: "City", name: "city" },
                        { label: "State", name: "state" },
                        { label: "ZIP Code", name: "zipCode" },
                        { label: "Email Address", name: "email", type: "email" },
                        { label: "Date of Birth", name: "dob", type: "date" },
                        { label: "Social Security Number", name: "ssn" },
                        { label: "Driver's License Number", name: "licenseNumber" },
                        { label: "State of Issue", name: "licenseState" },
                        { label: "Expiration Date", name: "licenseExpiry", type: "date" },
                        { label: "CDL Class", name: "cdlClass" },
                        { label: "Endorsement", name: "endorsement" },
                    ].map(({ label, name, type = "text" }) => (
                        <div className="flex flex-col" key={name}>
                            <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                                {label}
                            </label>
                            <input
                                type={type}
                                name={name}
                                required
                                value={formData[name] || ""}
                                onChange={handleChange}
                                className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* ========== 2. Employment History ========== */}
            <section className="bg-white rounded-3xl p-[4vw] shadow-xl border border-gray-300">
                <h2 className="text-xl md:text-[2vw] font-extrabold text-slate-800 mb-[3vh] border-b-2 border-slate-300 pb-[1.5vh]">
                    2. Employment History (Last 3 Employers)
                </h2>
                {formData.employmentHistory.map((employer, index) => (
                    <div key={index} className="mb-10">
                        <h3 className="text-lg font-bold text-blue-800 mb-4 bg-blue-100 px-4 py-2 rounded-full w-fit">
                            Employer #{index + 1}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                            {Object.entries(employer).map(([key]) => (
                                <div key={key} className="flex flex-col">
                                    <label className="text-sm font-semibold text-gray-700 mb-2 capitalize">
                                        {key.replace(/([A-Z])/g, " $1")}
                                    </label>
                                    <input
                                        type={key === "from" || key === "to" ? "date" : "text"}
                                        value={employer[key]}
                                        onChange={(e) =>
                                            handleNestedChange("employmentHistory", index, key, e.target.value)
                                        }
                                        className="p-3 text-sm rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* ========== 3. Driving Experience ========== */}
            <section className="bg-white rounded-3xl p-[4vw] shadow-xl border border-gray-300">
                <h2 className="text-xl md:text-[2vw] font-extrabold text-slate-800 mb-[3vh] border-b-2 border-slate-300 pb-[1.5vh]">
                    3. Driving Experience
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[3vw] gap-y-[3vh]">
                    <div className="flex flex-col">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Types of Vehicles Driven
                        </label>
                        <input
                            type="text"
                            name="vehicleTypes"
                            value={formData.vehicleTypes}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Years of Experience
                        </label>
                        <input
                            type="number"
                            name="yearsExperience"
                            value={formData.yearsExperience}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                    <div className="flex flex-col sm:col-span-2">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Special Certifications
                        </label>
                        <input
                            type="text"
                            name="certifications"
                            value={formData.certifications}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                </div>
            </section>

            {/* ========== 4. Education & Training ========== */}
            <section className="bg-white rounded-3xl p-[4vw] shadow-xl border border-gray-300">
                <h2 className="text-xl md:text-[2vw] font-extrabold text-slate-800 mb-[3vh] border-b-2 border-slate-300 pb-[1.5vh]">
                    4. Education & Training
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[3vw] gap-y-[3vh]">
                    <div className="flex flex-col">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            High School Diploma/GED
                        </label>
                        <select
                            name="highSchoolDiploma"
                            value={formData.highSchoolDiploma}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Relevant Training or Certifications
                        </label>
                        <input
                            type="text"
                            name="certificationsTraining"
                            value={formData.certificationsTraining}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Defensive Driving Courses Completed
                        </label>
                        <select
                            name="defensiveDriving"
                            value={formData.defensiveDriving}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            If yes, specify date
                        </label>
                        <input
                            type="date"
                            name="defensiveDrivingDate"
                            value={formData.defensiveDrivingDate}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                </div>
            </section>

            {/* ========== 5. References ========== */}
            <section className="bg-white rounded-3xl p-[4vw] shadow-xl border border-gray-300">
                <h2 className="text-xl md:text-[2vw] font-extrabold text-slate-800 mb-[3vh] border-b-2 border-slate-300 pb-[1.5vh]">
                    5. References (3 Professional References)
                </h2>
                {formData.references.map((reference, index) => (
                    <div key={index} className="mb-8">
                        <h3 className="text-lg font-bold text-blue-800 mb-4 bg-blue-100 px-4 py-2 rounded-full w-fit">
                            Reference #{index + 1}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-5">
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    value={reference.name}
                                    onChange={(e) =>
                                        handleNestedChange("references", index, "name", e.target.value)
                                    }
                                    className="p-3 text-sm rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-gray-700 mb-2">Contact</label>
                                <input
                                    type="text"
                                    value={reference.contact}
                                    onChange={(e) =>
                                        handleNestedChange("references", index, "contact", e.target.value)
                                    }
                                    className="p-3 text-sm rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-gray-700 mb-2">Relationship</label>
                                <input
                                    type="text"
                                    value={reference.relationship}
                                    onChange={(e) =>
                                        handleNestedChange("references", index, "relationship", e.target.value)
                                    }
                                    className="p-3 text-sm rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* ========== 6. Legal Compliance ========== */}
            <section className="bg-white rounded-3xl p-[4vw] shadow-xl border border-gray-300">
                <h2 className="text-xl md:text-[2vw] font-extrabold text-slate-800 mb-[3vh] border-b-2 border-slate-300 pb-[1.5vh]">
                    6. Legal & Compliance
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[3vw] gap-y-[3vh]">
                    <div className="flex flex-col">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Consent for Background Check
                        </label>
                        <select
                            name="backgroundCheckConsent"
                            value={formData.backgroundCheckConsent}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Driving Record (DMV Abstract)
                        </label>
                        <select
                            name="drivingRecord"
                            value={formData.drivingRecord}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        >
                            <option value="">Select</option>
                            <option value="Attached">Attached</option>
                            <option value="Not Attached">Not Attached</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Drug and Alcohol Testing Consent
                        </label>
                        <select
                            name="drugTestConsent"
                            value={formData.drugTestConsent}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Medical Examination Report (19-A)
                        </label>
                        <select
                            name="medicalReport"
                            value={formData.medicalReport}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        >
                            <option value="">Select</option>
                            <option value="Attached">Attached</option>
                            <option value="Not Attached">Not Attached</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Annual Review of Driving Record (19-A)
                        </label>
                        <select
                            name="annualReview"
                            value={formData.annualReview}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        >
                            <option value="">Select</option>
                            <option value="Attached">Attached</option>
                            <option value="Not Attached">Not Attached</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Felony Conviction?
                        </label>
                        <select
                            name="felonyConviction"
                            value={formData.felonyConviction}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="flex flex-col sm:col-span-2">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            If yes, explain
                        </label>
                        <input
                            type="text"
                            name="felonyExplanation"
                            value={formData.felonyExplanation}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                </div>
            </section>

            {/* ========== 7. 19-A Compliance ========== */}
            <section className="bg-white rounded-3xl p-[4vw] shadow-xl border border-gray-300">
                <h2 className="text-xl md:text-[2vw] font-extrabold text-slate-800 mb-[3vh] border-b-2 border-slate-300 pb-[1.5vh]">
                    7. 19-A Compliance Requirements
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[3vw] gap-y-[3vh]">
                    <div className="flex flex-col">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Physical Exam (19-A) - Date
                        </label>
                        <input
                            type="date"
                            name="physicalExamDate"
                            value={formData.physicalExamDate}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Vision Test (19-A) - Date
                        </label>
                        <input
                            type="date"
                            name="visionTestDate"
                            value={formData.visionTestDate}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Article 19-A Certification
                        </label>
                        <select
                            name="article19ACertification"
                            value={formData.article19ACertification}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Pre-Service Training (19-A)
                        </label>
                        <select
                            name="preServiceTraining"
                            value={formData.preServiceTraining}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        >
                            <option value="">Select</option>
                            <option value="Completed">Completed</option>
                            <option value="Not Completed">Not Completed</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Road Test (19-A) - Date
                        </label>
                        <input
                            type="date"
                            name="roadTestDate"
                            value={formData.roadTestDate}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                </div>
            </section>

            {/* ========== 8. Additional Information ========== */}
            <section className="bg-white rounded-3xl p-[4vw] shadow-xl border border-gray-300">
                <h2 className="text-xl md:text-[2vw] font-extrabold text-slate-800 mb-[3vh] border-b-2 border-slate-300 pb-[1.5vh]">
                    8. Additional Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[3vw] gap-y-[3vh]">
                    <div className="flex flex-col">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Availability
                        </label>
                        <input
                            type="text"
                            name="availability"
                            value={formData.availability}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Work Weekends/Holidays?
                        </label>
                        <select
                            name="workWeekends"
                            value={formData.workWeekends}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="flex flex-col sm:col-span-2">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Special Skills / Languages
                        </label>
                        <input
                            type="text"
                            name="specialSkills"
                            value={formData.specialSkills}
                            onChange={handleChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                </div>
            </section>

            {/* ========== 9. Emergency Contact ========== */}
            <section className="bg-white rounded-3xl p-[4vw] shadow-xl border border-gray-300">
                <h2 className="text-xl md:text-[2vw] font-extrabold text-slate-800 mb-[3vh] border-b-2 border-slate-300 pb-[1.5vh]">
                    9. Emergency Contact
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[3vw] gap-y-[3vh]">
                    <div className="flex flex-col">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.emergencyContact.name}
                            onChange={handleEmergencyContactChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Relationship
                        </label>
                        <input
                            type="text"
                            name="relationship"
                            value={formData.emergencyContact.relationship}
                            onChange={handleEmergencyContactChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                    <div className="flex flex-col sm:col-span-2">
                        <label className="text-sm md:text-[1vw] font-semibold text-gray-700 mb-[1vh]">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.emergencyContact.phoneNumber}
                            onChange={handleEmergencyContactChange}
                            className="p-3 text-sm md:text-[1vw] rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                </div>
            </section>

            {/* ========== FINAL SUBMIT BUTTON ========== */}
            <div className="text-center pt-[2vh]">
                <button
                    type="submit"
                    className="px-[5vw] py-[2.5vh] text-[1.6vh] md:text-[1vw] font-bold bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                >
                    Submit Full Application
                </button>
            </div>
        </form>
    );
}