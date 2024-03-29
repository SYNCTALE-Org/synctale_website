import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
/* Footer */
import Footer from './Components/Footer';
/* Customers */
import Customers from "./Components/Customers";
import Contact from "./Components/Contact";

/* End of components  */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Services />
    <Customers /> {/* Our Work*/}
    <OurTeam />
    <Contact />
    <Footer />
  </React.StrictMode>
);
reportWebVitals();
