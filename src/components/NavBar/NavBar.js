import React from 'react';
import logo from '../../img/logo.png';
import { NavContainer, NavLogo } from "./style";
import CardWidget from "./CardWidget";

const NavBar = () => {
    return(
        <NavContainer>
            <NavLogo src={logo} />
            <CardWidget />
        </NavContainer>
    )
}

export default NavBar;