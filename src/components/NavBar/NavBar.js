import React from 'react';
import logo from '../../img/logo.png';
import { NavContainer, NavLogo, CategoryLink } from "./style";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


const NavBar = ({categories}) => {
    
    return(
        <NavContainer>
            <Link to={'/'}><NavLogo src={logo} /></Link>
            {categories.map((cate) => (
                <CategoryLink key={cate.id} to={`/category/${cate.id}`}>{cate.name}</CategoryLink>
            ))}
            <CartWidget />
        </NavContainer>
    )
}

export default NavBar;