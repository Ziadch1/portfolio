import React from "react";
import "./Styles/Projects.css";
import img1 from "../imgs/dopefolio.jpeg";
import img2 from "../imgs/boreal-coffee-clone.jpeg";
import img3 from "../imgs/crown-template.jpeg";
function Projects() {
  const data = [
    {
      img: img1,
      title: "Dopefolio",
      description:
        "Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally",
    },
    {
      img: img2,
      title: "Boreal Coffee Clone",
      description:
        "I re-created the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend.",
    },
    {
      img: img3,
      title: "Crown Template",
      description:
        "Crown is a web template that I created targeting the restaurant and food industry which anyone can use to present their business online.",
    },
  ];
  return (
    <div id="CtProject">
         <header id='headerP'>
        <h1>PROJECTS</h1>
        <hr />
        <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
      </header>
      {data.map((i) => (
        <div id="Projects">
          <div id="img">
            <img src={i.img} alt="" />
          </div>
          <div id="desc">
            <h1>{i.title}</h1>
            <p>{i.description}</p>
            <button>see it</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
