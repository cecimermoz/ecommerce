import React from 'react';
import "./NavBar.css";

const NavItems = () => {
    return(
        <ul className="nav-list">
            <li><a href="#"> INICIO</a></li>
            <li><a href="#"> QUIENES SOMOS</a></li>
            <li><a href="#"> PRODUCTOS</a></li>
            <li><a href="#"> CONTACTO</a></li>
        </ul>
    )
}

export default NavItems;