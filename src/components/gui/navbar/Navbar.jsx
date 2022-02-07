import React, { useState } from 'react'
import { HashLink } from "react-router-hash-link";
import { ReactSVG } from "react-svg";
import {
  Nav,
  NavContent,
  NavLogo,
  NavLink,
  NavItems,
  MenuContent,
  NavMenu,
  MenuSocialNetworks,
} from "./Navbar.style";

import logo from "../../../assets/images/logo-white.png";
import iconMenu from "../../../assets/icons/menu.svg";
import Menu from "../Menu";
import { NavParagraph } from '../../../assets/fonts/typesetting';
import { Link } from 'react-router-dom';



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <NavContent>
        
        <HashLink smooth to="/main">
          <NavLogo src={logo} alt="Logo" />
        </HashLink>

        <NavItems>
          <NavLink>
            <HashLink smooth to="/blog">
              <NavParagraph style={{ color: "#FFF" }}>Blog</NavParagraph>
            </HashLink>
          </NavLink>
          <NavLink>
            <HashLink as={Link} to="/servicio">
                <NavParagraph style={{ color: "#FFF" }}>Servicios</NavParagraph>
            </HashLink>
          </NavLink>
          <NavLink>
            <HashLink smooth to="/#about">
              <NavParagraph style={{ color: "#FFF" }}>Quienes Somos</NavParagraph>
            </HashLink>
          </NavLink>
          <NavLink>
            <HashLink smooth to="/#contacto">
              <NavParagraph style={{ color: "#FFF" }}>Contacto</NavParagraph>
            </HashLink>
          </NavLink>
        </NavItems>
      </NavContent>

      <MenuContent>
        <NavMenu onClick={() => setIsOpen(true)}>
          <ReactSVG src={iconMenu} />
        </NavMenu>
        <Menu setIsOpen={setIsOpen} isOpen={isOpen} />
        <NavLogo src={logo} alt="logo" />
        <MenuSocialNetworks>
          {/*<a href={facebook}><ReactSVG src={iconFacebook} /></a>
                    <a href={instagram}><ReactSVG src={iconInstagram} /></a>*/}
        </MenuSocialNetworks>
      </MenuContent>
    </Nav>
  )
}

export default Navbar
