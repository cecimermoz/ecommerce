import React from 'react';
//import "./NavBar.css";
import { UlNav, ANav } from "./style";

const NavItems = () => {
    return(
        <UlNav>
            <li><ANav> INICIO </ANav></li>
            <li><ANav> QUIENES SOMOS </ANav></li>
            <li><ANav> PRODUCTOS </ANav></li>
            <li><ANav> CONTACTO </ANav></li>
        </UlNav> 
    )
}


export default NavItems;