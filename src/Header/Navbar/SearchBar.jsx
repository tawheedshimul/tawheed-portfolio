import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSearchClick = () => {
    setShowSearchBar(true);
  };

  return (
    <div className="flex items-center">
      {isMobile ? (
        showSearchBar ? (
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className=" py-2 w-2/3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        ) : (
          <button
            className="bg-gray-200 p-2 rounded-full transition-all duration-300 ease-in-out"
            onClick={handleSearchClick}
          >
            <FiSearch className="h-6 w-6 text-gray-600" />
          </button>
        )
      ) : (
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
