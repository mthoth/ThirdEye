import React from "react";
import Navigation from "../Navigation";
import Regular from "../Regular";
import Footer from "../Footer";
import bg from "../../img/background4.svg";
import OthersContent from "../othercontent";

function OthersLikeUs () 
{
    return (
        <>
            <Navigation />
            <Regular element={<OthersContent />} title="Others Like Us" img={bg}/>
            <Footer />
        </>
    );
}

export default OthersLikeUs;