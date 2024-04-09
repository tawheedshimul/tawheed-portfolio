import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ParallaxComponent = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='-mt-[60px]' style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -scrollPosition * 0.3, left: 0, right: 0, bottom: 0 }}>
        {children}
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <ParallaxComponent>
      <div style={{ backgroundImage: `url('https://i.ibb.co/R20VbdF/banner.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="absolute inset-0 pt-40 ps-2 text-white">
          <div className="text-[70px] hidden lg:block font-bold">I'M PROFESSIONAL</div>
          <div className="text-[70px] hidden lg:block font-bold">WEB DEVELOPER</div>
          <div className="text-4xl font-bold lg:hidden">I'M PROFESSIONAL</div>
          <div className="text-4xl font-bold lg:hidden">WEB DEVELOPER</div>

          {/* bottom div  */}
          <div className='lg:flex pt-28 justify-between items-center pe-2'>
            <p>
              I SPECIALIZE IN NEXT AND REACT JS. I'LL BUILD FOR YOU HIGH QUALITY WEBSITE.
            </p>
            <Link to="/contact" className='bg-gray-600 p-2 rounded-full bg-opacity-50 border flex items-center space-x-1'><p>GET IN TOUCH</p> <FaArrowRight/> </Link>
          </div>
        </div>
      </div>
    </ParallaxComponent>
  );
};

export default Banner;
