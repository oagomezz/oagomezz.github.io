import React from 'react';


const NavLinks = () => {
    return ( 
       <ul className='navbar'>
            <li className='navbar-item'>
                <a href="/">Home</a>
            </li>
            <li className='navbar-item'>
                <a href="/about">About Me</a>
            </li>
            <li className='navbar-item'>
                <a href="/portfolio">Portfolio</a>
            </li>
            <li className='navbar-item'>
                <a href="/resume">Resume</a>
            </li>
            <li className='navbar-item'>
                <a href="/contact"> Contact Me</a>
            </li>
       </ul>
     );
}
 
export default NavLinks;