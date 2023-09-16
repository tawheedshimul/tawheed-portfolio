// src/components/Contact.js
import React from "react";
import { FaEnvelope, FaPhone, FaMapMarker, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center dark:bg-gray-800 dark:text-gray-100 items-center container mx-auto bg-gray-100">
            <div className="bg-white p-8 rounded shadow-lg w-fill">
                <div>
                    <h1 className="text-3xl font-semibold mb-4">Contact Me</h1>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                        <div className="flex items-center mb-2">
                            <FaEnvelope className="text-gray-600 mr-2" />
                            <span>Email: your.email@example.com</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <FaPhone className="text-gray-600 mr-2" />
                            <span>Phone: (123) 456-7890</span>
                        </div>
                        <div className="flex items-center">
                            <FaMapMarker className="text-gray-600 mr-2" />
                            <span>Location: Your City, Country</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Contact Form</h2>
                        <p className="mb-4">
                            Feel free to send me a message using the contact form below. I'll get back to you as soon as possible.
                        </p>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-600 font-semibold mb-2" htmlFor="name">
                                    Your Name
                                </label>
                                <input
                                    className="border border-gray-300 rounded w-full py-2 px-3"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-600 font-semibold mb-2" htmlFor="email">
                                    Your Email
                                </label>
                                <input
                                    className="border border-gray-300 rounded w-full py-2 px-3"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="youremail@example.com"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-600 font-semibold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="border border-gray-300 rounded w-full py-2 px-3 h-32 resize-none"
                                    id="message"
                                    name="message"
                                    placeholder="Type your message here..."
                                    required
                                />
                            </div>
                            <div className="text-center">
                                <button
                                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                                    type="submit"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-2">Connect with Me</h2>
                        <p className="mb-4">
                            Let's connect on social media to stay updated with my latest work and projects.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://linkedin.com/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                <FaLinkedin className="text-xl" /> LinkedIn
                            </a>
                            <a
                                href="https://twitter.com/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline"
                            >
                                <FaTwitter className="text-xl" /> Twitter
                            </a>
                            <a
                                href="https://github.com/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-800 hover:underline"
                            >
                                <FaGithub className="text-xl" /> GitHub
                            </a>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-2">My Location</h2>
                        <p className="mb-4">
                            You can find me here. Feel free to reach out or stop by for a coffee.
                        </p>
                        <div className="rounded-lg overflow-hidden">
                            {/* Add an iframe with Google Maps or other map service here */}
                            <iframe
                                title="My Location"
                                width="100%"
                                height="300"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-122.084249!3d37.422186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbbc1f65e14af%3A0xf9df6a42e6cbf160!2sYour%20Location!5e0!3m2!1sen!2sus!4v1631512345678!5m2!1sen!2sus"
                                frameBorder="0"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
