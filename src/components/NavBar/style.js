import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    padding: 10px 25px;
    justify-content: space-between;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0,0,0, 0.3);
`;
export const NavLogo = styled.img`
    width: 45px;
`;
export const CartBubble = styled.span`
    background-color: #757575;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    position: absolute;
    right: 12px;
    top: 15px;
`;
export const CategoryLink = styled(Link)`
    text-decoration: none;
    color: #ed4172;
    font-weight: 400;
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    padding: 5px 0;
    transition: ease 200ms;
    &:hover{
        border-color: #ed4172;
        transition: ease 500ms;
    }
`; 
