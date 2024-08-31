// src/components/EventList.js
import React, { useEffect, useState } from 'react';
import { getEvents } from '../services/api';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((response) => {
      setEvents(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
