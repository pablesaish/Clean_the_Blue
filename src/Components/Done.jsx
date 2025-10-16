// import React, { useState, useEffect, useRef } from 'react';

// const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY_HERE'; 

// // --- Helper Components & SVGs ---
// const Logo = () => (
//     <div className="flex items-baseline cursor-pointer text-2xl font-extrabold tracking-tight text-gray-800">
//         <span className="text-cyan-600">CLEAN</span>
//         <span className="text-xl font-medium text-gray-500 mx-px">the</span>
//         <span className="text-cyan-600">BLUE</span>
//     </div>
// );
// const MapPin = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-1 inline-block text-gray-500"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
// const Calendar = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-1 inline-block text-gray-500"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>;
// const Users = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-1 inline-block text-gray-500"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
// const LogOutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg>;
// const UploadCloudIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-2"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>;
// const Trash2 = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>;
// const Clock = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
// const CalendarCheck = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>;


// // --- Updated Mock Data for Mumbai Preview ---
// const mockStats = {
//     wasteCollected: 12580, volunteers: 4500, cleanups: 320,
// };

// const mockTestimonials = [
//     { name: "Ananya S.", text: "Being part of CleanTheBlue has been so rewarding. It feels great to make a visible difference at Juhu Beach.", avatar: "https://placehold.co/100x100/e8c3b9/7a4a3a?text=AS" },
//     { name: "Rohan M.", text: "Organizing an event at Versova was surprisingly easy! The platform gave me all the tools I needed.", avatar: "https://placehold.co/100x100/d4e8b9/4e7a3a?text=RM" },
// ];

// const liveMumbaiEvents = [
//     // This event is now in the past to show the "Aftermath" feature
//     { 
//         _id: '1', 
//         title: 'Juhu Beach Cleanup Drive', 
//         location: 'Juhu Beach, Mumbai', 
//         date: '2025-09-27T09:00:00.000Z', // Past date
//         description: "Join us this Saturday for our weekly cleanup at the iconic Juhu Beach. Let's work together to restore its beauty. Gloves and bags will be provided.", 
//         volunteersNeeded: 75, 
//         volunteersRegistered: [], 
//         lat: 19.1074, 
//         lng: 72.8263, 
//         imageUrl: "https://placehold.co/600x400/3498db/ffffff?text=Juhu+Beach",
//         aftermathPhotos: {
//             before: [
//                 "https://placehold.co/600x400/95a5a6/ffffff?text=Juhu+Before+1",
//                 "https://placehold.co/600x400/bdc3c7/ffffff?text=Juhu+Before+2"
//             ],
//             after: [
//                  "https://placehold.co/600x400/1abc9c/ffffff?text=Juhu+After+1+(Official)",
//             ]
//         }
//     },
//     { _id: '2', title: 'Versova Beach Mega Cleanup', location: 'Versova Beach, Mumbai', date: '2025-10-11T08:00:00.000Z', description: "Continuing the amazing work started by Afroz Shah, we're hosting a mega cleanup at Versova Beach. Every pair of hands counts!", volunteersNeeded: 150, volunteersRegistered: [], lat: 19.1328, lng: 72.8155, imageUrl: "https://placehold.co/600x400/2ecc71/ffffff?text=Versova+Beach", aftermathPhotos: { before: [], after: [] } },
//     { _id: '3', title: 'Post-Festival Cleanup at Dadar Chowpatty', location: 'Dadar Chowpatty, Mumbai', date: '2025-10-18T09:30:00.000Z', description: "Help us clean Dadar Chowpatty after the recent festivities. Let's ensure our beaches remain pristine for everyone to enjoy.", volunteersNeeded: 100, volunteersRegistered: [], lat: 19.0194, lng: 72.8360, imageUrl: "https://placehold.co/600x400/e74c3c/ffffff?text=Dadar+Chowpatty", aftermathPhotos: { before: [], after: [] } },
//     { _id: '4', title: 'Aksa Beach Coastal Care', location: 'Aksa Beach, Malad, Mumbai', date: '2025-10-25T08:30:00.000Z', description: "Aksa Beach needs our help! We'll be focusing on the northern end to clear plastic debris washed ashore.", volunteersNeeded: 50, volunteersRegistered: [], lat: 19.1768, lng: 72.7953, imageUrl: "https://placehold.co/600x400/9b59b6/ffffff?text=Aksa+Beach", aftermathPhotos: { before: [], after: [] } },
// ];

// // --- Google Maps Component ---
// const MapDisplay = ({ events, center, zoom, className }) => {
//     const mapRef = useRef(null);
//     const mapInstance = useRef(null);
//     const markersRef = useRef([]);
//     const infoWindowRef = useRef(null);

//     useEffect(() => {
//         if (!mapRef.current || !window.google?.maps) {
//             return;
//         }

//         if (!mapInstance.current) {
//             mapInstance.current = new window.google.maps.Map(mapRef.current, {
//                 center,
//                 zoom,
//                 mapId: 'CLEAN_THE_BLUE_MAP',
//                 disableDefaultUI: true,
//                 zoomControl: true,
//             });
//             infoWindowRef.current = new window.google.maps.InfoWindow();
//         }

//     }, [center, zoom]);

//     useEffect(() => {
//         if (!mapInstance.current || !window.google?.maps) {
//             return;
//         }

//         markersRef.current.forEach(marker => marker.setMap(null));
//         markersRef.current = [];

//         events.forEach(event => {
//             const marker = new window.google.maps.Marker({
//                 position: { lat: event.lat, lng: event.lng },
//                 map: mapInstance.current,
//                 title: event.title,
//                 animation: window.google.maps.Animation.DROP,
//             });

//             const contentString = `<div class="p-2">
//                 <h3 class="font-bold text-lg">${event.title}</h3>
//                 <p class="text-gray-600">${event.location}</p>
//             </div>`;

//             marker.addListener('click', () => {
//                 if (infoWindowRef.current) {
//                     infoWindowRef.current.setContent(contentString);
//                     infoWindowRef.current.open(mapInstance.current, marker);
//                 }
//             });
//             markersRef.current.push(marker);
//         });

//         if (events.length > 1) {
//             const bounds = new window.google.maps.LatLngBounds();
//             events.forEach(event => {
//                 bounds.extend(new window.google.maps.LatLng(event.lat, event.lng));
//             });
//             mapInstance.current.fitBounds(bounds);
//         } else if (events.length === 1) {
//             mapInstance.current.setCenter({ lat: events[0].lat, lng: events[0].lng });
//             mapInstance.current.setZoom(13);
//         } else {
//             mapInstance.current.setCenter(center);
//             mapInstance.current.setZoom(zoom);
//         }

//     }, [events, center, zoom]);

//     return <div ref={mapRef} className={className}></div>;
// };


// // --- Page Components ---
// const HomePage = ({ setCurrentPage, mockEvents }) => {
//     const AnimatedCounter = ({ value }) => {
//         const [count, setCount] = useState(0);
//         useEffect(() => {
//             const duration = 2000;
//             const step = Math.ceil(value / (duration / 16));
//             if (value === 0) return;
//             const timer = setInterval(() => {
//                 setCount(prevCount => {
//                     if (prevCount + step >= value) {
//                         clearInterval(timer);
//                         return value;
//                     }
//                     return prevCount + step;
//                 });
//             }, 16);
//             return () => clearInterval(timer);
//         }, [value]);
//         return <span className="text-4xl md:text-5xl font-bold text-blue-500">{count.toLocaleString()}</span>;
//     };
//     return (
//         <div className="animate-fade-in">
//              <section className="relative bg-gray-900 text-white py-20 md:py-32">
//                 <div className="absolute inset-0">
//                     <img src="https://placehold.co/1200x800/000000/ffffff?text=Clean+Mumbai+Beach" alt="Clean Beach" className="w-full h-full object-cover opacity-40" />
//                 </div>
//                 <div className="container mx-auto px-6 text-center relative z-10">
//                     <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Join the Wave of Change.</h1>
//                     <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Empowering communities to organize and participate in beach cleanups. Together, we can turn the tide on ocean pollution.</p>
//                     <div className="flex justify-center gap-4 flex-wrap">
//                         <button onClick={() => setCurrentPage('events')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">Find a Cleanup</button>
//                         <button onClick={() => setCurrentPage('create-event')} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">Organize a Drive</button>
//                     </div>
//                 </div>
//             </section>
//             <section className="py-16 bg-gray-50">
//                 <div className="container mx-auto px-6 text-center">
//                     <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Collective Impact</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
//                         <div className="bg-white p-8 rounded-xl shadow-lg"><AnimatedCounter value={mockStats.wasteCollected} /><p className="mt-2 text-gray-600 text-lg">Kilograms of Waste Collected</p></div>
//                         <div className="bg-white p-8 rounded-xl shadow-lg"><AnimatedCounter value={mockStats.volunteers} /><p className="mt-2 text-gray-600 text-lg">Dedicated Volunteers</p></div>
//                         <div className="bg-white p-8 rounded-xl shadow-lg"><AnimatedCounter value={mockStats.cleanups} /><p className="mt-2 text-gray-600 text-lg">Cleanups Organized</p></div>
//                     </div>
//                 </div>
//             </section>
//              <section className="py-16 bg-white">
//                  <div className="container mx-auto px-6 text-center">
//                     <h2 className="text-3xl font-bold text-gray-800 mb-12">Get Involved in 3 Easy Steps</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//                         <div className="flex flex-col items-center"><div className="bg-blue-100 rounded-full h-24 w-24 flex items-center justify-center mb-4"><span className="text-3xl text-blue-600">🗺️</span></div><h3 className="text-xl font-bold mb-2">1. Find an Event</h3><p className="text-gray-600">Discover local cleanup events on our interactive map.</p></div>
//                         <div className="flex flex-col items-center"><div className="bg-green-100 rounded-full h-24 w-24 flex items-center justify-center mb-4"><span className="text-3xl text-green-600">🤝</span></div><h3 className="text-xl font-bold mb-2">2. Join the Team</h3><p className="text-gray-600">Sign up as a volunteer with a single click.</p></div>
//                         <div className="flex flex-col items-center"><div className="bg-purple-100 rounded-full h-24 w-24 flex items-center justify-center mb-4"><span className="text-3xl text-purple-600">✨</span></div><h3 className="text-xl font-bold mb-2">3. Make an Impact</h3><p className="text-gray-600">Participate, clean, and log your contribution.</p></div>
//                     </div>
//                 </div>
//             </section>
//             <section className="py-16 bg-gray-50">
//                 <div className="container mx-auto px-6">
//                     <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Upcoming Cleanups in Mumbai</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {mockEvents.filter(e => new Date(e.date) >= new Date()).slice(0, 3).map(event => (
//                             <div key={event._id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
//                                 <img src={event.imageUrl || `https://placehold.co/600x400/3498db/ffffff?text=${event.title.replace(' ', '+')}`} alt={event.title} className="w-full h-48 object-cover" />
//                                 <div className="p-6">
//                                     <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
//                                     <p className="text-gray-600 mb-4"><MapPin/> {event.location}<br/><Calendar/> {new Date(event.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
//                                     <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2"><div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(event.volunteersRegistered.length / event.volunteersNeeded) * 100}%` }}></div></div>
//                                     <p className="text-sm text-gray-600"><Users/> {event.volunteersRegistered.length} of {event.volunteersNeeded} spots filled</p>
//                                     <button onClick={() => setCurrentPage(`event/${event._id}`)} className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">View Details</button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                      <div className="text-center mt-12"><button onClick={() => setCurrentPage('events')} className="text-blue-600 hover:text-blue-800 font-semibold text-lg">View All Events &rarr;</button></div>
//                 </div>
//             </section>
//             <section className="py-16 bg-white">
//                 <div className="container mx-auto px-6">
//                     <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">From Our Community</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//                         {mockTestimonials.map(testimonial => (<div key={testimonial.name} className="bg-gray-50 p-6 rounded-lg shadow-sm"><p className="text-gray-600 italic">"{testimonial.text}"</p><div className="flex items-center mt-4"><img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" /><div><p className="font-bold text-gray-800">{testimonial.name}</p><p className="text-sm text-gray-500">Volunteer</p></div></div></div>))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// const EventsPage = ({ setCurrentPage, scriptsLoaded, mockEvents, apiKeyMissing }) => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [dateFilter, setDateFilter] = useState('');
    
//     const filteredEvents = mockEvents.filter(event => {
//         const matchesSearch = event.location.toLowerCase().includes(searchTerm.toLowerCase()) || event.title.toLowerCase().includes(searchTerm.toLowerCase());
//         const matchesDate = dateFilter ? new Date(event.date).toISOString().startsWith(dateFilter) : true;
//         return matchesSearch && matchesDate;
//     }).sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date

//     return (
//         <div className="container mx-auto px-6 py-12">
//             <h1 className="text-4xl font-bold text-gray-800 mb-8">Find a Cleanup in and around Mumbai</h1>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 <div className="md:col-span-1">
//                     <div className="bg-white p-6 rounded-lg shadow-md mb-8 sticky top-24">
//                         <h3 className="text-xl font-bold mb-4">Filter Events</h3>
//                         <input type="text" placeholder="Search by location or title..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg mb-4" />
//                         <input type="date" value={dateFilter} onChange={e => setDateFilter(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg" />
//                     </div>
//                     <div className="space-y-6 h-[60vh] overflow-y-auto pr-2">
//                         {filteredEvents.length > 0 ? filteredEvents.map(event => {
//                             const isPast = new Date(event.date) < new Date();
//                             return (
//                              <div key={event._id} className={`bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ${isPast ? 'opacity-60' : ''}`}>
//                                 {isPast && <span className="text-xs font-bold bg-gray-500 text-white py-1 px-2 rounded-full mb-2 inline-block">COMPLETED</span>}
//                                 <h4 className="font-bold text-lg">{event.title}</h4>
//                                 <p className="text-sm text-gray-600"><MapPin/> {event.location}</p>
//                                 <p className="text-sm text-gray-600"><Calendar/> {new Date(event.date).toLocaleDateString('en-IN')}</p>
//                                 <button onClick={() => setCurrentPage(`event/${event._id}`)} className="mt-2 text-blue-600 hover:underline">View Details &rarr;</button>
//                             </div>
//                         )}) : <p>No events match your criteria.</p>}
//                     </div>
//                 </div>
//                 <div className="md:col-span-2">
//                     <div className="sticky top-24">
//                         {apiKeyMissing ? (
//                             <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg h-96 md:h-[70vh] flex items-center justify-center">
//                                 <p className="font-bold text-center">Map Unavailable<br/><span className="font-normal">A Google Maps API key is required. Please add it to the `App.jsx` file.</span></p>
//                             </div>
//                         ) : scriptsLoaded ? (
//                             <MapDisplay events={filteredEvents} center={{ lat: 19.0760, lng: 72.8777 }} zoom={10} className="h-96 md:h-[70vh] rounded-lg shadow-lg" />
//                         ) : (
//                             <div className="bg-gray-200 rounded-lg h-96 md:h-[70vh] flex items-center justify-center"><p>Loading map...</p></div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const EventDetailsPage = ({ page, setCurrentPage, scriptsLoaded, mockEvents, handleRegisterForEvent, handleUnregisterFromEvent, registeredEvents, apiKeyMissing }) => {
//     const eventId = page.split('/')[1];
//     const event = mockEvents.find(e => e._id === eventId);
//     const isRegistered = registeredEvents.some(e => e._id === eventId);
//     const isPast = new Date(event.date) < new Date();

//     if (!event) {
//         return <div className="p-8 text-center"><h1 className="text-2xl font-bold">Event not found.</h1><button onClick={() => setCurrentPage('events')} className="text-blue-600 hover:underline mt-4">Back to all events</button></div>;
//     }

//     const ActionButton = () => {
//         if (isPast) {
//             return (
//                 <button 
//                     onClick={() => setCurrentPage(`event-aftermath/${event._id}`)}
//                     className='mt-4 w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 text-xl'
//                 >
//                     View Cleanup Results
//                 </button>
//             );
//         }
//         if (isRegistered) {
//             return (
//                 <button 
//                    onClick={() => handleUnregisterFromEvent(event)}
//                    className='mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 text-xl'
//                >
//                    Unregister
//                </button>
//            );
//         }
//         return (
//             <button 
//                 onClick={() => handleRegisterForEvent(event)}
//                 className='mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 text-xl'
//             >
//                 Register to Volunteer
//             </button>
//         );
//     };

//     return (
//         <div className="container mx-auto px-6 py-12">
//             <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
//                 <div className="lg:col-span-3">
//                     <img src={event.imageUrl || `https://placehold.co/600x400/3498db/ffffff?text=${event.title.replace(' ', '+')}`} alt={event.title} className="w-full h-96 object-cover rounded-lg shadow-lg mb-6"/>
//                     <h1 className="text-4xl font-bold text-gray-800 mb-4">{event.title}</h1>
//                     <div className="flex items-center text-gray-600 mb-6 space-x-6">
//                         <span><MapPin/> {event.location}</span>
//                         <span><Calendar/> {new Date(event.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
//                         {isPast && <span className="text-sm font-bold bg-gray-500 text-white py-1 px-3 rounded-full">COMPLETED</span>}
//                     </div>
//                     <p className="text-gray-700 text-lg leading-relaxed">{event.description}</p>
//                 </div>
//                 <div className="lg:col-span-2">
//                      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
//                         <h2 className="text-2xl font-bold mb-4">Volunteers</h2>
//                         <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
//                             <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${(event.volunteersRegistered.length / event.volunteersNeeded) * 100}%` }}></div>
//                         </div>
//                         <p className="text-center text-lg"><Users/> {event.volunteersRegistered.length} of {event.volunteersNeeded} spots filled</p>
//                         <ActionButton />
//                     </div>
//                     <div className="sticky top-24">
//                         <h3 className="text-xl font-bold mb-4">Event Location</h3>
//                         {apiKeyMissing ? (
//                              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg h-80 flex items-center justify-center">
//                                 <p className="font-bold text-center">Map Unavailable<br/><span className="font-normal">A Google Maps API key is required.</span></p>
//                             </div>
//                         ) : scriptsLoaded ? (
//                             <MapDisplay events={[event]} center={{ lat: event.lat, lng: event.lng }} zoom={13} className="h-80 rounded-lg shadow-lg" />
//                         ) : (
//                             <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center"><p>Loading map...</p></div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const EventAftermathPage = ({ page, mockEvents, registeredEvents, user, handleAddPhoto }) => {
//     const eventId = page.split('/')[1];
//     const event = mockEvents.find(e => e._id === eventId);
//     const wasRegistered = registeredEvents.some(e => e._id === eventId);

//     const [photo, setPhoto] = useState(null);

//     const handleFileChange = (e) => {
//         if (e.target.files && e.target.files[0]) {
//             setPhoto(e.target.files[0]);
//         }
//     };
    
//     const handlePhotoSubmit = (e) => {
//         e.preventDefault();
//         if (!photo) {
//             alert("Please select a photo to upload.");
//             return;
//         }
//         // In a real app, you would upload the file to a server/storage
//         // and get back a URL. Here, we'll simulate it.
//         const mockUrl = `https://placehold.co/600x400/27ae60/ffffff?text=User+Upload!`;
//         handleAddPhoto(eventId, mockUrl);
//         setPhoto(null);
//         e.target.reset();
//     };

//     if (!event) return <div className="p-8 text-center"><h1 className="text-2xl font-bold">Event not found.</h1></div>;

//     return (
//         <div className="container mx-auto px-6 py-12">
//             <h1 className="text-4xl font-bold text-gray-800 mb-2">Cleanup Results</h1>
//             <h2 className="text-2xl text-gray-600 mb-8">{event.title}</h2>
            
//             <div className="mb-12">
//                 <h3 className="text-3xl font-bold text-gray-700 mb-4 border-b pb-2">Before</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {event.aftermathPhotos.before.map((url, index) => (
//                         <img key={index} src={url} alt={`Before photo ${index + 1}`} className="w-full h-64 object-cover rounded-lg shadow-md" />
//                     ))}
//                 </div>
//             </div>

//             <div>
//                 <h3 className="text-3xl font-bold text-green-600 mb-4 border-b pb-2">After</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                      {event.aftermathPhotos.after.map((url, index) => (
//                         <img key={index} src={url} alt={`After photo ${index + 1}`} className="w-full h-64 object-cover rounded-lg shadow-md" />
//                     ))}
//                 </div>
//             </div>
            
//             {user && wasRegistered && (
//                  <div className="mt-16 bg-white p-8 rounded-lg shadow-lg border">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-4">Share Your Impact!</h3>
//                     <p className="text-gray-600 mb-6">You were registered for this event. Upload your 'after' photo to the gallery.</p>
//                     <form onSubmit={handlePhotoSubmit} className="flex flex-col sm:flex-row items-center gap-4">
//                         <label className="flex-grow w-full sm:w-auto bg-gray-100 p-4 rounded-lg border-2 border-dashed border-gray-300 text-center cursor-pointer hover:bg-gray-200">
//                             <UploadCloudIcon />
//                             <span>{photo ? photo.name : 'Choose a file...'}</span>
//                             <input type="file" onChange={handleFileChange} className="hidden" accept="image/*" />
//                         </label>
//                         <button type="submit" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300">Upload Photo</button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// const CreateEventPage = ({ handleCreateEvent }) => {
//     const [eventData, setEventData] = useState({ title: '', location: '', date: '', description: '', volunteersNeeded: '', lat: '', lng: '' });
    
//     const handleChange = (e) => setEventData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//     const handleSubmit = (e) => { e.preventDefault(); handleCreateEvent(eventData); };

//     return (
//         <div className="container mx-auto max-w-2xl px-6 py-12">
//             <h1 className="text-4xl font-bold text-gray-800 mb-8">Organize a Cleanup Drive</h1>
//             <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
//                 <input type="text" name="title" value={eventData.title} onChange={handleChange} placeholder="Event Title" className="w-full p-3 border border-gray-300 rounded-lg" required />
//                 <input type="text" name="location" value={eventData.location} onChange={handleChange} placeholder="Location (e.g., Juhu Beach, Mumbai)" className="w-full p-3 border border-gray-300 rounded-lg" required />
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <input type="date" name="date" value={eventData.date} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" required />
//                     <input type="number" name="volunteersNeeded" value={eventData.volunteersNeeded} onChange={handleChange} min="1" placeholder="Volunteers Needed" className="w-full p-3 border border-gray-300 rounded-lg" required />
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <input type="number" step="any" name="lat" value={eventData.lat} onChange={handleChange} placeholder="Latitude (e.g., 19.10)" className="w-full p-3 border border-gray-300 rounded-lg" required />
//                     <input type="number" step="any" name="lng" value={eventData.lng} onChange={handleChange} placeholder="Longitude (e.g., 72.82)" className="w-full p-3 border border-gray-300 rounded-lg" required />
//                 </div>
//                 <textarea name="description" value={eventData.description} onChange={handleChange} rows="4" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Description..."></textarea>
//                 <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg">Create Event</button>
//             </form>
//         </div>
//     );
// };

// const LoginPage = ({ handleLogin, handleRegister }) => {
//     const [isLoginView, setIsLoginView] = useState(true);
//     const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    
//     const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
//     const handleSubmit = (e) => { e.preventDefault(); isLoginView ? handleLogin(formData) : handleRegister(formData); };

//     return (
//         <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
//             <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
//                 <h2 className="text-center text-3xl font-extrabold text-gray-900">{isLoginView ? 'Sign in' : 'Create an account'}</h2>
//                 <form className="space-y-6" onSubmit={handleSubmit}>
//                     {!isLoginView && <input name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full px-3 py-3 border border-gray-300 rounded-md" placeholder="Full Name" />}
//                     <input name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full px-3 py-3 border border-gray-300 rounded-md" placeholder="Email address" />
//                     <input name="password" type="password" required value={formData.password} onChange={handleChange} className="w-full px-3 py-3 border border-gray-300 rounded-md" placeholder="Password" />
//                     <button type="submit" className="w-full flex justify-center py-3 px-4 border text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">{isLoginView ? 'Sign In' : 'Register'}</button>
//                 </form>
//                 <div className="text-center"><button onClick={() => setIsLoginView(!isLoginView)} className="font-medium text-blue-600 hover:text-blue-500">{isLoginView ? 'Need an account? Register' : 'Already have an account? Sign In'}</button></div>
//             </div>
//         </div>
//     );
// };

// const MyEventsPage = ({ registeredEvents, setCurrentPage, handleUnregisterFromEvent }) => {
//     return (
//         <div className="container mx-auto px-6 py-12">
//             <h1 className="text-4xl font-bold text-gray-800 mb-8">My Registered Events</h1>
//             {registeredEvents.length > 0 ? (
//                 <div className="space-y-6">
//                     {registeredEvents.map(event => (
//                         <div key={event._id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-start gap-6">
//                             <img src={event.imageUrl} alt={event.title} className="w-full md:w-64 h-48 md:h-auto object-cover rounded-md" />
//                             <div className="flex-grow">
//                                 <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
//                                 <p className="text-gray-600 mb-2"><MapPin /> {event.location}</p>
//                                 <p className="text-gray-600 mb-4"><Calendar /> {new Date(event.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
//                                 <div className="flex items-center gap-4">
//                                     <button onClick={() => setCurrentPage(`event/${event._id}`)} className="text-blue-600 hover:underline font-semibold">View Details</button>
//                                     <button onClick={() => handleUnregisterFromEvent(event)} className="bg-red-100 text-red-700 hover:bg-red-200 font-semibold py-2 px-4 rounded-lg text-sm">Unregister</button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <div className="text-center py-16">
//                     <p className="text-xl text-gray-600 mb-4">You haven't registered for any events yet.</p>
//                     <button onClick={() => setCurrentPage('events')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">Find a Cleanup to Join</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// const DashboardPage = ({ user, registeredEvents, setCurrentPage }) => {
//     const personalStats = {
//         eventsAttended: registeredEvents.filter(e => new Date(e.date) < new Date()).length,
//         wasteCollectedKg: registeredEvents.filter(e => new Date(e.date) < new Date()).length * 12, // Mock data: 12kg per event
//         hoursVolunteered: registeredEvents.filter(e => new Date(e.date) < new Date()).length * 3, // Mock data: 3 hours per event
//     };

//     const upcomingEvents = registeredEvents
//         .filter(e => new Date(e.date) >= new Date())
//         .sort((a, b) => new Date(a.date) - new Date(b.date));

//     const nextEvent = upcomingEvents[0];

//     return (
//         <div className="bg-gray-50 min-h-screen">
//             <div className="container mx-auto px-6 py-12">
//                 <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome back, {user?.name.split(' ')[0]}!</h1>
//                 <p className="text-lg text-gray-600 mb-8">Here's a summary of your impact and upcoming activities.</p>

//                 {/* Stats Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                     <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
//                         <div className="bg-blue-100 text-blue-600 rounded-full p-3 mr-4"><CalendarCheck className="h-6 w-6" /></div>
//                         <div><span className="text-3xl font-bold">{personalStats.eventsAttended}</span><p className="text-gray-500">Events Attended</p></div>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
//                         <div className="bg-green-100 text-green-600 rounded-full p-3 mr-4"><Trash2 className="h-6 w-6" /></div>
//                         <div><span className="text-3xl font-bold">{personalStats.wasteCollectedKg}</span><p className="text-gray-500">Waste Collected (kg)</p></div>
//                     </div>
//                     <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
//                         <div className="bg-purple-100 text-purple-600 rounded-full p-3 mr-4"><Clock className="h-6 w-6" /></div>
//                         <div><span className="text-3xl font-bold">{personalStats.hoursVolunteered}</span><p className="text-gray-500">Hours Volunteered</p></div>
//                     </div>
//                 </div>

//                 {/* Main Content Grid */}
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                     <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-2xl font-bold mb-4">Your Next Cleanup</h2>
//                         {nextEvent ? (
//                             <div className="flex flex-col md:flex-row items-start gap-6">
//                                 <img src={nextEvent.imageUrl} alt={nextEvent.title} className="w-full md:w-56 h-48 md:h-auto object-cover rounded-md" />
//                                 <div className="flex-grow">
//                                     <h3 className="text-xl font-bold mb-2">{nextEvent.title}</h3>
//                                     <p className="text-gray-600 mb-2"><MapPin /> {nextEvent.location}</p>
//                                     <p className="text-gray-600 mb-4"><Calendar /> {new Date(nextEvent.date).toLocaleDateString('en-IN', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
//                                     <button onClick={() => setCurrentPage(`event/${nextEvent._id}`)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">View Details</button>
//                                 </div>
//                             </div>
//                         ) : (
//                             <div className="text-center py-10">
//                                 <p className="text-xl text-gray-600 mb-4">You have no upcoming events.</p>
//                                 <button onClick={() => setCurrentPage('events')} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full">Find Your Next Cleanup</button>
//                             </div>
//                         )}
//                     </div>

//                     <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
//                         <div>
//                             <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
//                             <ul className="space-y-3">
//                                 <li><button onClick={() => setCurrentPage('my-events')} className="w-full text-left font-semibold text-blue-600 hover:underline">View All My Events &rarr;</button></li>
//                                 <li><button onClick={() => setCurrentPage('events')} className="w-full text-left font-semibold text-blue-600 hover:underline">Find a New Cleanup &rarr;</button></li>
//                                 <li><button onClick={() => setCurrentPage('create-event')} className="w-full text-left font-semibold text-blue-600 hover:underline">Organize a Drive &rarr;</button></li>
//                             </ul>
//                         </div>
//                          <div className="mt-6 border-t pt-4">
//                             <h3 className="font-bold text-gray-700">Recent Activity</h3>
//                             <p className="text-sm text-gray-500 mt-2">You registered for {nextEvent?.title || 'an event'}.</p>
//                          </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const ImpactPage = () => <div className="p-8"><h1 className="text-2xl font-bold">Our Impact Page (Placeholder)</h1></div>;
// const LearnPage = () => <div className="p-8"><h1 className="text-2xl font-bold">Learn / Blog Page (Placeholder)</h1></div>;

// // --- Main App Component ---
// export default function Done() {
//     const [currentPage, setCurrentPage] = useState('home');
//     const [token, setToken] = useState(localStorage.getItem('token'));
//     const [user, setUser] = useState(null);
//     const [scriptsLoaded, setScriptsLoaded] = useState(false);
//     const [apiKeyMissing, setApiKeyMissing] = useState(false);
//     const [events, setEvents] = useState(liveMumbaiEvents);
//     const [registeredEvents, setRegisteredEvents] = useState([]);

//     useEffect(() => {
//         if (window.google) { 
//             setScriptsLoaded(true); 
//             return; 
//         }
//         if (GOOGLE_MAPS_API_KEY === 'YOUR_GOOGLE_MAPS_API_KEY_HERE') { 
//             console.error("Please replace 'YOUR_GOOGLE_MAPS_API_KEY_HERE' with your actual Google Maps API key."); 
//             setApiKeyMissing(true);
//             return; 
//         }
//         setApiKeyMissing(false);
//         const script = document.createElement('script');
//         script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
//         script.async = true;
//         script.defer = true;
//         script.onload = () => setScriptsLoaded(true);
//         document.head.appendChild(script);
//         return () => { const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`); if (existingScript) { document.head.removeChild(existingScript); } };
//     }, []);
    
//     const handleLogin = (credentials) => {
//        alert("Login successful!");
//        const fakeToken = "fake-jwt-token";
//        const fakeUser = { _id: 'fakeUserId', name: 'Demo User', email: credentials.email };
//        localStorage.setItem('token', fakeToken);
//        setToken(fakeToken);
//        setUser(fakeUser);
       
//        const pastEvent = events.find(e => new Date(e.date) < new Date());
//        const upcomingEvent = events.find(e => new Date(e.date) >= new Date());

//        const eventsToRegister = [pastEvent, upcomingEvent].filter(Boolean);
//        setRegisteredEvents(eventsToRegister);
       
//        const updatedEvents = events.map(event => {
//             if(event._id === pastEvent?._id || event._id === upcomingEvent?._id) {
//                 const newRegisteredList = [...event.volunteersRegistered.filter(u => u._id !== fakeUser._id), fakeUser];
//                 return { ...event, volunteersRegistered: newRegisteredList };
//             }
//             return event;
//        });
//        setEvents(updatedEvents);
//        setCurrentPage('dashboard');
//     };

//     const handleRegister = (userData) => { alert("Registration is a placeholder."); setCurrentPage('login'); };
    
//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         setToken(null); setUser(null); setRegisteredEvents([]);
//         setEvents(liveMumbaiEvents);
//         setCurrentPage('home');
//     };
    
//     const handleCreateEvent = (eventData) => {
//         const newEvent = { ...eventData, _id: Date.now().toString(), volunteersRegistered: [], aftermathPhotos: { before: [], after: [] } };
//         setEvents(prev => [...prev, newEvent]);
//         setCurrentPage(`event/${newEvent._id}`);
//     };

//     const handleRegisterForEvent = (eventToRegister) => {
//         if (!token) { alert("Please log in to register."); setCurrentPage('login'); return; }
//         if (registeredEvents.some(e => e._id === eventToRegister._id)) return;
//         setRegisteredEvents(prev => [...prev, eventToRegister]);
//         setEvents(prevEvents => prevEvents.map(event => event._id === eventToRegister._id ? { ...event, volunteersRegistered: [...event.volunteersRegistered, user] } : event));
//         alert(`Successfully registered for ${eventToRegister.title}!`);
//     };
    
//     const handleUnregisterFromEvent = (eventToUnregister) => {
//         setRegisteredEvents(prev => prev.filter(event => event._id !== eventToUnregister._id));
//         setEvents(prevEvents => prevEvents.map(event => event._id === eventToUnregister._id ? { ...event, volunteersRegistered: event.volunteersRegistered.filter(u => u._id !== user._id) } : event));
//         alert(`You have unregistered from ${eventToUnregister.title}.`);
//     };

//     const handleAddPhoto = (eventId, photoUrl) => {
//         setEvents(prevEvents => prevEvents.map(event => {
//             if (event._id === eventId) {
//                 const newAfterPhotos = [...event.aftermathPhotos.after, photoUrl];
//                 return { ...event, aftermathPhotos: { ...event.aftermathPhotos, after: newAfterPhotos }};
//             }
//             return event;
//         }));
//         alert("Photo submitted successfully! Thank you for sharing.");
//     };

//     const renderPage = () => {
//         if (currentPage.startsWith('event-aftermath/')) return <EventAftermathPage page={currentPage} mockEvents={events} registeredEvents={registeredEvents} user={user} handleAddPhoto={handleAddPhoto} />;
//         if (currentPage.startsWith('event/')) return <EventDetailsPage page={currentPage} setCurrentPage={setCurrentPage} scriptsLoaded={scriptsLoaded} mockEvents={events} handleRegisterForEvent={handleRegisterForEvent} handleUnregisterFromEvent={handleUnregisterFromEvent} registeredEvents={registeredEvents} apiKeyMissing={apiKeyMissing} />;
//         switch (currentPage) {
//             case 'home': return <HomePage setCurrentPage={setCurrentPage} mockEvents={events} />;
//             case 'events': return <EventsPage setCurrentPage={setCurrentPage} scriptsLoaded={scriptsLoaded} mockEvents={events} apiKeyMissing={apiKeyMissing} />;
//             case 'create-event': return token ? <CreateEventPage handleCreateEvent={handleCreateEvent} /> : <LoginPage handleLogin={handleLogin} handleRegister={handleRegister} />;
//             case 'dashboard': return token ? <DashboardPage user={user} registeredEvents={registeredEvents} setCurrentPage={setCurrentPage} /> : <LoginPage handleLogin={handleLogin} handleRegister={handleRegister} />;
//             case 'my-events': return token ? <MyEventsPage registeredEvents={registeredEvents} setCurrentPage={setCurrentPage} handleUnregisterFromEvent={handleUnregisterFromEvent} /> : <LoginPage handleLogin={handleLogin} handleRegister={handleRegister} />;
//             case 'impact': return <ImpactPage />;
//             case 'learn': return <LearnPage />;
//             case 'login': return <LoginPage handleLogin={handleLogin} handleRegister={handleRegister} />;
//             default: return <HomePage setCurrentPage={setCurrentPage} mockEvents={events} />;
//         }
//     };
    
//     const Navbar = () => (
//         <nav className="bg-white shadow-md sticky top-0 z-50">
//             <div className="container mx-auto px-6 py-3 flex justify-between items-center">
//                 <div onClick={() => setCurrentPage('home')}>
//                     <Logo />
//                 </div>
//                 <div className="hidden md:flex items-center space-x-6">
//                     <button onClick={() => setCurrentPage('home')} className="text-gray-600 hover:text-blue-600">Home</button>
//                     <button onClick={() => setCurrentPage('events')} className="text-gray-600 hover:text-blue-600">Events</button>
//                     <button onClick={() => setCurrentPage('impact')} className="text-gray-600 hover:text-blue-600">Our Impact</button>
//                     <button onClick={() => setCurrentPage('learn')} className="text-gray-600 hover:text-blue-600">Learn</button>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                     {token ? (
//                         <>
//                             <button onClick={() => setCurrentPage('dashboard')} className="font-semibold text-gray-600 hover:text-blue-600 hidden sm:block">Dashboard</button>
//                             <button onClick={() => setCurrentPage('my-events')} className="font-semibold text-gray-600 hover:text-blue-600">My Events</button>
//                             <button onClick={handleLogout} title="Log Out"><LogOutIcon/></button>
//                         </>
//                     ) : ( <button onClick={() => setCurrentPage('login')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Log In / Sign Up</button> )}
//                 </div>
//             </div>
//         </nav>
//     );

//     const Footer = () => (
//         <footer className="bg-gray-800 text-white"><div className="container mx-auto px-6 py-8"><div className="text-center"><p>&copy; 2025 CleanTheBlue. All Rights Reserved.</p></div></div></footer>
//     );

//     return (
//         <div className="bg-white font-sans">
//             <Navbar />
//             <main>{renderPage()}</main>
//             <Footer />
//         </div>
//     );
// }

