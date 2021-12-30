import React from "react";
import Navigation from "../Navigation";
import Regular from "../Regular";
import Footer from "../Footer";
import bg from "../../img/background4.svg";
function Resources () 
{
    return (
        <>
            <Navigation />
            <Regular element={<h1 style={{color: "black"}}>Page in development</h1>} title="Resources" img={bg}/>
            <Footer />
        </>
    );
}

export default Resources;