import styled from "styled-components";
import size from "../config/PageSize"

export const Nav = styled.nav`
    background: "#FFF";
    width: 100%;
    height: 138px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    z-index: 5000;
    @media screen and (max-width: 600px) {
        height: auto;
        position: static;
    }
`;

export const NavContent = styled.div`
    background-color: #FFF;
    width: 100%;
    display: flex;
    flex-direction: row;
    
    
    
    @media screen and (max-width: ${size.md}) {
        display: none;

    }
`;

export const NavLogo = styled.img`
    width: 150px;
    margin: 16px 16px 2px 16px;
    fill: #FFF;
    

    @media screen and (max-width: ${size.md}) {
        width: 100px;
        display: flex;
        justify-self: right;
    }
`;

export const NavItems = styled.div`
    display: flex;
    width: 80%;
    height: 100px;
    justify-content: space-evenly;
    align-items: flex-end   ;
    margin: 0px 0px 10px 0px;
    gap: 10px;
    
`;

export const NavLink = styled.a`
    display: flex;
    width: auto;
    height: auto;

    p{
        color: #000;
        font: normal normal normal 16px montserrat;
        :hover {
        font: normal normal normal 18px montserrat;

        }
    }
`;

export const SocialNetworks = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px 32px;
    gap: 16px;

    @media screen and (max-width: ${size.md}) {
        display: none;
    }
`;

// ---------------------------------------------- Menu Responsivo
export const MenuContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    
    @media screen and (min-width: ${size.md}) {
        display: none;
    }
`;

export const NavMenu = styled.div`
    height: 40px;
    width: 40px;
    cursor: pointer;

    svg {
        fill: #000;
        height: auto;
        width: 60px;
        padding: 20px 0 0 20px;
    }
`;

export const MenuSocialNetworks = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 16px 0 0;
    gap: 6px;

    
`;