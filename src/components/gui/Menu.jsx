import React from 'react'
import { HashLink } from 'react-router-hash-link'

import {
    ButtonClose,
    MenuContainer,
    MenuFullScreen,
    NavLink
} from '../../assets/styles/Menu.style'

import iconClose from '../../assets/icons/delete.svg'

function Menu({ setIsOpen, isOpen }) {

    return (
        <MenuFullScreen isOpen={isOpen}>
            <MenuContainer>
                <ButtonClose src={iconClose} onClick={() => setIsOpen(!isOpen)} />
                <hr />
                <NavLink onClick={() => setIsOpen(false)}>
                    <HashLink smooth to="#blog">
                        Blog
                    </HashLink>
                </NavLink>
                <hr />
                <NavLink onClick={() => setIsOpen(false)}>
                    <HashLink smooth to="#service">
                        Servicios
                    </HashLink>
                </NavLink>
                <hr />
                <NavLink onClick={() => setIsOpen(false)}>
                    <HashLink smooth to="#about">
                        Nosotros
                    </HashLink>
                </NavLink>
                <hr />               
                <NavLink onClick={() => setIsOpen(false)}>
                    <HashLink smooth to="#contact">
                        Contacto
                    </HashLink>
                </NavLink>
                <hr />                
                {/*<NavLink onClick={() => setIsOpen(false)}>
                    <HashLink smooth to="#promociones">
                        Promociones
                    </HashLink>
                    </NavLink>
                <hr />*/}
            </MenuContainer>
        </MenuFullScreen>
    )
}

export default Menu
