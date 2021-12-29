import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Manifesto from "./pages/Manifesto";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";

function Webpages()
{


    return (
      <Router>
      <Routes>
        <Route path="/thirdeye" element={<Home />} />
        <Route path="/thirdeye/Manifesto" element={<Manifesto />} />
        <Route path="/thirdeye/FAQ" element={<FAQ />} />
      </Routes>
    </Router>
    );
}

export default Webpages;