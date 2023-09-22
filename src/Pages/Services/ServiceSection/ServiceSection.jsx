import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const [servicesData, setServicesData] = useState({ services: [] });

  useEffect(() => {
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => setServicesData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="services-section grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
      {servicesData.services.map((service) => (
        <div
          className="service-card w-fit p-4 rounded-lg shadow-lg bg-white"
          key={service.id}
        >
          <img
            src={service.image}
            alt={service.role}
            className="mx-auto w-full h-56 rounded"
          />
          <h3 className="text-lg font-semibold mt-4">{service.role}</h3>
          <Link
            to={`/services/${service.id}`}
            className="mt-4 block font-semibold text-gray-100 bg-gray-600 p-2 rounded text-center"
          >
            See More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
