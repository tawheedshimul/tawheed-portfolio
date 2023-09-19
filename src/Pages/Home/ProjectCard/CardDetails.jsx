import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";

const CardDetails = () => {
    const { id } = useParams(); // Get the service ID from the URL parameter
    const [service, setService] = useState(null);

    useEffect(() => {
        // Fetch the specific service data based on the ID
        fetch('/mernData.json') // The path is relative to the public folder
            .then((response) => response.json())
            .then((data) => {
                const selectedService = data.find((item) => item.id === parseInt(id, 10));
                setService(selectedService);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [id]);

    if (!service) {
        return <div className="text-red-500">
            <Loader></Loader>
        </div>;
    }

    const { img, title, description } = service;

    return (
        <div className="flex justify-center items-center">
            <div className="bg-white dark:bg-black dark:text-white border dark:border-gray-300 shadow-md rounded-lg container mx-auto">
                <img src={img} alt={title} className="w-full h-full object-cover" />
                <div className="p-4">
                    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                    <p className="mb-4 text-justify">{description}</p>
                    <p className="text-justify bg-red-500 text-gray-100 p-2 rounded ">Contact me if you're interested in any kind of cutting-edge, fully functional website. just simply
                        <Link to='/contact' className="relative flex font-semibold w-24 items-center text-black bg-white p-2 rounded">
                            Click Here
                            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
