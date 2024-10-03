// src/pages/CampusLife.jsx
import React from "react";
import { Link } from "react-router-dom";
import universityLogo from "../assets/universitylogo.jpg"; // Update with the correct path to your logo image
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const CampusLife = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-[#711F3C] text-white py-4 px-6 flex items-center justify-between shadow-md">
        <div className="flex items-center">
          <img
            src={universityLogo} // Using imported image
            alt="University Logo"
            className="w-12 h-12 mr-4"
          />
          <h1 className="text-lg font-semibold">SAUS Alumni News</h1>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline text-sm">Home</Link>
          <Link to="/about" className="hover:underline text-sm">About</Link>
          <Link to="https://saus.edu.pk/eligibility-criteria/" className="hover:underline text-sm">Admissions</Link>
          <Link to="/stories" className="hover:underline text-sm">Success Stories</Link>
          <Link to="/News" className="hover:underline text-sm">News</Link>
          <Link to="/alumniSearch" className="hover:underline text-sm">Alumni</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl">
          <p>Welcome to the Campus Life page. Here you'll find information about campus activities and events.</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#F0F0F0] text-gray-700 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <img
                src={universityLogo} // Using imported image
                alt="University Logo"
                className="w-16 h-16 mb-4 mx-auto md:mx-0"
              />
              <p className="text-lg font-semibold mb-2">The Shaikh Ayaz University</p>
              <p className="text-sm">Formerly Shikarpur Campus of Shah Abdul Latif University Khairpur</p>
            </div>
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <p className="flex items-center justify-center md:justify-start mb-2"><FaPhone className="mr-2 text-xl" /> +92 726 920369/512040</p>
              <p className="flex items-center justify-center md:justify-start mb-2"><FaMapMarkerAlt className="mr-2 text-xl" /> Main Shikarpur Road, Shikarpur</p>
              <p className="flex items-center justify-center md:justify-start"><FaEnvelope className="mr-2 text-xl" /> info@saus.edu.pk</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Connect With Us</h3>
              <div className="flex justify-center md:justify-start space-x-4 mb-4">
                <a href="https://www.facebook.com/people/The-Shaikh-Ayaz-University-Shikarpur/100087709870723/" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-2xl text-blue-600" /></a>
                <a href="https://twitter.com/AyazUniversity" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-2xl text-blue-400" /></a>
                <a href="https://www.instagram.com/saus.edu.pk/" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-2xl text-pink-500" /></a>
                <a href="https://www.linkedin.com/company/the-shaikh-ayaz-university/?originalSubdomain=pk" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-2xl text-blue-700" /></a>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">© 2024. Shaikh Ayaz University Shikarpur. All Rights Reserved</p>
            <ul className="flex justify-center space-x-4 text-sm text-gray-600">
              <li><a href="https://saus.edu.pk/terms-and-conditions/" className="hover:underline">Terms and Conditions</a></li>
              <li><a href="https://saus.edu.pk/privacy-policy/" className="hover:underline">Privacy Policy</a></li>
              <li><a href="https://saus.edu.pk/press-release/" className="hover:underline">Press Release</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CampusLife;
