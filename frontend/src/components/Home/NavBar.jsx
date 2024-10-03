import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import universityLogo from "./homeassets/logo.jpg";

const TopNavBar = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-[#19178B]">
      <nav className="container flex h-12 items-center justify-between px-4 md:px-6">
        <Link
          to="/alumni-directory"
          className="text-sm font-bold text-white hover:underline"
        >
          Alumni Directory
        </Link>
        <button
          className="px-4 py-2 text-sm font-bold text-[#19178B] bg-white rounded-md"
          onClick={handleLogin}
        >
          Login
        </button>
      </nav>
    </header>
  );
};

const BottomNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <header className="sticky top-12 z-40 bg-white shadow-md">
      <nav className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={universityLogo}
            alt="University Logo"
            className="h-12 w-12"
          />
          <span className="text-lg font-semibold text-[#19178B] font-unique">
            SAUS Alumni
          </span>
        </Link>

        {/* Hamburger Button for Mobile View */}
        <button
          onClick={toggleMenu}
          className="text-[#19178B] md:hidden focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-4 justify-center flex-grow absolute md:relative top-0 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 z-50`}
        >
          <Link
            to="/about"
            className="text-sm font-bold text-[#19178B] hover:underline font-unique py-2 md:mx-4"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/news"
            className="text-sm font-bold text-[#19178B] hover:underline font-unique py-2 md:mx-4"
            onClick={toggleMenu}
          >
            News
          </Link>
          <Link
            to="/stories"
            className="text-sm font-bold text-[#19178B] hover:underline font-unique py-2 md:mx-4"
            onClick={toggleMenu}
          >
            Success Stories
          </Link>
          <Link
            to="/campus-life"
            className="text-sm font-bold text-[#19178B] hover:underline font-unique py-2 md:mx-4"
            onClick={toggleMenu}
          >
            Campus Life
          </Link>
          <Link
            to="/alumniSearch"
            className="text-sm font-bold text-[#19178B] hover:underline font-unique py-2 md:mx-4"
            onClick={toggleMenu}
          >
            Alumni
          </Link>
          <a
            href="https://saus.edu.pk/admissions/"
            className="text-sm font-bold text-[#19178B] hover:underline font-unique py-2 md:mx-4"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
          >
            Admission
          </a>
        </div>
      </nav>
    </header>
  );
};

const NavBar = () => {
  return (
    <>
      <TopNavBar />
      <BottomNavBar />
    </>
  );
};

export default NavBar;
