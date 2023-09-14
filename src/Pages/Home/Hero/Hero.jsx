import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-indigo-800 to-purple-600 text-white py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Your Name</h1>
                <p className="text-lg mb-8">Web Developer | UI/UX Designer</p>
                <div className="flex justify-center space-x-4">
                    <a
                        href="https://github.com/yourgithub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-indigo-300 transition duration-300"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourlinkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-indigo-300 transition duration-300"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://twitter.com/yourtwitter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-indigo-300 transition duration-300"
                    >
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
