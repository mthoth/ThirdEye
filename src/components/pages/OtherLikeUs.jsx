import React from "react";
import Navigation from "../Navigation";
import Regular from "../Regular";
import Footer from "../Footer";
import bg from "../../img/background4.svg";
function OthersLikeUs () 
{
    return (
        <>
            <Navigation />
            <Regular element={<h1 style={{color: "black"}}>Page in development</h1>} title="Others Like Us" img={bg}/>
            <Footer />
        </>
    );
}

export default OthersLikeUs;