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
    // <>
    //   {/* <About/> */}
    //   <Home/>
    //   {/* <Menu/> */}
    //   {/* <FAQ/> */}
    //   {/* <Hours_Location/> */}
    //   {/* <ContactUs/>  */}
    // </>
    <Router>
      <div className='App'>
        <Header></Header>
        <div className='content'>
            <ScrollToTop/>
          <Routes>
            <Route exact path="/" element = {<Home/>}>
            </Route>
            <Route exact path="/About" element = {<About/>}>
            </Route>
            <Route exact path="/Menu" element = {<Menu/>}>
            </Route>
            <Route exact path="/Hours_Location" element = {<Hours_Location/>}>
            </Route>
            <Route exact path="/FAQ" element = {<FAQ/>}>
            </Route>
            <Route exact path="/ContactUs" element = {<ContactUs/>}>
            </Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>

  )
}

export default App;
