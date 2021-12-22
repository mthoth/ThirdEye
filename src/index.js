import React from "react";
import ReactDOM from "react-dom";
//import Home from "./components/Home";
import "./css/index.css";
//import * as serviceWorker from "./serviceWorker";
import Webpages from "./components/Webpages";

ReactDOM.render(
  <>
    <Webpages />
  </>,

  document.getElementById("root")
);

//serviceWorker.unregister();