// src/components/ServiceList.js
import React, { useEffect, useState } from 'react';
import { getServices } from '../services/api';

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then((response) => {
      setServices(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service._id}>{service.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
