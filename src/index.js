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
/* Footer */
import Footer from './Components/Footer';
/* Customers */
import Customers from "./Components/Customers";

/* End of components  */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Services />
    <Customers /> {/* Our Work*/}
    <OurTeam />
    <Footer />
  </React.StrictMode>
);
reportWebVitals();
