import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: {
      x: '-100%',
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      x: '-100%',
      transition: {
        duration: 0.3,
      },
    },
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-200 text-gray-800 p-2">
      <div className="container mx-auto flex justify-between items-center">
        <button
          className=" py-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white font-semibold rounded px-10 text-xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
          onClick={closeNavbar}
        >
          Tawheed
        </button>

        <div class="hidden md:flex space-x-4">
          <a href="#home" class="relative text-gray-600 hover:text-blue-500 transition-colors duration-300">
            Home
            <div class="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 origin-left"></div>
          </a>
          <a href="#about" class="relative text-gray-600 hover:text-blue-500 transition-colors duration-300">
            About
            <div class="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 origin-left"></div>
          </a>
          <a href="#projects" class="relative text-gray-600 hover:text-blue-500 transition-colors duration-300">
            Projects
            <div class="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 origin-left"></div>
          </a>
          <a href="#contact" class="relative text-gray-600 hover:text-blue-500 transition-colors duration-300">
            Contact
            <div class="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 origin-left"></div>
          </a>
        </div>






        <div className="flex">
          <div className="mr-2 mt-1">Profile</div>
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-gray-100 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded p-2 text-xl focus:outline-none">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeNavbar}
            ></motion.div>
            <motion.div
              className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-40"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <div className="p-4">
                <button onClick={toggleNavbar} className="text-gray-600">
                  <FaTimes className="text-2xl" />
                </button>
              </div>
              <div className="py-4">
                <a href="#" className="block text-gray-600 p-2">
                  Home
                </a>
                <a href="#" className="block text-gray-600 p-2">
                  About
                </a>
                <a href="#" className="block text-gray-600 p-2">
                  Projects
                </a>
                <a href="#" className="block text-gray-600 p-2">
                  Contact
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
