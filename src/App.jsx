import './App.css';
import AllEvent from "./Endeavour/Component/AllEvents/AllEvents.jsx";
import { createRoot } from 'react-dom';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pre from "./Endeavour/Component/preloader/PreLoader.jsx"
import Nav from "./Endeavour/Component/NavBar/Navigation.jsx";
import Footer from "./Endeavour/Component/Footer/Foot";
import About from "./Endeavour/Component/About/About";
import Speaker from "./Endeavour/Component/Speaker/SpeakerCard.jsx";
import Sponser from "./Endeavour/Component/Sponsers/Sponsers";
import Home from "./Endeavour/Home.jsx";
import Error from "./Endeavour/Error";
import Cursor from "./Endeavour/Component/Curser/Cursor.jsx";
import Event0 from "./Endeavour/Component/EventPage/Event1.jsx";
import Event1 from "./Endeavour/Component/EventPage/Event2.jsx";
import Event2 from "./Endeavour/Component/EventPage/Event3.jsx";
import Event3 from "./Endeavour/Component/EventPage/Event4.jsx";
import Event4 from "./Endeavour/Component/EventPage/Event5.jsx";
import Event5 from "./Endeavour/Component/EventPage/Event6.jsx";
import Event6 from "./Endeavour/Component/EventPage/Event7.jsx";
import Event7 from "./Endeavour/Component/EventPage/Event8.jsx";
import Event8 from "./Endeavour/Component/EventPage/Event9.jsx";
import Register from "./Endeavour/Component/Login/Register.jsx"
import Login from "./Endeavour/Component/Login/Login.jsx"
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the preloader after 5 seconds
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='overflow-hidden'>
      <Router>
        {isLoading && <Pre />}
        {!isLoading &&
        <>
        <Nav />
        <Cursor />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/speaker" element={<Speaker />} />
          <Route path="/sponser" element={<Sponser/>} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Page />} /> */}
          <Route path="/event0" element={<Event0 />} />
          <Route path="/event1" element={<Event1 />} />
          <Route path="/event2" element={<Event2 />} />
          <Route path="/event3" element={<Event3 />} />
          <Route path="/event4" element={<Event4 />} />
          <Route path="/event5" element={<Event5 />} />
          <Route path="/event6" element={<Event6 />} />
          <Route path="/event7" element={<Event7 />} />
          <Route path="/event8" element={<Event8 />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/allevent" element={<AllEvent />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        </>
        }
      </Router>
    </div>
  );
}

// Do not call createRoot here
// createRoot(document.getElementById('root')).render(<App />);

// Instead, wait for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('root')).render(<App />);
});
