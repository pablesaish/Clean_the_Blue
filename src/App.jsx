// import { Routes, Route } from 'react-router-dom'         OG
// AFTER
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './Components/AuthContext';
import './index.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Login from './Components/Login.jsx'
import About from './screens/About.jsx'
import Events from './screens/Events.jsx'
import Contact from './screens/Contact.jsx'
import Donate from './Components/Donate.jsx'
import ItemsScreen from './screens/ItemsScreen.jsx';
const App = () => {

  return (
    <>
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={
            <>
                <Hero />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />  
        <Route path="/donate" element={<Donate/>} /> 
        <Route path="/contact" element={<Contact />} />
                <Route path="/items" element={<ItemsScreen />} /> 
      </Routes>
    </AuthProvider>
    </>
    
  );
}

export default App;