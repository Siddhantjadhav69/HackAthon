// src/components/ServiceForm.js
import React, { useState } from 'react';
import { createService } from '../services/api';

const ServiceForm = ({ token }) => {
  const [service, setService] = useState({
    name: '',
    description: '',
    location: { type: 'Point', coordinates: [] },
    contact: '',
  });

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createService(service, token).then(() => {
      setService({
        name: '',
        description: '',
        location: { type: 'Point', coordinates: [] },
        contact: '',
      });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={service.name} onChange={handleChange} placeholder="Service Name" required />
      <input type="text" name="description" value={service.description} onChange={handleChange} placeholder="Description" required />
      <input type="text" name="location" value={service.location.coordinates.join(', ')} onChange={handleChange} placeholder="Location (lat, long)" required />
      <input type="text" name="contact" value={service.contact} onChange={handleChange} placeholder="Contact" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ServiceForm;
