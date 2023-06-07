import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../src/styles/App.scss"
import "../src/styles/AboutMe.scss"
import "../src/styles/Home.scss"
import "../src/styles/Media.scss"
import Navigation from "./components/components/Navigation";
import MobileNavigation from "./components/components/MobileNavigation";
import AboutMe from "./components/pages/AboutMe";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import ContactMe from "./components/pages/ContactMe"

import Header from "./components/components/Header";


const App = () =>{
  
  return(
    <BrowserRouter>
      <Navigation />
      <MobileNavigation />
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<ContactMe />} />
        </Routes>   
    </BrowserRouter>
  )}
  export default App