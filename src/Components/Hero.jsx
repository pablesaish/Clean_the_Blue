import React, { useContext } from "react"; // Import useContext
import { AuthContext } from './AuthContext';  // Import AuthContext
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import beachBg from "/images/Beach_cleanup.jpg";

const Hero = () => {
  const { user, logout } = useContext(AuthContext); // Get user and logout from AuthContext
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div
      className="w-full min-h-[100vh] flex items-center justify-center text-white bg-cover bg-center select-none"
      style={{
        backgroundImage: `linear-gradient(
         rgba(168, 210, 255, 0.7), 
         rgba(41, 177, 204, 0.6), 
         rgba(110, 251, 220, 0.5)
        ), url(${beachBg})`,    
      }}
    >
      <div className="text-center max-w-4xl px-6">
        {user ? ( // Conditional rendering based on user login status
          <div className="bg-white/90 p-8 rounded-lg shadow-xl text-gray-800">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Welcome, {user.name}!</h1>
            <p className="text-lg mb-2">Email: {user.email}</p>
            <p className="text-md text-gray-600 mb-6">Thank you for being a part of Clean the Blue!</p>
            <button 
              onClick={handleLogout} 
              className="bg-red-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg cursor-pointer hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <h1 className="text-5xl md:text-6xl font-semibold drop-shadow-lg font-mono">
              One Ocean,One Mission.
            </h1>
            <p className="max-w-xl mx-auto mt-4 mb-2 leading-relaxed text-lg">
              Thousands of hands, Millions of pieces removed.
            </p>
            <p className="max-w-xl mx-auto mb-6 leading-relaxed text-lg">
              Cleanups. Community. Change.
            </p>
            <button className="group inline-flex items-center gap-2 bg-white text-sky-700 font-semibold px-6 py-3 rounded-full shadow-lg cursor-pointer hover:bg-slate-100 transition duration-300 hover:-translate-y-0.5 overflow-hidden">
              <a href="/Events">Explore more<i className="fa-solid fa-arrow-right"></i></a>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;