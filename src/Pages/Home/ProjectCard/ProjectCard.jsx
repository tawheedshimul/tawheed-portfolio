import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function ProjectCard() {
    const [mern, setMern] = useState([]);

    useEffect(() => {
        fetch('/mernData.json') // Make sure the path is correct
            .then((response) => response.json())
            .then((data) => setMern(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='bg-gray-800 p-3 text-white'>
            <h2 className='text-center  text-gray-600 text-3xl bg-gray-200 p-4 rounded font-semibold'>
                Knowledge
            </h2>

            <div className='container mx-auto flex justify-center'>
                <div className='mt-4 flex overflow-x-auto gap-4 mb-4'>
                    {mern.map((item) => (
                        <div key={item.id}>
                            <div className=' w-72 border  rounded overflow-hidden shadow-lg'>
                                <img className='h-64 w-full' src={item.img} alt={item.title} />
                                <div className='px-6 py-4 bg-black bg-opacity-70'>
                                    <div className='font-bold text-xl mb-2'>{item.title}</div>
                                    <p className='text-gray-700 dark:text-white text-base'>
                                        {item.description}
                                    </p>
                                </div>
                                <div className='px-6 pt-4 pb-2'>
                                    <Link to={`/project/${item.id}`} className='inline-block bg-gray-200 dark:bg-white rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                                        See More...
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
