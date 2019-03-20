import React from 'react';
import logo from '../assets/DnD_Logo.png';

const Header = () => {
  return (
    <header id="top">
      <div className="title flex-container">
        <div className="logo">
          <img src={logo} alt="The Dungeons and Dragons logo"/>
        </div>
        <h1>5e Infinity Scroll</h1>
      </div>
      <p>Filter and search through D&D 5e spells!</p>
    </header>
  )
};


export default Header;