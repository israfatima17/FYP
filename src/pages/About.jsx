import React from "react";
import { Link } from "react-router-dom";
import universityLogo from "../assets/universitylogo.jpg"; // Ensure the path and file name are correct
import alumniImage from "../assets/image.jpg"; // Add your image path here
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons from react-icons

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-[#711F3C] text-white py-4 px-6 flex items-center justify-between shadow-md">
        <div className="flex items-center">
          <img
            src={universityLogo} // Using imported image
            alt="University Logo"
            className="w-12 h-12 mr-4"
          />
          <h1 className="text-lg font-semibold">SAUS Alumni About</h1>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline text-sm">Home</Link>
          <Link to="/news" className="hover:underline text-sm">News</Link>
          <Link to="#" className="hover:underline text-sm">Admissions</Link>
          <Link to="/stories" className="hover:underline text-sm">Success Stories</Link>
          <Link to="/campus-life" className="hover:underline text-sm">Campus Life</Link>
          <Link to="/alumniSearch" className="hover:underline text-sm">Alumni</Link>
        </div>
      </nav>

      {/* About Section */}
      <main className="py-12 px-6 flex justify-between items-start max-w-4xl mx-auto">
        {/* Left Side */}
        <section className="flex-1 mr-8">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <h2 className="text-2xl font-semibold mb-4">SAUS ALUMNI</h2>
          <hr className="border-[#711F3C] mb-10" />
          <p className="text-sm mb-4" style={{ textAlign: 'justify' }}>
            The Shaikh Ayaz University, formerly the Shikarpur Campus of Shah Abdul Latif University Khairpur, was established by a government notification on December 12. Named after the renowned Sindhi poet Shaikh Ayaz, it gained support from students, faculty, and local leaders. Founded in 2011 under Prof. Dr. G. Raza Bhatti, the campus transformed into a vibrant educational center. Successive leaderships introduced new academic departments and programs, enhancing the campus's academic vitality. The transition to a university was marked by significant community engagement and media coverage. Dr. Nisar Ahmed Siddiqui, Vice Chancellor of IBA Sukkur, took charge of the new university. The institution aims to revive Shikarpur's socio-economic and cultural heritage while pursuing excellence in research and education. The 98-acre site near Shikarpur-Jacobabad Bypass includes plans for academic blocks, hostels, and infrastructure development. Continued support from the Sindh Government is crucial for its growth and success.
          </p>
        </section>

        {/* Right Side */}
        <div className="w-48 h-48 flex items-center justify-center">
          <img
            src={universityLogo} // Using imported image
            alt="University Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </main>

      {/* New Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-start">
        {/* Left Side (Image) */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0 flex justify-center">
          <img
            src={alumniImage} // Using imported image
            alt="Alumni Event"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>

        {/* Right Side (Text in Red Container) */}
        <div className="md:w-1/2 w-full md:pl-12 bg-[#8C1D40] text-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-4">Main Objectives of the Alumni Office are as under:</h3>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>To build an active relationship between the SAUS and its former graduates.</li>
            <li>To raise financial and material resources for efficient and effective teaching and learning as well as the general wellbeing of alumni, students, and staff at SAUS.</li>
            <li>To bring every graduating class to alumni roll.</li>
            <li>To help students to approach their seniors for internships and job opportunities.</li>
            <li>Students will get to learn new things through frequent meetings, counseling, and guidance from former graduates.</li>
            <li>To provide incentives such as rewards and prizes to the best student researchers and best alumni models with a proven record of significant contribution to society and industry.</li>
            <li>To encourage alumni to develop their respective careers through the use of university resources and support from staff.</li>
            <li>To initiate seminars, lecturers, and other academic events for the benefit of alumni.</li>
            <li>To organize reunions and other alumni functions.</li>
            <li>The office maintains all communications with its members either via the website, biannual newsletters, email, phone, or other forms of communication.</li>
            <li>The office is responsible to send newsletters and communicate with alumni through email.</li>
            <li>To ensure every graduating class is represented in our alumni roll, we send a heartfelt invitation to all SAUS graduates. Join our growing network of accomplished individuals and stay connected.</li>
          </ul>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Vision */}
          <div className="w-full max-w-3xl mb-8 text-center">
            <h3 className="text-md font-semibold border-b-2 border-[#711F3C] inline-block pb-1 text-[#711F3C]">
              Vision
            </h3>
            <p className="text-sm mt-2" style={{ textAlign: 'justify' }}>
              Inspire and engage our alumni in a lifelong commitment to support the university and make a better community around it.
            </p>
          </div>
          {/* Mission */}
          <div className="w-full max-w-3xl text-center">
            <h3 className="text-md font-semibold border-b-2 border-[#711F3C] inline-block pb-1 text-[#711F3C]">
              Mission
            </h3>
            <p className="text-sm mt-2" style={{ textAlign: 'justify' }}>
              To reach, inspire, engage and support current and future alumni of the university by nourishing pride, celebrating achievements, inspiring volunteerism and giving, and providing lifelong learning opportunities for personal and professional growth, to bring benefit to the alumni, university, and community around it.
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-12 px-6"
        style={{
          background: 'linear-gradient(to right, #F9E6E7, #F9E6E7 65%, rgb(229, 165, 168) 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-[#711F3C] mb-2">COMMUNICATION</h4>
              <hr className="border-[#711F3C] mb-4 mx-auto w-24" />
              <p className="text-sm" style={{ textAlign: 'justify' }}>
                We are committed to connecting with our alumni through frequent communications and thoughtful content.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-[#711F3C] mb-2">CREATIVITY</h4>
              <hr className="border-[#711F3C] mb-4 mx-auto w-24" />
              <p className="text-sm" style={{ textAlign: 'justify' }}>
                We believe in innovative ideas and creative solutions that inspire our community and promote engagement.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-[#711F3C] mb-2">COMMUNITY</h4>
              <hr className="border-[#711F3C] mb-4 mx-auto w-24" />
              <p className="text-sm" style={{ textAlign: 'justify' }}>
                Our alumni network is a vibrant community of passionate individuals dedicated to uplifting each other and the society around them.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-[#711F3C] mb-2">CULTURE</h4>
              <hr className="border-[#711F3C] mb-4 mx-auto w-24" />
              <p className="text-sm" style={{ textAlign: 'justify' }}>
                We celebrate our diverse backgrounds and experiences, fostering a culture of respect, support, and inclusivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#711F3C] text-white py-4">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <p className="text-sm">© 2024 SAUS Alumni. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-lg hover:text-gray-300" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-lg hover:text-gray-300" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-lg hover:text-gray-300" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-lg hover:text-gray-300" />
            </a>
            <a href="mailto:info@saus.edu.pk">
              <FaEnvelope className="text-lg hover:text-gray-300" />
            </a>
            <a href="tel:+123456789">
              <FaPhone className="text-lg hover:text-gray-300" />
            </a>
            <a href="https://goo.gl/maps/xyz" target="_blank" rel="noopener noreferrer">
              <FaMapMarkerAlt className="text-lg hover:text-gray-300" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
