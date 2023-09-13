import { useState } from "react";
import { FaGithub, FaTwitter, FaLaptop, FaChevronDown } from 'react-icons/fa';

const Footer = () => {
  const [mode, setMode] = useState("auto");

  return (
    <footer className=" py-16">
      <div className="container mx-auto px-4 xl:px-12 2xl:px-4">
        <div className="lg:flex justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex">
            <div className="w-full lg:w-1/2 px-6">
              <ul>
                <li>
                  <a href="#" className="text-sm hover:text-brand">
                    Components
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" className="text-sm hover:text-brand">
                    Templates
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" className="text-sm hover:text-brand">
                    Pricing
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" className="text-sm hover:text-brand">
                    FAQ
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" className="text-sm hover:text-brand">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 px-6">
              <ul>
                <li>
                  <a href="#" className="text-sm hover:text-brand">
                    Free components
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" className="text-sm hover:text-brand">
                    Blog
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" className="text-sm hover:text-brand">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex">
            <div className="w-full lg:w-1/2 px-6">
              <ul>
                <li>
                  <a href="#" className="text-sm hover:text-brand">
                    Privacy policy
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" className="text-sm hover:text-brand">
                    Terms of service
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 px-6 flex flex-col items-start">
              <div className="flex items-center mt-4">
                <a href="#" className="text-gray-800 hover:text-brand">
                  <FaGithub />
                </a>
                <a href="#" className="pl-4">
                  <FaTwitter />
                </a>
              </div>
              <div className="relative w-36 mt-4">
                <div className="text-gray-800 hover:text-brand cursor-pointer">
                  <FaLaptop />
                </div>
                <div className="pl-6">
                  <select
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    className="w-full focus:outline-none pl-2 py-2 bg-gray-900 text-gray-50"
                  >
                    <option value="auto">Auto</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>
                <div className="pointer-events-none absolute inset-0 m-auto mr-3 text-gray-800 icon icon-tabler icon-tabler-chevron-down">
                  <FaChevronDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 flex flex-col items-center">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="86"
            height="58"
            viewBox="0 0 86 58"
          >
            {/* Your SVG code here */}
          </svg>
        </a>
        <p className="mt-4 text-xs leading-none">
          &copy; 2023 Tailwind UI Kit. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
