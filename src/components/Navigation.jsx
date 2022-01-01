import React from "react";
import logo from '../img/3EClogo.svg';
import menu from '../img/menu.svg';
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
      <NavLink to="/thirdeye" onClick={function () { document.documentElement.scrollTop = 0; document.body.scrollTop = 0;}}><img src={logo} alt='' className="logo" /></NavLink>
      <ul id="navigation" className="navbuttons">
      <li className="navlist"><NavLink to="/thirdeye/#about"  onClick={function () {props.scrollabout(); Burgeroff();}} className="navbtn">About Us</NavLink></li>
        <li className="navlist"><NavLink to="/thirdeye/#mods" onClick={function () {props.scrollmod(); Burgeroff();}} className="navbtn">Moderators</NavLink></li>
        <li className="navlist"><NavLink to="/thirdeye/#rules" onClick={function () {props.scrollrules(); Burgeroff();}} className="navbtn">Rules</NavLink></li>
        <li className="navlist"><div id="line" className='line'></div></li>
        <li className="navlist"><NavLink to="/thirdeye/Manifesto" onClick={function () { document.documentElement.scrollTop = 0; document.body.scrollTop = 0;}} className='navbtn'>Manifesto</NavLink></li>
        <li className="navlist"><NavLink to="/thirdeye/FAQ" onClick={function () { document.documentElement.scrollTop = 0; document.body.scrollTop = 0;}} className='navbtn'>FAQ</NavLink></li>
        <li className="navlist"><NavLink to="/thirdeye/Resources" onClick={function () { document.documentElement.scrollTop = 0; document.body.scrollTop = 0;}} className='navbtn'>Resources</NavLink></li>
        <li className="navlist"><NavLink to="/thirdeye/Others" onClick={function () { document.documentElement.scrollTop = 0; document.body.scrollTop = 0;}} className='navbtn'>Others Like Us</NavLink></li>
      </ul>
      <div className="color"></div>
      <img src={menu} alt="" className="burgermenu" onClick={BurgerMenu}/>
    </div>
  );
}

export default Navigation;