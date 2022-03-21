import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";

import Logo from '../Images/logo.png';
import Cart from '../Images/cart.png';

class Navigation extends Component {
  render() {
    return (
      <div className='navi-wrap'>
          <nav className='navi-bar'>
                <Link to="/"><img src={Logo} className='logo' /></Link>
              <ul>
                  <li><Link to="/projects">Projects</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/blog">Blog</Link></li>                
              </ul>
              <img src={Cart} className='cart-icon' />
          </nav>
      </div>
    )
  }
}

export default Navigation;