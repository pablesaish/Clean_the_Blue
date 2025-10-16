import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthContext'; 

const EventCard = ({ event, onRegister, onUnregister }) => {
  const { user } = useContext(AuthContext);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (user && event && user.email) {
      const userRegistrations = JSON.parse(localStorage.getItem(`registrations_${user.email}`) || '[]');
      setIsRegistered(userRegistrations.includes(event.id));
    }
  }, [user, event]);

  const handleRegisterClick = () => {
    if (user) {
      onRegister(event.id);
      setIsRegistered(true);
    } else {
      alert("Please log in to register for an event.");
    }
  };

  const handleUnregisterClick = () => {
    if (user) {
      onUnregister(event.id);
      setIsRegistered(false);
    }
  };

  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = new Date(`2000/01/01 ${event.time}`).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] border border-sky-200">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover object-center" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{event.title}</h3>
        <p className="text-sky-700 text-sm font-medium mb-3">
          <i className="fa-regular fa-calendar-alt mr-2"></i> {formattedDate} at {formattedTime}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>
        <div className="flex items-center justify-between text-gray-700 text-sm mb-4">
          <span><i className="fa-solid fa-location-dot mr-2"></i>{event.location}</span>
          <span><i className="fa-solid fa-users mr-2"></i>{event.participants} registered</span>
        </div>

        {user ? (
          isRegistered ? (
            <button
              onClick={handleUnregisterClick}
              className="w-full bg-red-500 text-white font-semibold py-3 rounded-full transition duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
            >
              Unregister
            </button>
          ) : (
            <button
              onClick={handleRegisterClick}
              className="w-full bg-cyan-600 text-white font-semibold py-3 rounded-full transition duration-300 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-75"
            >
              Register Now
            </button>
          )
        ) : (
          <p className="text-center text-gray-500 text-sm italic">Log in to register for events.</p>
        )}
      </div>
    </div>
  );
};

export default EventCard;


