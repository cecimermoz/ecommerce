import styled from "styled-components";

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    padding: 10px 25px;
    justify-content: space-between;
    box-shadow: 0 2px 8px rgba(0,0,0, 0.1);
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

/*
export const ListNav = styled.div`
    display: flex;
    padding: 10px 15px;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    flex-basis: 60%;
`;

export const ANav = styled.a`
    text-decoration: none;
    color: #cd003c;
    cursor: pointer;
    text-transform: uppercase;
    :hover{
        color: rgba(0,0,0,0.75);
    }
`;

*/