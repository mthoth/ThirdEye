import React from "react";
import Navigation from "../Navigation";
import Regular from "../Regular";
import Footer from "../Footer";
import bg from "../../img/background4.svg";
import FAQcontent from "../FAQcontent";
function FAQ () 
{
    return (
        <>
            <Navigation />
            <Regular element={<FAQcontent />} title="Frequently Asked Questions" img={bg}/>
            <Footer />
        </>
    );
}

export default FAQ;