import React from "react";
import { FiSun } from "react-icons/fi";
import { MdOutlineNightlight } from "react-icons/md";

const Navbar = ({ darkMode, isOpen, toggleMenu, toggleTheme }) => {
  return (
    <div className="px-0 2xl:px-40">
      <div className="w-full items-center justify-between py-4 px-10">
        <div className="flex items-center justify-between w-full">
          <a
            href="/"
            className="text-2xl font-bold text-blue-500 cursor-pointer"
          >
            Divya
          </a>
          <ul className="hidden md:flex gap-10 text-lg text-slate-800 dark:text-gray-200">
            <li className="cursor-pointer hover:text-blue-500">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <a href="#projects">Projects</a>
            </li>
          </ul>
          <button onClick={toggleTheme} className="p-2">
            {darkMode ? (
              <FiSun size={24} color="white" />
            ) : (
              <MdOutlineNightlight size={24} color="gray" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
