import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import Hours_Location from './pages/Hours_Location';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
 
  return (
    <>
      <About/>
      {/* <Home/>
      <Menu/>
      <FAQ/>
      <Hours_Location/>
      <ContactUs/>  */}
    </>
  )
}

export default App;
