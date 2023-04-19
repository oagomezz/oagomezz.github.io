import React from "react"
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";


const Header = () => {
  
    return (
      <>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap');
          </style>
        <div id="top"></div>
        <Navigation />
        <MobileNavigation />
      </>
    );
  }


export default Header