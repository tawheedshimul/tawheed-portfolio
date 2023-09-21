import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaYoutube } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: {
      x: '100%', // Change this to '100%' to hide the menu on the right side initially
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      x: '100%', // Change this to '100%' to slide the menu out to the right
      transition: {
        duration: 0.3,
      },
    },
  };

  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Use smooth scrolling for a nice effect
    });
  }


  const closeNavbar = () => {
    setIsOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Use smooth scrolling for a nice effect
    });
  };



  return (
    <nav className="bg-gray-200 dark:bg-black dark:text-white text-gray-800 p-2 border-b border-cyan-400">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to='/'
          className=" py-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white font-semibold rounded px-8 text-xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
          onClick={closeNavbar}
        >
          Tawheed
        </Link>

        <div class="hidden md:flex space-x-4">
          <NavLink onClick={top} to="/" className="inline-block w-full mx-2 px-2 py-2 text-sm font-medium text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none ">
            <span className='mx-2'>Home</span>
          </NavLink>
          <NavLink onClick={top} to="/about" className="inline-block w-full px-2 mx-2 py-2 text-sm font-medium text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none ">
            <span className='mx-2'>About</span>
          </NavLink>
          <NavLink onClick={top} to="/contact" className="inline-block w-full px-2 mx-2 py-2 text-sm font-medium text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none ">
            <span className='mx-2'>Contact</span>
          </NavLink>
          <NavLink onClick={top} to="/service" className="inline-block w-full px-2 mx-2 py-2 text-sm font-medium text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none ">
            <span className='mx-2'>Services</span>
          </NavLink>
          <NavLink onClick={top} to="/projects" className="inline-block w-full px-2 mx-2 py-2 text-sm font-medium text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none ">
            <span className='mx-2'>Project</span>
          </NavLink>
        </div>


        <div className="flex">
          <Link to='/player'><FaYoutube className='text-red-500 text-4xl  hover:scale-110 transition duration-500 ease-in-out'></FaYoutube></Link>
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-gray-100 bg-gradient-to-r ms-2 from-purple-500 via-indigo-500 to-blue-500 rounded p-2 text-xl focus:outline-none">
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
              className="fixed top-0 right-0 w-5/6 h-full bg-gray-200 dark:bg-black dark:text-white shadow-lg z-40"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <div className="p-4">
                <button onClick={toggleNavbar}>
                  <FaTimes className="text-2xl" />
                </button>
              </div>
              <div className="py-4 space-y-2 grid grid-cols-1 ">
                <Link onClick={closeNavbar} to="/" className="text-xl">
                  <span className='mx-4 border-b-2 border-gray-600 dark:border-gray-100'>Home</span>
                </Link>
                <Link onClick={closeNavbar} to="/about" className="text-xl">
                  <span className='mx-4 border-b-2 border-gray-600 dark:border-gray-100'>About</span>
                </Link>
                <Link onClick={closeNavbar} to="/contact" className="text-xl">
                  <span className='mx-4 border-b-2 border-gray-600 dark:border-gray-100'>Contact</span>
                </Link>
                <Link onClick={closeNavbar} to="/projects" className="text-xl">
                  <span className='mx-4 border-b-2 border-gray-600 dark:border-gray-100'>Project</span>
                </Link>
                <Link onClick={closeNavbar} to="/service" className="text-xl">
                  <span className='mx-4 border-b-2 border-gray-600 dark:border-gray-100'>Services</span>
                </Link>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
