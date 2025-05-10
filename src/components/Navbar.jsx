import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Projects", "Skills"];

  return (
    <nav className="w-full bg-primary text-textLight shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-accentStart to-accentEnd text-transparent bg-clip-text">
          <a href="#">Goutam Kumar</a>
        </h1>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm md:text-base">
          {navLinks.map((link) => (
            <li
              key={link}
              className="px-4 py-2 text-textLight cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-accentStart hover:to-accentEnd"
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}

          {/* <li className="hover:text-accentEnd transition-all cursor-pointer">
            <a
              href="#contact"
              className="text-textLight hover:text-accent transition-colors duration-300"
            >
              Contact
            </a>
          </li> */}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar Menu (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-secondary p-6  shadow-crystal z-40 transform transition-transform duration-300  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col gap-4 mt-5">
          <li
            onClick={() => setIsOpen(false)}
            className="hover:text-accentEnd cursor-pointer"
          >
            <h1 className="text-2xl mb-2 font-bold bg-gradient-to-r from-accentStart to-accentEnd text-transparent bg-clip-text">
              <a href="#">Goutam Kumar</a>
            </h1>
          </li>
        </ul>
        <div className="flex flex-col p-6 space-y-4 mt-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="relative px-4 py-2 rounded-md text-textLight transition-all duration-300 ease-in-out group"
            >
              <span className="absolute inset-0 rounded-md border border-transparent group-hover:border-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 p-[1px]">
                <span className="block h-full w-full bg-secondary rounded-md group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:to-purple-800 group-hover:text-white transition-all duration-300 ease-in-out px-4 py-2">
                  {link}
                </span>
              </span>
              <span className="invisible">{link}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
