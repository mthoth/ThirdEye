import React from "react";
import Navigation from "../Navigation";
import Regular from "../Regular";
import Footer from "../Footer";
import bg from "../../img/background4.svg";
import ResourcesContent from "../ResourcesContent";

function Resources () 
{
    return (
        <>
            <Navigation />
            <Regular element={<ResourcesContent />} title="Resources" img={bg}/>
            <Footer />
        </>
    );
}

export default Resources;