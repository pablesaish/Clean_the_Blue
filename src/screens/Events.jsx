import React, { useState, useEffect, useContext } from 'react';
import EventCard from '../Components/EventCard';
import { AuthContext } from '../Components/AuthContext';

// Placeholder event images for India-specific events
import eventImageIndia1 from '/images/event_image1.jpg'; // Example: Beach cleanup in Mumbai
import eventImageIndia2 from '/images/event_image2.jpg'; // Example: River cleanup in Varanasi
import eventImageIndia3 from '/images/event_image3.jpg'; // Example: Lake cleanup in Kerala
import eventImageIndia4 from '/images/event_image4.jpg'; // Example: Coastal awareness workshop
import eventImageIndia5 from '/images/event_image5.jpg';

const Events = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dummy event data - India specific
  const dummyEvents = [
    {
      id: 'event-india-1',
      title: 'Mumbai Beach Cleanup Drive',
      description: 'Join us to clean the iconic Juhu Beach. Every hand helps make a difference!',
      date: '2025-10-28',
      time: '07:00 AM',
      location: 'Juhu Beach, Mumbai',
      image: eventImageIndia1,
      participants: 180,
    },
    {
      id: 'event-india-2',
      title: 'Ganges River Cleaning Initiative',
      description: 'A dedicated effort to clear plastic and waste from the sacred banks of the Ganges.',
      date: '2025-11-10',
      time: '06:30 AM',
      location: 'Assi Ghat, Varanasi',
      image: eventImageIndia2,
      participants: 110,
    },
    {
      id: 'event-india-3',
      title: 'Kerala Backwaters Cleanup',
      description: 'Boating and cleaning operations across the serene backwaters of Alleppey.',
      date: '2025-11-25',
      time: '09:00 AM',
      location: 'Alleppey Backwaters, Kerala',
      image: eventImageIndia3,
      participants: 90,
    },
    {
      id: 'event-india-4',
      title: 'Chennai Coastal Awareness Camp',
      description: 'An interactive workshop on marine life conservation and plastic pollution solutions.',
      date: '2025-12-05',
      time: '04:00 PM',
      location: 'Marina Beach Promenade, Chennai',
      image: eventImageIndia4,
      participants: 60,
    },
    {
      id: 'event-india-5',
      title: 'Goa Beach & Reef Cleanup',
      description: 'Collaborative effort for beach cleaning and underwater reef protection in Goa.',
      date: '2025-12-18',
      time: '08:00 AM',
      location: 'Palolem Beach, Goa',
      image: eventImageIndia5, // Reusing image for demo
      participants: 150,
    },
  ];

  useEffect(() => {
    // Simulate fetching events from an API
    setLoading(true);
    setTimeout(() => {
      setEvents(dummyEvents);
      setLoading(false);
    }, 500);
  }, []);

  const handleRegister = (eventId) => {
    if (!user || !user.email) {
      alert("You must be logged in to register for an event.");
      return;
    }

    const userRegistrations = JSON.parse(localStorage.getItem(`registrations_${user.email}`) || '[]');
    if (!userRegistrations.includes(eventId)) {
      const updatedRegistrations = [...userRegistrations, eventId];
      localStorage.setItem(`registrations_${user.email}`, JSON.stringify(updatedRegistrations));
      
      setEvents(prevEvents => 
        prevEvents.map(event => 
          event.id === eventId ? { ...event, participants: event.participants + 1 } : event
        )
      );
      alert(`Successfully registered for ${events.find(e => e.id === eventId)?.title || 'this event'}!`);
    } else {
      alert("You are already registered for this event.");
    }
  };

  const handleUnregister = (eventId) => {
    if (!user || !user.email) return;

    const userRegistrations = JSON.parse(localStorage.getItem(`registrations_${user.email}`) || '[]');
    const updatedRegistrations = userRegistrations.filter(id => id !== eventId);
    localStorage.setItem(`registrations_${user.email}`, JSON.stringify(updatedRegistrations));
    
    setEvents(prevEvents => 
      prevEvents.map(event => 
        event.id === eventId ? { ...event, participants: event.participants - 1 } : event
      )
    );
    alert(`Successfully unregistered from ${events.find(e => e.id === eventId)?.title || 'this event'}.`);
  };

  const pageBg = '/images/Beach_cleanup.jpg'; // Your chosen background image

  return (
    <div
      className="min-h-[100vh] py-20 px-4 sm:px-6 lg:px-8 text-white bg-cover bg-fixed bg-center select-none"
      style={{
        backgroundImage: `linear-gradient(
         rgba(168, 210, 255, 0.7), 
         rgba(41, 177, 204, 0.6), 
         rgba(110, 251, 220, 0.5)
        ), url(${pageBg})`,    
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center drop-shadow-lg mb-12 font-mono">
          Upcoming Events in India
        </h1>

        {loading && <p className="text-center text-xl">Loading events...</p>}
        {error && <p className="text-center text-xl text-red-300">Error: {error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onRegister={handleRegister}
              onUnregister={handleUnregister}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;


