import React, { useState, useEffect } from 'react';
import { HiArrowSmallUp } from "react-icons/hi2";

const BacktoTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsVisible(scrollTop > 300); // Show the button when scroll position is greater than 300px
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Scroll smoothly to the top
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`fixed bottom-16 z-50 right-4 bg-red-600 text-white px-8 py-2 rounded ${isVisible ? 'block' : 'hidden'}`}
            onClick={scrollToTop}
        >
            <HiArrowSmallUp></HiArrowSmallUp>
        </button>
    );
};

export default BacktoTop;