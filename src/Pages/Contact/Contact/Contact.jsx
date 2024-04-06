import React, { useRef, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarker, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('tportfolio', 'tportfolio', form.current, 'S2gfEm0SlJ-TKuBe5')
            .then((result) => {
                toast.success('Message Sent Successfully');
                // Reset the form to clear input fields
                form.current.reset();
            })
            .catch((error) => {
                toast.error('Message Not Sent');
            });
    };

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);

        // Reset the button state after a delay
        setTimeout(() => {
            setIsClicked(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center mx-auto text-white">
            <div className="mb-16 p-2 rounded shadow-lg w-full">
                <h1 className="text-3xl text-center rounded bg-gray-200 text-black py-2 font-semibold mb-4">Contact Me</h1>

                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div className="card rounded shadow-lg"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="card-header px-4 rounded-t py-3 bg-black">
                            <h2 className="text-xl font-semibold">Contact Information</h2>
                        </div>
                        <div className="card-body bg-white rounded-b px-4 py-3">
                            <ul className="flex flex-col space-y-2">
                                <li className="flex items-center">
                                    <FaEnvelope className="text-gray-600 mr-2" />
                                    <span className="text-black">Email: tawheedshimul@gmail.com</span>
                                </li>
                                <li className="flex items-center">
                                    <FaPhone className="text-gray-600 mr-2" />
                                    <span className="text-black">Phone: (+88) 01811-861331</span>
                                </li>
                                <li className="flex items-center">
                                    <FaMapMarker className="text-gray-600 mr-2" />
                                    <span className="text-black">Location: Kushtia, Bangladesh</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div className="card rounded shadow-lg"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="card-header px-4 rounded-t py-3 bg-black">
                            <h2 className="text-xl font-semibold">Contact Form</h2>
                        </div>
                        <div className="card-body bg-white rounded-b px-4 py-3">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="mb-4">
                                    <label className="block text-gray-600 font-semibold mb-2" htmlFor="name">
                                        Your Name
                                    </label>
                                    <input
                                        className="border border-gray-300 rounded w-full py-2 px-3"
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        required
                                        name="user_name"
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
                                        name="user_email"
                                        placeholder="youremail@example.com"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-600 font-semibold mb-2" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        className="border text-black border-gray-300 rounded w-full py-2 px-3 h-32 resize-none"
                                        id="message"
                                        name="message"
                                        placeholder="Type your message here..."
                                        required
                                    />
                                </div>
                                <div className="text-center">
                                    <input onClick={handleClick} className="bg-gray-600 cursor-pointer text-white  py-2 px-4 rounded transition duration-300" type="submit" value={isClicked ? 'SUBMITTING' : 'SUBMIT'} />
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
                {/* maps item  */}
                <div className="mt-8">
                    <motion.div className="card rounded  shadow-lg"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h2 className="card-header px-4 rounded-t py-3 bg-black text-xl font-semibold mb-2">My Location</h2>
                        <div className="card-body bg-white rounded-b px-4 py-3">
                            <p className="mb-4">You can find me here. Feel free to reach out or stop by for a coffee.</p>
                            <div className="rounded-lg overflow-hidden">
                                {/* Placeholder for Google Maps */}
                                <iframe
                                    className="gmap_iframe"
                                    width="100%"
                                    height='300px'
                                    frameborder="0"
                                    scrolling="no"
                                    marginheight="0"
                                    marginwidth="0"
                                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Kushtia&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
