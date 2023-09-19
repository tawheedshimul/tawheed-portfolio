import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate an asynchronous operation, like fetching data
        setTimeout(() => {
            setIsLoading(false);
        }, 100000000); // Simulate loading for 3 seconds
    }, []);

    return (
        <div className="loader-container">
            {isLoading && <div className="loader"></div>}
        </div>
    );
};

export default Loader;
