import { Link } from "react-router-dom";
import { Button, Card, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import universityLogo from "../assets/universitylogo.jpg";

const AlumniSearch = () => {
  const [search, setSearch] = useState("");
  const [newsData, setNewsData] = useState([]); // Store the original news data
  const [filteredNews, setFilteredNews] = useState([]); // Store the filtered news data

  // Fetch the news from the API
  useEffect(() => {
    const fetchNews = async () => {
      const res = await axios.get(import.meta.env.VITE_BASE_URL + "news"); // Fetching news from your backend
      setNewsData(res.data); // Store the original news data
      setFilteredNews(res.data); // Initially show all news
    };
    fetchNews();
  }, []);

  const handleSearch = () => {
    // Filter the original news data based on the search input
    const filtered = newsData.filter((newsItem) =>
      newsItem.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredNews(filtered); // Update the filtered news list
  };

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
          <Link to="/campus-life" className="hover:underline text-sm">Campus Life</Link>
          <Link to="/alumniSearch" className="hover:underline text-sm">Alumni</Link>
        </div>
      </nav>

      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-6">News</h1>
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <TextInput
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for news..."
              className="w-full px-12 py-3 rounded-md bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <Button className="bg-primary mt-2 mb-2" onClick={handleSearch}>
            Search
          </Button>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredNews.map((newsItem) => (
              <Card key={newsItem.id}>
                <img src={newsItem.imgURL} alt={newsItem.title} />
                <div>
                  <h1 className="text-3xl font-bold">{newsItem.title}</h1>
                  <p>{newsItem.description}</p>
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
