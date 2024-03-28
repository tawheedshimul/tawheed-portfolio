import React from 'react';
import { HiHome } from 'react-icons/hi2';
import BacktoTop from '../BacktoTop/BacktoTop';
import { SiAboutdotme } from "react-icons/si";
import { FaBlenderPhone } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import { FaProjectDiagram } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="bg-gray-200 dark:bg-black py-4 border-t border-red-600">
      <BacktoTop/>
      {/* div 1  */}
      <div className="container mx-auto flex px-2 justify-between items-center">
        <Link to="/" style={{ color: location.pathname === '/' ? '#f00' : '#fff' }}>
          <HiHome className="text-3xl" />
        </Link>
        <Link to='/about' style={{ color: location.pathname === '/about' ? '#f00' : '#fff' }}>
          <SiAboutdotme className="text-3xl" />
        </Link>
        <Link to='/contact' style={{ color: location.pathname === '/contact' ? '#f00' : '#fff' }}>
          <FaBlenderPhone className="text-3xl" />
        </Link>
        <Link to='/service' style={{ color: location.pathname === '/service' ? '#f00' : '#fff' }}>
          <MdConstruction className="text-3xl" />
        </Link>
        <Link to='/projects' style={{ color: location.pathname === '/projects' ? '#f00' : '#fff' }}>
          <FaProjectDiagram className="text-3xl" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
