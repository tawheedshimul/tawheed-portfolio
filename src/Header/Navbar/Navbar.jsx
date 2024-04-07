import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';
import atom from '../../../public/atom.png'
import SearchBar from './SearchBar';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const bgOpacity = scrollPosition > 60 ? 'bg-opacity-100' : 'bg-opacity-0';

  const closeNavbar = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`bg-black ${bgOpacity} p-2 border-b transition-all duration-500`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="font-semibold flex space-x-1 px-3 py-2 text-white text-xl transition duration-300 transform"
          onClick={closeNavbar}
          activeClassName="active"
        >
          <img src={atom} className="h-[25px] mx-auto animate-spin" alt="Logo" />
          <p>Tawheed</p>
        </Link>

        <div></div>

        <div className="flex text-2xl space-x-2 text-white items-center">
          {/* <SearchBar/> */}
          <Link to='/player'>
            <FaYoutube />
          </Link>
          <Link to='/player'>
            <FaFacebook />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
