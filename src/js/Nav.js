import logo from '../img/3EClogo.svg';
import '../css/Nav.css';

function Nav() {
  return (
    <div className="nav">
      <img src={logo} alt='' className="logo"></img>
      <ul className="navbuttons">
        <li><a href="#" className='navbtn'>About Us</a></li>
        <li><a href="#" className='navbtn'>Moderators</a></li>
        <li><a href="#" className='navbtn'>Rules</a></li>
        <li><span className='line'>|</span></li>
        <li><a href="#" className='navbtn'>Menifesto</a></li>
        <li><a href="#" className='navbtn'>FAQ</a></li>
        <li><a href="#" className='navbtn'>Resources</a></li>
        <li><a href="#" className='navbtn'>Others Like Us</a></li>
      </ul>
    </div>
  );
}

export default Nav;
