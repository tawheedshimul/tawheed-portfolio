import React, { useState, useEffect } from 'react';

function CardList() {
    // State to store data fetched from the API
    const [cards, setCards] = useState([]);

    // Simulate fetching data from an API using useEffect
    useEffect(() => {
        // Replace this with your actual API endpoint
        fetch('project.json')
            .then((response) => response.json())
            .then((data) => setCards(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <section className="flex flex-col justify-center dark:bg-black dark:text-white max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
            <div className="flex flex-wrap items-center justify-between mb-8">
                <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">
                    Continually Scale Results
                </h2>
                <a
                    href="#"
                    className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
                >

                </a>
            </div>

            <div className="flex flex-wrap -mx-4 ">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col  hover:scale-110 transition duration-500 ease-in-out"
                    >
                        <img
                            src={card.imageUrl}
                            alt={`Card ${index} img`}
                            className="object-cover object-center w-full h-48"
                        />
                        <div className="flex flex-grow">
                            <div className="triangle"></div>
                            <div className="flex flex-col justify-between px-4 py-6  border border-gray-400 dark:border-white">
                                <div>
                                    <a
                                        href="#"
                                        className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-cyan-400"
                                    >
                                        {card.category}
                                    </a>
                                    <a
                                        href="#"
                                        className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-cyan-400"
                                    >
                                        {card.title}
                                    </a>
                                    <p className="mb-4">{card.description}</p>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="inline-block pb-1 mt-2 text-base  font-black text-white bg-gray-600 px-2 rounded dark:text-gray-600 dark:bg-white uppercase border-b border-transparent hover:border-blue-600"
                                    >
                                        See More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CardList;
