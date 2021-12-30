import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Manifesto from "./pages/Manifesto";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Resources from "./pages/Resources";
import OthersLikeUs from "./pages/OtherLikeUs";

function Webpages()
{


    return (
      <Router>
      <Routes>
        <Route path="/thirdeye" element={<Home />} />
        <Route path="/thirdeye/Manifesto" element={<Manifesto />} />
        <Route path="/thirdeye/FAQ" element={<FAQ />} />
        <Route path="/thirdeye/Resources" element={<Resources />} />
        <Route path="/thirdeye/Others" element={<OthersLikeUs />} />
      </Routes>
    </Router>
    );
}

export default Webpages;