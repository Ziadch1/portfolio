import React from 'react'
import './Styles/Abouts.css'
function About() {
  return (
    <div id='Abouts'>
      <header>
        <h1>ABOUT ME</h1>
        <hr />
        <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
      </header>
      <main>
          <div id='Know'>
            <h3>Get to know me!</h3>
            <p>I'm a <span>Frontend Web Developer </span>building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span>Projects</span> section.</p>
            <p>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to<span> Web Development</span> and Programming</p>
            <p>I'm open to <span>Job opportunities</span> where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span>contact</span> me.</p>
            <button>Contact</button>
          </div>
          <div id='skils'>
            <h2>My skills</h2>
            <p>Html</p>
            <p>Css</p>
            <p>Bootstrap</p>
            <p>Javascript</p>
            <p>React</p>
            <p>Sql Basics</p>
            <p>Github </p>
            <p>Responsive Designe</p>
          </div>
      </main>
    </div>
  )
}

export default About
