import React from 'react'
import AboutMe from "../pages/AboutMe";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import ContactMe from "../pages/ContactMe";
import { Routes, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from 'framer-motion'
import Header from "../components/Header";

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
         <Header />
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<ContactMe />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes