import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBriefcase, FaEnvelope, FaCog } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-center items-center fixed top-0 w-full z-50 shadow-md">

      <ul className="flex gap-10 text-gray-700 items-center">
        
        {/* Home */}
        <li className="group flex flex-col items-center cursor-pointer">
          <Link to="/" className="flex flex-col items-center">
            <FaHome size={24} className="text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
            <span className="mt-2 text-sm text-transparent group-hover:text-blue-400 transition-all duration-300">Home</span>
            <span className="mt-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>

        {/* Work */}
        <li className="group flex flex-col items-center cursor-pointer">
          <Link to="/menu" className="flex flex-col items-center">
            <FaBriefcase size={24} className="text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
            <span className="mt-2 text-sm text-transparent group-hover:text-blue-400 transition-all duration-300">Work</span>
            <span className="mt-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>

        {/* Contact */}
        <li className="group flex flex-col items-center cursor-pointer">
          <Link to="/contact" className="flex flex-col items-center">
            <FaEnvelope size={24} className="text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
            <span className="mt-2 text-sm text-transparent group-hover:text-blue-400 transition-all duration-300">Mail</span>
            <span className="mt-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>

        {/* Settings */}
        <li className="group flex flex-col items-center cursor-pointer">
          <Link to="/settings" className="flex flex-col items-center">
            <FaCog size={24} className="text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
            <span className="mt-2 text-sm text-transparent group-hover:text-blue-400 transition-all duration-300">Settings</span>
            <span className="mt-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;