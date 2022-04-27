import './App.css';
import React, { useState } from "react";
import Navigation from './Components/Navigation';
import Taiwan from "./Images/taiwan.png";
import Dallas from "./Images/dallas.png";
import Naples from "./Images/naples.png";


function About() {

  const [styleTaiwan, setStyleTaiwan] = useState("imgStyleSecond");
  const [styleDallas, setStyleDallas] = useState("imgStyleOrginal");
  const [styleNaples, setStyleNaples] = useState("imgStyleOrginal");
  const [introPeriodTW, setIntroPeriodTW] = useState(true);
  const [introPeriodDL, setIntroPeriodDL] = useState(false);
  const [introPeriodNP, setIntroPeriodNP] = useState(false);

  const changeStyleTW = () => {
    setStyleTaiwan("imgStyleSecond");
    setStyleDallas("imgStyleOrginal");
    setStyleNaples("imgStyleOrginal");
    setIntroPeriodTW(true);
    setIntroPeriodDL(false);
    setIntroPeriodNP(false);
  };
  const changeStyleDL = () => {
    setStyleTaiwan("imgStyleOrginal");
    setStyleDallas("imgStyleSecond");
    setStyleNaples("imgStyleOrginal");
    setIntroPeriodTW(false);
    setIntroPeriodDL(true);
    setIntroPeriodNP(false);
  };
  const changeStyleNP = () => {
    setStyleTaiwan("imgStyleOrginal");
    setStyleDallas("imgStyleOrginal");
    setStyleNaples("imgStyleSecond");
    setIntroPeriodTW(false);
    setIntroPeriodDL(false);
    setIntroPeriodNP(true);
  };

  return (
    <div className="About">
      <div className='container'>
        <Navigation />
        <div className='content-wrapper'>
          <div className='row'>
            <div className='image-section'>
              <div className="img-wrapper">
                <div className={styleTaiwan}>
                  <img src={Taiwan} className="taiwan-1" onClick={changeStyleTW} />
                </div>
              </div>
              <div className='img-wrapper'>
                <div className={styleDallas}>
                  <img src={Dallas} className="dallas-1" onClick={changeStyleDL} />
                </div>
              </div>
              <div className='img-wrapper'>
                <div className={styleNaples}>
                  <img src={Naples} className="naples-1" onClick={changeStyleNP} />
                </div>
              </div>
            </div>
            <div className="text-section">
            {introPeriodTW && (<div>
              <h3>Taiwan</h3>
              <h4>Before 2017</h4>
              <p>Yuti is orginal from Taiwan. He completed his bachelor degree at Tamkang University, majored in Information Management and minored in Economics.</p>
              <p>Food, sports and playing video games with friends are his favorites, and he is also a big fan of Marvel and DC movies.</p>
              <p>He always explores different lifestyle with passion and curiority, and keeps this as his faith.</p>
              <a href="">Explore My Projects</a>
              <a href="">Connect With Me <span>&#x27F6;</span></a>
            </div>)}
            {introPeriodDL && (<div>
              <h3>Dallas</h3>
              <h4>2017 - 2020</h4>
              <p>Yuti completed his master degree in the University of Texas at Dallas with MS Business Analytics major, and got his first offer from Mustaard, LLC as an IT adminstrator.
              </p>
              <a href="">Explore My Projects</a>
              <a href="">Connect With Me <span>&#x27F6;</span></a>
            </div>)}
            {introPeriodNP && (<div>
              <h3>Naples</h3>
              <h4>2020 - 2022</h4>
              <p>Yuti started his new career in Naples, Southwestern Florida as a front end designer and developer. He was also working as an AWS architect for the company.</p>
              <a href="">Explore My Projects</a>
              <a href="">Connect With Me <span>&#x27F6;</span></a>
            </div>)}

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;