import React from "react";
import {
    LoycyImg,
  ExbImg,
 
    ChatboxxImg,
    TweeterImg,
    SimplePlaylistImg,
    PortfolioImg,
    WindBnBImg,
    HuddleImg,
    EdieImg,
    InteriorImg,
    GalleryImg,
    CheckoutImg,
  } from "./images";

const ProjectCard = ({
  image,
  type,
  title,
  desc,
  tags = ["HTML", "CSS"],
  demoUrl,
  codeUrl,
}) => {
  return (
    <div className="project-card">
      <div className="project-card-image">
      {image}
      </div>
      <div className="project-card-intro">
        <h4>{title}</h4>
        <p className="type5">{desc}</p>
      </div>
      <div className="project-card-tags">
        {tags.map((tag) => (
          <span className="project-card-tag type6" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="project-card-links type6">
        <a href={demoUrl} target="_blank">
          Demo
        </a>
        <a href={codeUrl} target="_blank">
          &#60;Code&#47;&#62;
        </a>
      </div>
    </div>
  );
};


export const ProjectCards = () => {
  const projects=[
  {
    image:<ExbImg/>,
    type:"excellent-bridge",
    title:"Excellent Bridge Website Redesign",
    desc:"",
    tags:["Tailwindcss", "PHP", "Laravel"],
    demoUrl:"https://excellentbridge.com/",
    codeUrl:"#",
  },
  
  {
    image:<LoycyImg/>,
    type:"loycy-engineering",
    title:"Loycy Engineering",
    desc:"Website redesign for Loycy Investment Company",
    tags:["NextJS", "Tailwindcss"],
    demoUrl:"https://loycy-engineering.vercel.app/",
    codeUrl:"#",
  },
 
  {
    image:<ChatboxxImg/>,
    type:"chatboxx",
    title:"",
    desc:"A chat app where users can send and receive direct or group messages",
    tags:["MERN", "Socket.io", "Cloudinary"],
    demoUrl:"https://chatboxx.onrender.com/login",
    codeUrl:"https://github.com/chifarol/chatboxx",
  },
 
  {
    image:<WindBnBImg/>,
    type:"windbnb",
        title:"WindBnB",
        desc:"An AirBnB inspired website demo.",
        tags:["React"],
        demoUrl:"https://csb-jgr6d1.netlify.app/",
        codeUrl:"https://github.com/chifarol/WindBnB",
  },
  {
    image:<HuddleImg/>,
    type:"huddle",
        title:"Huddle Landing Page demo",
        desc:"Huddle Landing page clone",
        tags:["HTML", "CSS"],
        demoUrl:"https://chifarol.github.io/zuri-wk5-Task-2-Hubble/",
        codeUrl:"https://github.com/chifarol/zuri-wk5-Task-2-Hubble",
  },
 
  {
    image:<CheckoutImg/>,
    type:"checkout",
        title:"Checkout Page",
        desc:"Checkout page for a fictional E-Commerce site",
        tags:["HTML", "CSS"],
        demoUrl:"https://chifarol.github.io/devChallenges-Responsive-Design-Task-6---Checkout-Page/",
        codeUrl:"https://github.com/chifarol/devChallenges-Responsive-Design-Task-6---Checkout-Page",
  }
]
  return (
    <>
    {projects.map((project,index)=>(
      <ProjectCard
      key={index}
      image={project.image}
      type={project.type}
      title={project.title}
      desc={project.desc}
      tags={project.tags}
      demoUrl={project.demoUrl}
      codeUrl={project.codeUrl}
    />
    ))}
     
    </>
  );
};

export default ProjectCards;