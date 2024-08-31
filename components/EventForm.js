// src/components/EventForm.js
import React, { useState } from 'react';
import { createEvent } from '../services/api';

const EventForm = ({ token }) => {
  const [event, setEvent] = useState({
    name: '',
    description: '',
    location: { type: 'Point', coordinates: [] },
    date: '',
    organizer: '',
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createEvent(event, token).then(() => {
      setEvent({
        name: '',
        description: '',
        location: { type: 'Point', coordinates: [] },
        date: '',
        organizer: '',
      });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={event.name} onChange={handleChange} placeholder="Event Name" required />
      <input type="text" name="description" value={event.description} onChange={handleChange} placeholder="Description" required />
      <input type="text" name="location" value={event.location.coordinates.join(', ')} onChange={handleChange} placeholder="Location (lat, long)" required />
      <input type="date" name="date" value={event.date} onChange={handleChange} required />
      <input type="text" name="organizer" value={event.organizer} onChange={handleChange} placeholder="Organizer" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventForm;
