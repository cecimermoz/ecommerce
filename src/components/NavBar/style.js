import styled from "styled-components";

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    justify-content: space-between;
    box-shadow: 0 4px 6px rgba(0,0,0, 0.2);
`;
export const NavLogo = styled.img`
    width: 70px;
`;
export const UlNav = styled.ul`
    display: flex;
    padding: 10px 15px;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    flex-basis: 60%;
`;

export const ANav = styled.a`
    text-decoration: none;
    color: red;
`;

