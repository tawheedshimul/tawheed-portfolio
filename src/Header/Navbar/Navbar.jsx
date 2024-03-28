import React, { useState } from 'react';
import {  FaYoutube } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeNavbar = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <nav className="bg-black p-2 border-b border-red-600">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="glow-button font-semibold flex space-x-1 px-3 py-2 text-red-600  text-xl  transition duration-300 transform"
          onClick={closeNavbar}
          activeClassName="active"
        >
          <p>Tawheed</p>
        </Link>

        
        <div className="flex text-2xl text-red-600  items-center">
          <Link to='/player'>
            < FaYoutube/>
          </Link>
         
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
