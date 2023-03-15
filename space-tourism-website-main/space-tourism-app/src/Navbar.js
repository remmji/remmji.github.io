import React from 'react'
import logo from "./assets/shared/logo.svg";
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
 const [isMobileOpen,setIsMobileOpen] = useState(false);
    
    function toggleMobileOpen (){
        setIsMobileOpen(!isMobileOpen);
    }


  return (
    <header className='home-header'>
        <div>
            <img src={logo} alt="logo" className='logo'/>
        </div>

        <button className='mobile-hamburger' aria-expanded={isMobileOpen}
        onClick={toggleMobileOpen}>
        </button>

        <nav>
            <ul className='main-navigation underline' data-visible={isMobileOpen?'true':'false'}>
                <li>
                <Link to="/"><span aria-hidden='true'>00</span>HOME</Link>
                </li>
                <li>
                <Link to="/Destination"><span aria-hidden='true'>01</span>DESTINATION</Link>
                </li>
                <li>
                <Link to="/Crew"><span aria-hidden='true'>02</span>CREW</Link>
                </li>
                <li>
                <Link to="/Technology"><span aria-hidden='true'>03</span>TECHNOLOGY</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar