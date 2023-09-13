import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

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

  return (
    <nav className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-2xl font-bold">My Portfolio</div>
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-white focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="">
            Home
          </a>
          <a href="#" className="">
            About
          </a>
          <a href="#" className="">
            Projects
          </a>
          <a href="#" className="">
            Contact
          </a>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="md:hidden fixed top-0 left-0 w-full h-full bg-black opacity-50"
              initial="hidden"
              animate="visible"
              exit="exit"
            ></motion.div>
            <motion.div
              className="md:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-lg"
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
