import React, { Component } from 'react';
import logo from '../assets/DnD_Logo.png';

class Header extends Component {
  render() {
    return (
      <header id="top">
        <div className="title flex-container">
          <div className="logo">
            <img src={logo} alt="The Dungeons and Dragons logo"/>
          </div>
          <h1>5e Spellbook</h1>
        </div>
      </header>
    )
  }
};


export default Header;