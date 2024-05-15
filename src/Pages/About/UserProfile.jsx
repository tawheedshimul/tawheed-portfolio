import React from 'react';
import { FaCheckCircle, FaDownload, FaFileDownload } from 'react-icons/fa';

function UserProfile() {
  const cvDownload = () => {
    const link = document.createElement('a');
    link.href =
      'https://drive.google.com/uc?id=1rGLpAz2uhkb5NBDNa3OMLwG73jKGwzt5&export=download';
    link.download = 'TawheedCv.pdf';
    link.rel = 'noopener noreferrer'; // Add rel attribute for security
    link.target = '_blank'; // Open in a new tab
    link.click();
  };

  const certificateDownload = () => {
    const link = document.createElement('a');
    link.href =
      'https://drive.google.com/uc?id=18xtGDIu8jL3l0BTvlMz4lym1Uq31WZE2&export=download';
    link.download = 'WD Certificate.pdf';
    link.rel = 'noopener noreferrer'; // Add rel attribute for security
    link.target = '_blank'; // Open in a new tab
    link.click();
  };

  return (
    <div className=" rounded-t-lg shadow-xl pb-8">
      <div className="w-full h-[250px]">
        {/* <img
          // src="https://i.ibb.co/dk2pbZK/823985479947.jpg"
          className="w-full h-full rounded-tl-lg rounded-tr-lg"
          alt="Profile Background"
          onError={(e) => {
            e.target.src = 'fallback-image-url.jpg'; // Provide a fallback image
            e.target.onerror = null; // Remove the error handler to avoid infinite loops
          }}
        /> */}
      </div>
      <div className="flex flex-col items-center -mt-20">
        <img
          src="https://i.ibb.co/r2ZjV0h/57034730-285019035760717-2703654450811109376-n.jpg"
          className="w-40 border-4 border-white rounded-full"
          alt="Profile"
        />
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-2xl text-white">Md Tawheed Shimul</p>
          <span className="bg-red-500 rounded-full p-1" title="Verified">
            <FaCheckCircle className="text-gray-100 h-6 w-6" />
          </span>
        </div>
        <p className="text-white">Junior React Web Developer</p>
        <p className="text-sm text-white">Kushtia, Bangladesh</p>
      </div>
      <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
        <div className="flex items-center space-x-4 mt-2">
          <button
            onClick={cvDownload}
            className="flex items-center bg-gray-600 dark:bg-gray-100 dark:text-black hover:bg-gray-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
          >
            <FaDownload className="h-4 w-4" />
            <span>Download CV</span>
          </button>
          <button
            onClick={certificateDownload}
            className="flex items-center bg-gray-600 dark:bg-gray-100 dark:text-black hover:bg-gray-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
          >
            <FaFileDownload className="h-4 w-4" />
            <span>Certificate</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
