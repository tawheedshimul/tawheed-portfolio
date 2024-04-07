import React from 'react';
import { HiHome } from 'react-icons/hi2';
import BacktoTop from '../BacktoTop/BacktoTop';
import { SiAboutdotme } from "react-icons/si";
import { FaBlenderPhone } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import { FaProjectDiagram } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, icon, location }) => {
  const isActive = location.pathname === to;
  const Icon = icon;

  return (
    <Link to={to} style={{ color: isActive ? '#fff' : '#808080' }}>
      <div className={isActive ? 'animated-border' : ''}>
        <Icon className="text-3xl" />
      </div>
    </Link>
  );
};

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="bg-gray-200 dark:bg-black py-4 border-t">
      <BacktoTop/>
      {/* div 1  */}
      <div className="container mx-auto flex px-2 justify-between items-center">
        <NavLink to='/about' icon={SiAboutdotme} location={location} />
        <NavLink to='/contact' icon={FaBlenderPhone} location={location} />
        <NavLink to='/' icon={HiHome} location={location} />
        <NavLink to='/service' icon={MdConstruction} location={location} />
        <NavLink to='/projects' icon={FaProjectDiagram} location={location} />
      </div>
    </footer>
  );
};

export default Footer;
