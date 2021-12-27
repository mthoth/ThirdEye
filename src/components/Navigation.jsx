import React from "react";
import logo from '../img/3EClogo.svg';
import '../css/Nav.css';
import { NavLink } from "react-router-dom";

function Navigation(props) {
  
  const BurgerMenu = () =>
  {
    let nav = document.getElementById("navigation");
    nav.classList.toggle("active");

  };

  const Burgeroff = () =>
  {
    let nav = document.getElementById("navigation");
    nav.classList.remove("active");
  }
 
  return (
    <div className="nav">
    <img src={logo} alt='' className="logo" />
      <ul id="navigation" className="navbuttons">
        <li><NavLink to="/thirdeye"  onClick={function () {props.scrollabout(); Burgeroff();} } className='navbtn'>About Us</NavLink></li>
        <li><NavLink to="/thirdeye" onClick={function () { props.scrollmod(); Burgeroff();}} className='navbtn'>Moderators</NavLink></li>
        <li><NavLink to="/thirdeye" onClick={function () {props.scrollrules(); Burgeroff();}} className='navbtn'>Rules</NavLink></li>
        <li><div id="line" className='line'></div></li>
        <li><NavLink to="/thirdeye/Manifesto" className='navbtn'>Manifesto</NavLink></li>
        <li><NavLink to="/thirdeye/FAQ" className='navbtn'>FAQ</NavLink></li>
        <li><NavLink to="/thirdeye/Resources" className='navbtn'>Resources</NavLink></li>
        <li><NavLink to="/thirdeye/Others" className='navbtn'>Others Like Us</NavLink></li>
      </ul>
      <div className="color"></div>
      <button className="burgermenu" onClick={BurgerMenu}>Burger</button>
    </div>
  );
}

export default Navigation;