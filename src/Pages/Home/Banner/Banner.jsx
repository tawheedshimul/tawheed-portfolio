import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="relative h-screen mt-[-60px] " style={{backgroundImage: `url('https://i.ibb.co/R20VbdF/banner.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
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
            <button className='bg-gray-600 p-2 rounded-full bg-opacity-50 border flex items-center space-x-1'><p>GET IN TOUCH</p> <FaArrowRight/> </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
