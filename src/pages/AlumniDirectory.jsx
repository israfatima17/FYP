import React, { useState } from "react";
import loginImage from "../assets/download1.jpg"; // Ensure the correct path
import Login from "../components/SignUpAndLogin/Login"; // Import the Login component
import { Link } from "react-router-dom"; // Import Link for navigation

const AlumniDirectory = () => {
  const [showLogin, setShowLogin] = useState(true); // State to toggle login display

  return (
    <div className="min-h-screen w-full">
      {/* Top Navbar */}
      <header className="bg-[rgb(25,23,139)] text-white py-2">
        <div className="container mx-auto px-4">
          <h1 className="text-lg font-medium text-left">Shaikh Ayaz University Alumni</h1>
        </div>
      </header>

      <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-screen w-full">
        <div className="relative">
          <img
            src={loginImage}
            alt="Login Background"
            className="object-cover w-full h-full"
            style={{ filter: "brightness(70%)" }} // Adjust brightness here
          />
          <div className="absolute inset-0 bg-black opacity-30"></div> {/* Semi-transparent overlay */}

          {/* White div with text */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
              <h2 className="text-3xl font-bold mb-4">Stanford Pass</h2>
              <p className="text-lg mb-6">
                Your single login for alumni, donors, and friends of Stanford.
              </p>
              <p className="text-sm">
                Stanford Pass is your single login to access alumni and donor services like Stanford Alumni email, the Alumni Directory, groups, events, giving forms, giving history, and more. Stanford Pass is available to anyone, but access to certain services is limited based on your affiliation with Stanford.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-white p-6">
          {/* Show Login Component */}
          {showLogin ? <Login /> : null}
          
          {/* Divider and Additional Text */}
          <div className="w-full mt-6">
            <hr className="my-4 border-gray-300" />
            <p className="text-center text-sm text-gray-600">
              Your account (not your SAUA) is now SAUS Alumni. Don't have an account yet?{" "}
              <Link to="/Register" className="text-blue-500 font-semibold">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniDirectory;
