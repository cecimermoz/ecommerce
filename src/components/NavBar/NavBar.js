import React from 'react';
import logo from '../../img/logo.png';
import "./NavBar.css";
import NavItems from "./NavItems";


const NavBar = () => {
    return(
        <nav>
            <img src={logo} />
            <NavItems />
        </nav>
    )
}

export default NavBar;