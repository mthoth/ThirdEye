import React, {useRef}  from "react";
//imgs
import bg1 from "../../img/colorful1.jpg"
import bg2 from "../../img/colorful2.jpg"
//pages
import Intro from "../intro";
import Aboutus from "../aboutus";
import Container from "../container";
import About2 from "../aboutus2";
import Navigation from "../Navigation";
import ModsContain from "../ModsContain";
import Rules from "../Rules";
import Footer from "../Footer";
//import Navigation from "./Navigation"

function Home() {


  const about = useRef(null);
  const mod = useRef(null);
  const rules = useRef(null);
  
  const yoffest = -63;

  const getoffset = (el) =>
  {
    const rect = el.getBoundingClientRect();
    return rect.top + window.scrollY + yoffest;
  };


  const Scrollabout = () => setTimeout(function() {window.scrollTo({top: getoffset(about.current), behavior: "smooth"});}, 100); 
  const Scrollmod = () => setTimeout(function() {window.scrollTo({top: getoffset(mod.current), behavior: "smooth"});}, 100); 
  const Scrollrules = () => setTimeout(function() {window.scrollTo({top: getoffset(rules.current), behavior: "smooth"});}, 100); 
  
  return (
    <div>
      <Navigation scrollabout={Scrollabout} scrollmod={Scrollmod} scrollrules={Scrollrules}/>
      <Intro scrollabout={Scrollabout} />
      <div className="scroll-padding" id="about" ref={about}></div>
      <Aboutus />
      <Container img={bg1} element={<About2 />}/>
      <div className="scroll-padding" id="mods" ref={mod}></div>
      <ModsContain />
      <div className="scroll-padding" id="rules" ref={rules}></div>
      <Container img={bg2} element={<Rules />}/>
      <Footer />
    </div>
  );
}

export default Home;