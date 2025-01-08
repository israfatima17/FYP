import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import universityLogo from "../assets/universitylogo.jpg";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SuccessStories = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchAlumni = async () => {
      const res = await axios.get(import.meta.env.VITE_BASE_URL + "story");
      setResult(res.data);
      console.log(res);
    };
    fetchAlumni();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-[#711F3C] text-white py-4 px-6 flex items-center justify-between shadow-md">
        <div className="flex items-center">
          <img
            src={universityLogo}
            alt="University Logo"
            className="w-12 h-12 mr-4"
          />
          <h1 className="text-lg font-semibold">SAUS Alumni Success Stories</h1>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline text-sm">Home</Link>
          <Link to="/about" className="hover:underline text-sm">About</Link>
          <Link to="https://saus.edu.pk/eligibility-criteria/" className="hover:underline text-sm">Admissions</Link>
          <Link to="/news" className="hover:underline text-sm">News</Link>
          <Link to="/campus-life" className="hover:underline text-sm">Campus Life</Link>
          <Link to="/alumniSearch" className="hover:underline text-sm">Alumni</Link>
        </div>
      </nav>

      <main className="flex-1 py-12 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center text-[#711F3C] mb-8">Success Stories</h1>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {result.map((alumni) => (
              <Card key={alumni.id} className="hover:shadow-lg transition-shadow duration-300">
                <img src={alumni.imgURL} alt={alumni.title} className="h-48 w-full object-cover rounded-t-md" />
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-[#711F3C]">{alumni.title}</h2>
                  <p className="mt-2 text-gray-700">{alumni.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#F0F0F0] text-gray-700 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <img
                src={universityLogo}
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

export default SuccessStories;

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
