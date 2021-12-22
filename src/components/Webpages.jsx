import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";


function Webpages()
{
    return (
      <Router>
      <Navigation />
      <Routes>
        <Route path="/thirdeye" element={<Home />} />
        <Route path="/thirdeye/Manifesto" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    );
}

export default Webpages;