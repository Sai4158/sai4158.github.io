"use client";
import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

// Navbar component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="mt-5 pl-3 pr-5 left-0 w-full text-white z-50">
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between py-4">
        <a
          className="text-2xl font-medium relative group hover:scale-125 transition-transform duration-1000"
          href="/"
        >
          <span className="absolute  opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-blue-200 ">
            Home
          </span>
          <span className=" group-hover:opacity-0 transition-opacity duration-1000   ">
            Welcome!
          </span>
        </a>

        <div className="sm:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-2xl bg-gray-900 p-2 rounded focus:outline-none hover:scale-90 transition-transform duration-300"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="hidden sm:flex space-x-8">
          <a
            className="flex items-center font-medium hover:text-gray-300  hover:scale-95 transition-transform duration-2000"
            href="/"
          >
            <FaHome className="mr-2" />
            Home
          </a>
          <a
            className="flex items-center font-medium hover:text-gray-300  hover:scale-95 transition-transform duration-2000"
            href="/Experience"
          >
            <FaUser className="mr-2" />
            Experience
          </a>
          <a
            className="flex items-center font-medium hover:text-gray-300  hover:scale-95 transition-transform duration-2000"
            href="/Projects"
          >
            <FaProjectDiagram className="mr-2" />
            Projects
          </a>
          <a
            className="flex items-center font-medium hover:text-gray-300  hover:scale-95 transition-transform duration-2000"
            href="/Contact"
          >
            <FaEnvelope className="mr-2" />
            Contact
          </a>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-gray-900 h[50px] p-6 rounded-l-3xl transform transition-transform duration-[1500ms] ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden z-50`}
      >
        <br />
        <br />
        <button
          onClick={toggleMenu}
          className="text-2xl text-white absolute top-20 left-6 focus:outline-none hover:scale-95 transition-transform  hover:text-red-300"
        >
          <FaTimes size={40} />
        </button>
        <br />
        <br />
        <br />

        <nav className="mt-10 space-y-4">
          <a
            className="block text-white font-medium hover:text-gray-300 hover:scale-95 transition-transform "
            href="/"
            onClick={toggleMenu}
          >
            <FaHome className="mr-2 inline" />
            Home
          </a>
          <br />
          <br />
          <a
            className="block text-white font-medium hover:text-gray-300  hover:scale-95 transition-transform"
            href="/Experience"
            onClick={toggleMenu}
          >
            <FaUser className="mr-2 inline" />
            Experience
          </a>
          <br />
          <br />
          <a
            className="block text-white font-medium hover:text-gray-300  hover:scale-95 transition-transform"
            href="/Projects"
            onClick={toggleMenu}
          >
            <FaProjectDiagram className="mr-2 inline" />
            Projects
          </a>
          <br />
          <br />
          <a
            className="block text-white font-medium hover:text-gray-300  hover:scale-95 transition-transform"
            href="/Contact"
            onClick={toggleMenu}
          >
            <FaEnvelope className="mr-2 inline" />
            Contact
          </a>
          <br />
          <br />
        </nav>
      </div>

      <div
        className={`fixed inset-0 bg-black transition-opacity duration-[1500ms] ${
          isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        } z-40`}
        onClick={toggleMenu}
      ></div>
    </header>
  );
};

export default Navbar;
