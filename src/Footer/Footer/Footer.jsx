import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import BacktoTop from '../BacktoTop/BacktoTop';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-gray-200 dark:bg-black py-4">
      <BacktoTop></BacktoTop>
      <div className="container mx-auto flex justify-center items-center">
        <div className="mr-6">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 transition duration-300"
          >
            <FaFacebookSquare size={32} />
          </a>
        </div>
        <div className="mr-6">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-cyan-500 transition duration-300"
          >
            <FaTwitterSquare size={32} />
          </a>
        </div>
        <div className="mr-6">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-green-800 transition duration-300"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-500 transition duration-300"
          >
            <FaGithubSquare size={32} />
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-gray-800 dark:text-white text-sm">
          &copy; 2022 - {currentYear} Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
