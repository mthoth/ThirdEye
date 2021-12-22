import logo from '../img/3EClogo.svg';
import '../css/Nav.css';

function Nav() {
  return (
    <div className="nav">
      <img src={logo} alt='' className="logo"></img>
      <ul className="navbuttons">
        <li><button className='navbtn'>About Us</button></li>
        <li><button className='navbtn'>Moderators</button></li>
        <li><button className='navbtn'>Rules</button></li>
        <li><span className='line'>|</span></li>
        <li><button className='navbtn'>Menifesto</button></li>
        <li><button className='navbtn'>FAQ</button></li>
        <li><button className='navbtn'>Resources</button></li>
        <li><button className='navbtn'>Others Like Us</button></li>
      </ul>
    </div>
  );
}

export default Nav;
