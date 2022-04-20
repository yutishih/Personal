import './App.css';
import Navigation from './Components/Navigation';
import Taiwan from "./Images/taiwan.png";
import Dallas from "./Images/dallas.png";
import Naples from "./Images/naples.png";

function About() {
  return (
    <div className="About">
      <div className='container'>
        <Navigation />
        <div className='content-wrapper'>
          <div className='row'>
            <div className='image-section'>
              <img src={Taiwan} className="taiwan-1" />
              <img src={Dallas} className="dallas-1" />
              <img src={Naples} className="naples-1"/>
            </div>
            <div className="text-section">
              <h3>About Yuti</h3>
              <h4>Introductions</h4>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
              <a href="">Explore My Projects</a>
              <a href="">Connect With Me <span>&#x27F6;</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;