import React, { useState } from "react";

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <section className="py-20 px-4 md:px-20 bg-white">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#2E3192] to-[#1B1F7A] p-10 rounded-3xl shadow-xl text-white">
        <div className="mb-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-2">Schedule your ride with Health Express Ambulette Inc.  Transportation</h3>
          <p className="text-lg max-w-2xl mx-auto">
            We guarantee you that our staff and company’s service will give the best transportation. Either you choose our service for yourself, your parents, or any family member; you will surely be pleased by our support system.
          </p>
        </div>
        <form className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Pick-up Location</label>
            <input name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} type="text" placeholder="Enter pick-up location" className="p-3 rounded-xl text-gray-900" />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Your Name</label>
            <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Enter your name" className="p-3 rounded-xl text-gray-900" />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Phone Number</label>
            <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Enter phone number" className="p-3 rounded-xl text-gray-900" />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Email Address</label>
            <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Enter email address" className="p-3 rounded-xl text-gray-900" />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Appointment Date</label>
            <input name="date" value={formData.date} onChange={handleChange} type="date" className="p-3 rounded-xl text-gray-900" />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Appointment Time</label>
            <input name="time" value={formData.time} onChange={handleChange} type="time" className="p-3 rounded-xl text-gray-900" />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="mb-2 font-medium">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Type your essential message here..." className="p-3 w-full rounded-xl text-gray-900"></textarea>
          </div>
          <div className="col-span-1 md:col-span-2">
            <button type="submit" className="w-full bg-white text-[#2E3192] font-bold py-4 rounded-xl text-lg transition hover:bg-gray-100 shadow-md">Schedule Appointment</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ServiceForm;
