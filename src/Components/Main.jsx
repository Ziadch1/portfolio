import React from 'react'
import './Styles/home.css'
import {AiFillGithub,AiFillLinkedin,AiFillFacebook,AiOutlineWhatsApp} from 'react-icons/ai'
import About from './About'
import Contact from './Contact'
function Main() {
  return (
    <div>
      <div id='container'>
        <ul id='aab'>
        <li><a href="https://github.com/Ziadch1?tab=repositories"><AiFillGithub/></a></li>
        <li><a href=""><AiFillLinkedin/></a></li>
        <li><a href=""><AiFillFacebook/></a></li>
        <li><a href=""><AiOutlineWhatsApp/></a></li>
        
      </ul>
      <div id='main'>
          <h1>Hy, Im Chaouchi Ziad</h1>
          <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product </p>
          <button>Projects</button>
      </div>
      
    </div>
    
    </div>
    
  )
}

export default Main
