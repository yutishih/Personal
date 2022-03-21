import './App.css';
import React, { useState } from 'react';
import Navigation from './Components/Navigation';
import project_1 from "./Images/test-1.jpg";
import project_2 from "./Images/test-2.png";
import project_3 from "./Images/test-3.png";

function Projects() {

  const [isShownProjectFirst, setIsShownProjectFirst] = useState(false);
  const [isShownProjectSecond, setIsShownProjectSecond] = useState(false);
  const [isShownProjectThird, setIsShownProjectThird] = useState(false);
  const [isShownProjectFourth, setIsShownProjectFourth] = useState(false);
  const [isShownProjectFifth, setIsShownProjectFifth] = useState(false);

  return (
    <div className="Projects">
      <div className='container'>
        <Navigation />
        <div className="content-wrapper">
          <div className='row'>
              <div className='project-section'>
                <div className='section-wrapper'>
                  <div className="text-wrapper"><p>Webpage Design</p></div>
                  <div className="header-wrapper"
                    onMouseEnter={() => setIsShownProjectFirst(true)}
                    onMouseLeave={() => setIsShownProjectFirst(false)}>
                    <a href="#">Project 1: Hello World</a></div>
                </div>
                <div className='section-wrapper'>
                  <div className="text-wrapper"><p>Webpage Design</p></div>
                  <div className="header-wrapper"
                    onMouseEnter={() => setIsShownProjectSecond(true)}
                    onMouseLeave={() => setIsShownProjectSecond(false)}>
                    <a href="#">Project 2: NFT Lover</a></div>
                </div>
                <div>
                  <div className="text-wrapper"><p>Webpage Design</p></div>
                  <div className="header-wrapper"
                    onMouseEnter={() => setIsShownProjectThird(true)}
                    onMouseLeave={() => setIsShownProjectThird(false)}>
                    <a href="#">Project 3</a></div>
                </div>
                <div className='section-wrapper'>
                  <div className="text-wrapper"><p>Webpage Design</p></div>
                  <div className="header-wrapper"
                    onMouseEnter={() => setIsShownProjectFourth(true)}
                    onMouseLeave={() => setIsShownProjectFourth(false)}>
                    <a href="#">Project 4</a></div>
                </div>
                <div className='section-wrapper'>
                  <div className="text-wrapper"><p>Webpage Design</p></div>
                  <div className="header-wrapper"
                    onMouseEnter={() => setIsShownProjectFifth(true)}
                    onMouseLeave={() => setIsShownProjectFifth(false)}>
                    <a href="#">Project 5</a></div>
                </div>
              </div>
            {isShownProjectFirst && (<div className='image-section'><img src={project_1} /></div>)}
            {isShownProjectSecond && (<div className='image-section'><img src={project_2} /></div>)}
            {isShownProjectThird && (<div className='image-section'><img src={project_3} /></div>)}
            {isShownProjectFourth && (<div className='image-section'><img src={project_2} /></div>)}
            {isShownProjectFifth && (<div className='image-section'><img src={project_2} /></div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
