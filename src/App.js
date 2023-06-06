import React from "react";
import { BrowserRouter } from "react-router-dom"
import "../src/styles/App.scss"
import "../src/styles/AboutMe.scss"
import "../src/styles/Home.scss"
import "../src/styles/Media.scss"
import AnimatedRoutes from "./components/components/AnimatedRoutes";


const App = () =>{
  
  return(
    <BrowserRouter>
         <AnimatedRoutes />
    </BrowserRouter>
  )}
  export default App