import './App.css';
import AllEvent from "./Endeavour/Component/AllEvents/AllEvents.jsx";
import { createRoot } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Page from "./Endeavour/Component/Register/Register.jsx"
import Nav from "./Endeavour/Component/NavBar/Navigation.jsx";
import Footer from "./Endeavour/Component/Footer/Foot";
import About from "./Endeavour/Component/About/About";
import Speaker from "./Endeavour/Component/Speaker/SpeakerCard.jsx";
import Sponser from "./Endeavour/Component/Sponsers/Sponsers";
import Home from "./Endeavour/Home.jsx";
import Error from "./Endeavour/Error";
import Cursor from "./Endeavour/Component/Curser/Cursor.jsx";
import Event1 from "./Endeavour/Component/EventPage/Event1.jsx";
import Register from "./Endeavour/Component/Login/Register.jsx"
import Login from "./Endeavour/Component/Login/Login.jsx"
export default function App() {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Nav />
        <Cursor />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/speaker" element={<Speaker />} />
          <Route path="/sponser" element={<Sponser/>} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Page />} /> */}
          <Route path="/Event1" element={<Event1 />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/allevent" element={<AllEvent />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
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
