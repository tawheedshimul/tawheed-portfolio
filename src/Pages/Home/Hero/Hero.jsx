import React from "react";
import TypewriterEffect from "../TypewriterEffect/TypewriterEffect";
import { Link } from "react-router-dom";
import atom from '../../../../public/atom.png'

const Hero = () => {
    return (
        <div style={{ backgroundImage: "url('https://i.ibb.co/dk2pbZK/823985479947.jpg')" }} className="bg-cover">
            <div className="container mx-auto py-14">
                <div className="flex flex-col lg:flex-row justify-center items-strech mx-4">
                    <div className="lg:w-4/12 flex justify-center items-center">
                        <div>
                            <h1 className="dark:text-white text-4xl md:text-5xl xl:text-6xl h-8 w-full font-semibold text-gray-900 w-7/12"><TypewriterEffect></TypewriterEffect></h1>
                            <p className="dark:text-gray-300 font-serif text-justify md:container lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600">Hi, I'm Tawheed Shimul, a passionate web developer with over 2 years of experience. <br />

                                I specialize in front-end development and enjoy creating visually appealing and interactive user interfaces.
                                <br />
                                My skills include HTML, CSS, JavaScript, and various front-end frameworks like React and Vue.js.
                                <br />
                                I am dedicated to delivering high-quality website</p>
                        </div>
                    </div>
                    <div className="lg:w-8/12 mt-6 md:mt-8 lg:mt-0">
                        <div className="relative w-full h-full">

                            <img src={atom} className="object-right w-[500px] object-cover animate-spin h-[500px] relative hidden lg:block" />
                            <img src={atom} className="h-[300px] mx-auto  animate-spin lg:hidden dark:brightness-50" />
                            <div className="hidden lg:block absolute bottom-0 right-0 bg-red-200 w-1/2">
                                <Link to='/about' className="dark:hover:bg-gray-800 dark:bg-white dark:hover:text-gray-50 dark:text-gray-800 bg-gray-800 text-xl xl:text-2xl font-medium text-white flex justify-between w-full items-center p-5 xl:p-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
                                    Know More About Me...
                                    <div>
                                        <svg className="fill-stroke dark:hover:text-gray-600" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.66663 16H25.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M20 21.3333L25.3333 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M20 10.667L25.3333 16.0003" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-8 lg:hidden">
                            <Link to="/about" className="dark:hover:bg-gray-800 dark:bg-white dark:hover:text-gray-50 dark:text-gray-800 bg-gray-800 text-base md:text-xl font-semibold leading-tight text-white flex justify-between items-center px-5 py-4 lg:py-7 lg:px-7 w-full md:w-5/12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
                                Know More About Me...
                                <div>
                                    <svg className="fill-stroke" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0)">
                                            <path d="M0.453735 12H14.4537" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.4539 16L14.4539 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.4539 8L14.4539 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="21.7269" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
