import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Nav from './js/Nav';
import Intro from './js/Intro';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Intro />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
