import { Link } from "react-router-dom";
import { Avatar } from "flowbite-react";
import universityLogo from "../assets/universitylogo.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UniversityIcon } from "../components/Icons/UniversityIcon";
import axios from "axios";
const AlumniProfile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  const email = window.localStorage.getItem("alumniEmail")

  useEffect(() => {
    const profileData = async () => {
      console.log("getting data");
      const data = await axios.post(
        import.meta.env.VITE_BASE_URL + "alumni/getProfile",
        {
          email
        }
      );
      console.log(data);
      setProfile(data.data[0]);
    };
    profileData();
  }, []);
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Navbar */}
      <header
        className="bg-[#711F3C] text-white py-4 px-6 flex items-center justify-between shadow-md"
      >
        <div className="flex items-center">
          <img
            src={universityLogo} // Using imported image
            alt="University Logo"
            className="w-12 h-12 mr-4"
          />
          <h1 className="text-lg font-semibold">SAUS Alumni Search</h1>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline text-sm">
            Home
          </Link>
          <Link to="/news" className="hover:underline text-sm">
            News
          </Link>
          <Link to="#" className="hover:underline text-sm">
            Admissions
          </Link>
          <Link to="/stories" className="hover:underline text-sm">
            Success Stories
          </Link>
          <Link to="/campus-life" className="hover:underline text-sm">
            Campus Life
          </Link>
          <Link to="/About" className="hover:underline text-sm">
            About
          </Link>
        </div>
      </header>
      <main className="flex-1 bg-background p-6 md:p-10">
  <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="bg-primary p-6 md:p-10 flex flex-col items-center gap-4">
      <Avatar img={profile?.updateData?.img} size={"lg"} rounded />
      <div className="text-center space-y-1">
        <h1 className="text-3xl font-bold text-white">{profile.name}</h1>
        <p className="text-lg font-semibold text-gray-200">{profile?.updateData?.designation}</p>
        <p className="text-gray-300">{profile?.updateData?.department}, {profile?.updateData?.batch}, {profile?.updateData?.rollNumber}</p>
        <p className="text-gray-300">{profile?.updateData?.email}</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10">
      <div className="bg-gray-50 rounded-lg p-4 shadow-md space-y-2">
        <h2 className="text-xl font-bold text-blue-600">About</h2>
        <p className="text-gray-800 font-light leading-relaxed break-words">{profile?.updateData?.about || 'No information available.'}</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 shadow-md space-y-2">
        <h2 className="text-xl font-bold text-blue-600">Achievements</h2>
        <p className="text-gray-800 font-light leading-relaxed break-words">{profile?.updateData?.achievements || 'No achievements listed.'}</p>
      </div>
    </div>
  </div>
</main>


  {/* Footer */}
  <footer className="bg-[#F0F0F0] text-gray-700 py-12 px-6">
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

          {/* Upper Section */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            {/* University Info */}
            <div className="text-center md:text-left mb-8 md:mb-0">
              <img
                src={universityLogo}
                alt="University Logo"
                className="w-16 h-16 mb-4 mx-auto md:mx-0"
              />
              <p className="text-lg font-semibold mb-2">The Shaikh Ayaz University</p>
              <p className="text-sm">
                Formerly Shikarpur Campus of Shah Abdul Latif University Khairpur
              </p>
            </div>

            {/* Contact Information */}
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

            {/* Social Media Links */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Connect With Us</h3>
              <div className="flex justify-center md:justify-start space-x-4 mb-4">
                <a
                  href="https://www.facebook.com/people/The-Shaikh-Ayaz-University-Shikarpur/100087709870723/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-2xl text-blue-600" />
                </a>
                <a
                  href="https://twitter.com/AyazUniversity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-2xl text-blue-400" />
                </a>
                <a
                  href="https://www.instagram.com/saus.edu.pk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl text-pink-500" />
                </a>
                <a
                  href="https://www.linkedin.com/company/the-shaikh-ayaz-university/?originalSubdomain=pk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl text-blue-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Lower Section */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              © 2024. Shaikh Ayaz University Shikarpur. All Rights Reserved
            </p>
            <ul className="flex justify-center space-x-4 text-sm text-gray-600">
              <li>
                <a
                  href="https://saus.edu.pk/terms-and-conditions/"
                  className="hover:underline"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="https://saus.edu.pk/privacy-policy/" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://saus.edu.pk/press-release/" className="hover:underline">
                  Press Release
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AlumniProfile;
