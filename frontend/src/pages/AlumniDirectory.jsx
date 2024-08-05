import React from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../assets./'; // Update the path as necessary

const AlumniDirectory = () => {
  return (
    <div className="grid md:grid-cols-2 min-h-screen w-full">
      <div className="flex items-center justify-center bg-primary p-6 md:p-12">
        <img src={loginImage} alt="Alumni Directory" className="w-full h-auto object-cover" />
      </div>
      <div className="flex items-center justify-center bg-background p-6 md:p-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Alumni Directory</h1>
          {/* Add your login component or content here */}
        </div>
      </div>
    </div>
  );
};

export default AlumniDirectory;
