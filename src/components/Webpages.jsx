import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function Webpages()
{


    return (
      <Router>
      <Routes>
        <Route path="/thirdeye" element={<Home />} />
        <Route path="/thirdeye" element={<Home />} />
        <Route path="/thirdeye" element={<Home />} />
        <Route path="/thirdeye/Manifesto" element={<Contact />} />
      </Routes>
    </Router>
    );
}

export default Webpages;