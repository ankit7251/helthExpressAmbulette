import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Service from './pages/Service';
import AmbuletteService from './components/location/ambuletteService/AmbuletteService';
import StatenIsland from './components/location/statenIsland/StatenIsland';
import SouthBrooklyn from './components/location/southBrooklyn/SouthBrooklyn';
import FAQ from './pages/FAQ';
import ServiceForm from './components/service/ServiceForm';
import DriverForm from './pages/DriverForm';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/ambuletteService" element={<AmbuletteService />} />
        <Route path="/statenIsland" element={<StatenIsland />} />
        <Route path="/southBrooklyn" element={<SouthBrooklyn />} />
        <Route path="/faq" element={< FAQ />} />
        <Route path="/schedule" element={<ServiceForm />} />
        <Route path="/driverForm" element={<DriverForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
