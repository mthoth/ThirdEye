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
  
  const Scrollabout = () => setTimeout(function() {about.current.scrollIntoView({ block: "center", behavior: "smooth"});}, 100); 
  const Scrollmod = () => setTimeout(function() {mod.current.scrollIntoView({ block: "end", behavior: "smooth"});}, 100); 
  const Scrollrules = () => setTimeout(function() {rules.current.scrollIntoView({ block: "center", behavior: "smooth"});}, 100); 
  
  return (
    <div>
      <Navigation scrollabout={Scrollabout} scrollmod={Scrollmod} scrollrules={Scrollrules}/>
      <Intro scrollabout={Scrollabout} />
      <Aboutus />
      <div ref={about}></div>
      <Container img={bg1} element={<About2 />}/>
      <ModsContain />
      <div ref={mod}></div>
      <div ref={rules}></div>
      <Container img={bg2} element={<Rules />}/>
      <Footer />
    </div>
  );
}

export default Home;