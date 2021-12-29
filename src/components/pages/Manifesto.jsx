import React from "react";
import Navigation from "../Navigation";
import Regular from "../Regular";
import Footer from "../Footer";
import ManifestoCont from "../manicontent";
import bg from "../../img/background4.svg"
function Manifesto() {


  return (
    <>
    <Navigation />
     <Regular element={<ManifestoCont />} title="Our Manifesto" img={bg}/>
     <Footer />
    </>
  );
}

export default Manifesto;