import React from "react";
import Navigation from "../Navigation";
import Regular from "../Regular";
import Footer from "../Footer";
import ManifestoCont from "../manicontent";
function Contact() {


  return (
    <>
    <Navigation />
     <Regular element={<ManifestoCont />}/>
     <Footer />
    </>
  );
}

export default Contact;