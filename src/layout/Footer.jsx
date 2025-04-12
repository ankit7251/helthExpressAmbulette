import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiFacebookLogoBold } from "react-icons/pi";
import logo from "../assets/Logo.jpg";

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-20">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">

        {/* Logo Section */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img
              onClick={() => navigate('/')}
              src={logo}
              alt="Logo"
              className="w-20 h-20 object-contain rounded-full"
            />
          </div>
          <p className="text-sm text-gray-300">
            We’re Open 7 Days a Week.<br />
            Please Schedule Appointments 24 Hours Ahead.<br />
            Same Day Request? Call Us!
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm text-gray-400">
            <FaMapMarkerAlt className="text-blue-400" />
            155 Water Street, Brooklyn NY 11201
          </p>
          <div className="mt-4">
            <Link
              to="/facebook"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition"
            >
              <PiFacebookLogoBold className="text-xl" />
              <span className="text-sm">Follow on Facebook</span>
            </Link>
          </div>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-blue-400">F.A.Q</Link></li>
            <li><Link to="/driverForm" className="hover:text-blue-400">Apply as Driver</Link></li>
          </ul>
        </div>

        {/* Services List */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Private Ride</li>
            <li>2-Men Assist</li>
            <li>Wheelchair Transfer</li>
            <li>Medical Pick-up</li>
            <li>Safe Travel</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300 max-w-full overflow-hidden">
            <li className="break-words">📞 +917-514-3080</li>
            <li className="break-words">📧 info@healthexpressambulette.com</li>
            <li className="break-words">📍 155 Water Street, Brooklyn NY 11201</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-400 text-center">
        <p>
          ambulette transportation, wheelchair assistance, private ride NYC, medicaid pickup, safe travel
        </p>
        <p className="mt-4">©2024 Health Express Ambulette Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
