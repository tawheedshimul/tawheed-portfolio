import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaYoutube } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/contact', text: 'Contact' },
  { to: '/service', text: 'Services' },
  { to: '/projects', text: 'Project' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, x: 1000 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.1 } },
    exit: { opacity: 1, x: -1000, transition: { duration: .4 } },
  };

  const top = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeNavbar = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const isActiveLink = (path) => path === location.pathname;

  return (
    <nav className="bg-gray-200 dark:bg-black dark:text-white text-black p-2 border-b border-cyan-400">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="glow-button flex space-x-1 py-2 dark:text-white  text-xl font-semibold rounded px-8 transition duration-300 transform hover:scale-105"
          onClick={closeNavbar}
          activeClassName="active"
        >
          <p>Tawheed</p>
        </Link>

        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              onClick={top}
              to={link.to}
              className={`inline-block w-full mx-2 px-2 py-2 text-sm font-medium text-black dark:text-white border-b-2 border-transparent hover:border-white focus:outline-none ${isActiveLink(link.to) ? 'active' : ''}`}
            >
              <span className='mx-2'>{link.text}</span>
            </NavLink>
          ))}
        </div>

        <div className="flex text-2xl  items-center">
          <Link to='/player'>
            < FaYoutube/>
          </Link>
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-gray-100 rounded p-2 text-xl focus:outline-none">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeNav}
            ></motion.div>
            <motion.div
              className="fixed top-0 right-0 w-4/6 h-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 dark:bg-black dark:text-white shadow-lg z-40 transition duration-500 ease-linear"
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
              <div className="py-4 space-y-2 grid grid-cols-1">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    onClick={closeNavbar}
                    to={link.to}
                    className={`text-xl mx-2 p-1 rounded  w-32 ${isActiveLink(link.to) ? 'text-cyan-600' : 'px-4'}`}
                  >
                    <span className='mx-4'>{link.text}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
