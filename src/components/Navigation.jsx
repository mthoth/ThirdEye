import React from "react";
import logo from '../img/3EClogo.svg';
import '../css/Nav.css';
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav">
    <img src={logo} alt='' className="logo"></img>
      <ul className="navbuttons">
        <li><NavLink to="/thirdeye" className='navbtn'>About Us</NavLink></li>
        <li><NavLink to="/thirdeye" className='navbtn'>Moderators</NavLink></li>
        <li><NavLink to="/thirdeye" className='navbtn'>Rules</NavLink></li>
        <li><span className='line'>|</span></li>
        <li><NavLink to="/thirdeye/Manifesto" className='navbtn'>Manifesto</NavLink></li>
        <li><NavLink to="/thirdeye" className='navbtn'>FAQ</NavLink></li>
        <li><NavLink to="/thirdeye" className='navbtn'>Resources</NavLink></li>
        <li><NavLink to="/thirdeye" className='navbtn'>Others Like Us</NavLink></li>
      </ul>
    </div>
  );
}

export default Navigation;