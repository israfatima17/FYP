import { Link } from "react-router-dom";
import { Avatar, Button, Card, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa";

import universityLogo from "../assets/universitylogo.jpg"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons from react-icons

const AlumniSearch = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchAlumni = async () => {
      const res = await axios.get(import.meta.env.VITE_BASE_URL + "alumni");
      setResult(res.data);
      console.log(res);
    };
    fetchAlumni();
  }, []);

  const handleSearch = async () => {
    // get all alumni and search for the search value return result
    const alumni = await axios.get(import.meta.env.VITE_BASE_URL + "alumni/");
    console.log(alumni);

    const result = alumni.data.filter((value) =>
      value?.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log(result);
    setResult(result);
  };
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
          <h1 className="text-lg font-semibold">SAUS Alumni Search </h1>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline text-sm">Home</Link>
          
          <Link to="/news" className="hover:underline text-sm">News</Link>
          <Link to="#" className="hover:underline text-sm">Admissions</Link>
          <Link to="/stories" className="hover:underline text-sm">Success Stories</Link>
          <Link to="/campus-life" className="hover:underline text-sm">Campus Life</Link>
          <Link to="/About" className="hover:underline text-sm">About</Link>
        </div>
      </nav>

      <main className="flex-1 py-12 px-4 md:px-6">
  <div className="container mx-auto max-w-3xl">
    <h1 className="text-3xl font-bold mb-6">Alumni Search</h1>
    <div className="relative">
      <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <TextInput
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for alumni..."
        className="w-full px-12 py-3 rounded-md bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
      />
    </div>
    <Button className="bg-primary mt-2 mb-2" onClick={handleSearch}>
      Search
    </Button>

    {/* Flexbox container for horizontal layout */}
    <div className="mt-8 flex overflow-x-auto space-x-6">
      {result.map((alumni) => {
        console.log(alumni.img); // Check the image URL
        return (
          <Card
            key={`${alumni.id}-${alumni.name}`} // Concatenating id with name or any other unique property
            className="flex-shrink-0 w-64 p-4 bg-white rounded-lg shadow-md"
          >
            {/* Using Avatar component to display the image */}
            <Avatar 
              img={alumni.img} // Pass the img URL from alumni object
              size={"lg"} 
              rounded 
            />
            <div>
              <h1 className="text-xl font-bold">{alumni.name}</h1>
              <p className="text-gray-400">{alumni.designation}</p>
            </div>
            <div>
              <p>{alumni.department}</p>
              <p className="mt-2 text-muted-foreground">{alumni.batch}</p>
            </div>
            <div>
              <Link
                to={`/alumni/${alumni.id}`}
                className="text-primary hover:underline"
                onClick={() => window.localStorage.setItem("alumniEmail", alumni.email)}
              >
                View Profile
              </Link>
            </div>
          </Card>
        );
      })}
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

export default AlumniSearch;

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

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function UniversityIcon(props) {
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
      <circle cx="12" cy="10" r="1" />
      <path d="M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" />
      <path d="M6 17v.01" />
      <path d="M6 13v.01" />
      <path d="M18 17v.01" />
      <path d="M18 13v.01" />
      <path d="M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
    </svg>
  );
}
