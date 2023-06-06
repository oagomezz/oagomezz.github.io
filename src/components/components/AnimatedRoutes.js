import React from 'react'
import AboutMe from "../pages/AboutMe";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import ContactMe from "../pages/ContactMe";
import { Routes, Route} from "react-router-dom";
import Header from "../components/Header";

const AnimatedRoutes = ({open}) => {
  return (
    <>
         <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<ContactMe />} />
        </Routes>
    </>
  )
}

export default AnimatedRoutes