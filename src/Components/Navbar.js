import React from "react";
import Project from "./Project";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center fixed top-0 w-full z-50 shadow-md">

      <h1 className="text-2xl font-bold text-red-500">Foodie's Hub</h1>

      <ul className="flex gap-6 text-gray-700 items-center">
      <Link to="/" className="hover:text-red-600">Home</Link>
      <Link to="/menu" className="hover:text-red-600">Menu</Link>
      <Link to="/about" className="hover:text-red-600">About</Link>
      <Link to="/contact" className="hover:text-red-600">Contact</Link>
      <li className="w-10"><Project /></li>
      </ul>

    </nav>
  );
}

export default Navbar;
