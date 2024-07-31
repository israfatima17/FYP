import React from "react";
import { Link } from "react-router-dom";
import universityLogo from "../assets/universitylogo.jpg"; // Ensure the path and file name are correct

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
          <h1 className="text-2xl font-bold">University Name</h1>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/news" className="hover:underline">News</Link>
          <Link to="#" className="hover:underline">Admissions</Link>
          <Link to="/stories" className="hover:underline">Success Stories</Link>
          <Link to="/campus-life" className="hover:underline">Campus Life</Link>
          <Link to="/alumniSearch" className="hover:underline">Alumni</Link>
        </div>
      </nav>

      {/* About Section */}
      <main className="py-12 px-6 flex justify-between items-start max-w-4xl mx-auto">
        {/* Left Side */}
        <section className="flex-1 mr-8">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <h2 className="text-3x1 front-bold mb-4">SAUS ALUMNI</h2>
          <hr className="border-[#711F3C] mb-10" />
          <p className="text-base mb-4">
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

      {/* Footer */}
      <footer className="bg-[#F0F0F0] text-gray-700 py-6 px-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; 2024 University. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
