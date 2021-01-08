import React from 'react';
import logo from '../../img/logo.png';
import { NavContainer, NavLogo } from "./style";
import NavCart from "./NavCart";

const NavBar = () => {
    return(
        <NavContainer>
            <NavLogo src={logo} />
            <NavCart />
        </NavContainer>
    )
}

export default NavBar;