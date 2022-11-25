import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import reportWebVitals from './reportWebVitals';
/* Components Imports */
/* Navbar*/
import Navbar from './Components/Navbar';
/* Hero */
import Hero from './Components/Hero';
/* Our Team */
import OurTeam from './Components/OurTeam';
/* Services */
import Services from './Components/Services';
import Footer from './Components/Footer';

/* End of components  */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <OurTeam />
    <Services />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
