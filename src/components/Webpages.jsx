import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Manifesto from "./pages/Manifesto";
import Home from "./pages/Home";

function Webpages()
{


    return (
      <Router>
      <Routes>
        <Route path="/thirdeye" element={<Home />} />
        <Route path="/thirdeye" element={<Home />} />
        <Route path="/thirdeye" element={<Home />} />
        <Route path="/thirdeye/Manifesto" element={<Manifesto />} />
      </Routes>
    </Router>
    );
}

export default Webpages;