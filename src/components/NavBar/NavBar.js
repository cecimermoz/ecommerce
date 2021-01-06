import React from 'react';
import logo from '../../img/logo.png';
import NavItems from "./NavItems";
import { NavContainer, NavLogo } from "./style";

const NavBar = () => {
    return(
        <NavContainer>
            <NavLogo src={logo} />
            <NavItems />
        </NavContainer>
    )
}

export default NavBar;