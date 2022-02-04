import React, { Component } from 'react';
import Logo from '../Images/logo.png';
import Cart from '../Images/cart.png';

class Navigation extends Component {
  render() {
    return (
      <div className='navi-wrap container'>
          <nav className='navi-bar'>
              <img src={Logo} className='logo' />
              <ul>
                  <li><a href="">About</a></li>
                  <li><a href="">Contact</a></li>
                  <li><a href="">Portfolio</a></li>
              </ul>
              <img src={Cart} className='cart-icon' />
          </nav>
      </div>
    )
  }
}

export default Navigation;