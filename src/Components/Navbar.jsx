import React from 'react';
import img from '../img.JPG';
import './Styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  // const scrollToProject = () => {
  //   projectRef.current.scrollIntoView({ behavior: 'smooth' });
  // };
  return (
    
    <div className='navbar-container'>
      <div className='logo'>
        <img src={img} alt="" />
        <span>Chaouchi Ziad</span>
      </div>
      <ul className='nav-links'>
      <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/project">Project</Link></li>
      </ul>
      
    </div>
  );
}

export default Navbar;
