// src/components/Home/Footer.jsx
import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import universityLogo from "./homeassets/logo.jpg"; // Adjust the import path as needed
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
               {/* Join Our Alumni Groups Section */}
    <div className="bg-white p-6 shadow-md rounded-lg mb-12 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Join Our Alumni Groups</h2>
      <p className="text-gray-600 mb-4">Connect with us through our official alumni groups!</p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://wa.me/yourwhatsappnumber"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:scale-105 transform transition"
        >
          <FaWhatsapp size={30} />
        </a>
        <a
          href="https://facebook.com/yourgroup"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:scale-105 transform transition"
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:scale-105 transform transition"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <img
              src={universityLogo}
              alt="University Logo"
              className="w-16 h-16 mb-4 mx-auto md:mx-0"
            />
            <p className="text-lg font-semibold mb-2">The Shaikh Ayaz University</p>
            <p className="text-sm">Formerly Shikarpur Campus of Shah Abdul Latif  University Khairpur</p>
          </div>
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <p className="flex items-center justify-center md:justify-start mb-2">
              <FaPhone className="mr-2 text-xl" /> +92 726 920369/512040
            </p>
            <p className="flex items-center justify-center md:justify-start mb-2">
              <FaMapMarkerAlt className="mr-2 text-xl" /> Main Shikarpur Road, Shikarpur
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="mr-2 text-xl" /> info@saus.edu.pk
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a href="https://www.facebook.com/people/The-Shaikh-Ayaz-University-Shikarpur/100087709870723/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl text-blue-600" />
              </a>
              <a href="https://twitter.com/AyazUniversity" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl text-blue-400" />
              </a>
              <a href="https://www.instagram.com/saus.edu.pk/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-pink-500" />
              </a>
              <a href="https://www.linkedin.com/company/the-shaikh-ayaz-university/?originalSubdomain=pk" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-blue-700" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">© 2024. Shaikh Ayaz University Shikarpur. All Rights Reserved</p>
          <ul className="flex justify-center space-x-4 text-sm text-gray-600">
            <li>
              <a href="https://saus.edu.pk/terms-and-conditions/" className="hover:underline">Terms and Conditions</a>
            </li>
            <li>
              <a href="https://saus.edu.pk/privacy-policy/" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="https://saus.edu.pk/press-release/" className="hover:underline">Press Release</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
