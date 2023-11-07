import React from 'react'
import './Styles/Contact.css'
// import { useRef } from 'react';

function Contact() {
    // const ConatctRef = useRef(null);
    
  return (
    <div id='contact'>
       <header id='headerContact'>
        <h1>CONTACT</h1>
        <hr />
        <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      </header>
     
  
<div className="container">
  
    
      <form>
        <h2>Contact Us</h2>
        <div className="mb-3">
          <label for="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" required/>
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Your Email" required/>
        </div>
        <div className="mb-3">
          <label for="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" >Submit</button>
      </form>
  
  
</div>
  

    </div>
  )
}

export default Contact
