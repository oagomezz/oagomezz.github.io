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
        // <NavItem className="nav-buttons" >
        //   <NavLink  to="/" className="nav-link">
        //     Home
        //   </NavLink>
        // </NavItem>
        // <NavItem className="nav-buttons">
        //   <NavLink  to="/aboutme" className="nav-link">
        //     About Me
        //   </NavLink>
        // </NavItem>
        // <NavItem className="nav-buttons">
        //   <NavLink  to="/portfolio" className="nav-link">
        //     Portfolio
        //   </NavLink>
        // </NavItem>
        // <NavItem className="nav-buttons">
        //   <NavLink to="/resume" className="nav-link">
        //     Resume
        //   </NavLink>
        // </NavItem>
        // <NavItem className="nav-buttons">
        //   <NavLink  to="/contactme" className="nav-link">
        //     Contact Me
        //   </NavLink>
        // </NavItem>
     
     );
}
 
export default NavLinks;