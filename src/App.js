import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Main from './Components/Main';
import Home from './Components/Home';
import Projects from './Components/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
