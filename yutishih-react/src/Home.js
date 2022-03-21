import React, { Component } from 'react'
import Navigation from './Components/Navigation';
import Dribble from "./Images/dribble.png";
import Telegram from "./Images/telegram.png";
import Instagram from "./Images/instagram.png";


class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='container'>
          <Navigation />
          <div className='cover-wrap'>
            <div className='text-box'>
              <p>I'M</p>
              <h1>YUTI</h1>
              <h3>I AM A DATA ANALYST AND WEB DEVELOPER.</h3>
              <div class="row">
                <a href="">Explore My Projects</a>
                <a href="">Connect With Me <span>&#x27F6;</span></a>
                <span>You Can Explore More About My Projects<br />And Personal Experience Here.</span>
              </div>
            </div>
            <div className='social-icons'>
              <a href=""><img src={Dribble} /></a>
              <a href=""><img src={Telegram} /></a>
              <a href=""><img src={Instagram} /></a>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

export default Home