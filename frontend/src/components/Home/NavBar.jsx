// src/components/Home/NavBar.jsx
import { Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import universityLogo from "./homeassets/logo.jpg"; // Ensure the path and file name are correct

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
  return (
    <header className="sticky top-12 z-40 bg-white shadow-md">
      <nav className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2" prefetch={false}>
          <img
            src={universityLogo} // Using imported image
            alt="University Logo"
            className="h-12 w-12"
          />
          <span className="text-lg font-semibold text-[#19178B] font-unique">SAUS Alumni</span>
        </Link>
        <div className="hidden md:flex items-center gap-4 justify-center flex-grow">
          <Link
            to="/about"
            className="text-sm font-bold text-[#19178B] hover:underline font-unique"
            prefetch={false}
          >
            About
          </Link>
          <Link
            to="/news"
            className="text-sm font-bold text-[#19178B] hover:underline font-unique"
            prefetch={false}
          >
            News
          </Link>
          <Link
            to="/stories"
            className="text-sm font-bold text-[#19178B] hover:underline font-unique"
            prefetch={false}
          >
            Success Stories
          </Link>
          <Link
            to="/campus-life"
            className="text-sm font-bold text-[#19178B] hover:underline font-unique"
            prefetch={false}
          >
            Campus Life
          </Link>
          <Link
            to="/alumniSearch"
            className="text-sm font-bold text-[#19178B] hover:underline font-unique"
            prefetch={false}
          >
            Alumni
          </Link>
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
