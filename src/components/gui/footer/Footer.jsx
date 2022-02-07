import React, { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'


import {
    FooterContainer,
    FooterContent,
    FooterContainerResponsive,
    FooterContentResponsive,
    LeftContent,
    FooterLogo,
    RightContent,
    FooterRespAbout,
} from '../../../components/gui/footer/Footer.style'
import { Paragraph, Slogan } from '../../../assets/fonts/typesetting'

import logo from '../../../assets/images/logo-white.png'

function Footer() {
    return (
        <>
           <FooterContainer>
                <FooterContent>
                    <img src={logo} alt="logo" />
                </FooterContent>
                <hr />
                <FooterContent>
                    <Slogan></Slogan>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Paragraph>
                </FooterContent>
                <hr />
                <FooterContent>
                <Slogan></Slogan>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Paragraph>
                    {/*<a href={facebook}><ReactSVG src={iconFacebook} /></a>
                    <a href={instagram}><ReactSVG src={iconInstagram} /></a>
                    <a href={instagram}><ReactSVG src={iconInstagram} /></a>*/}
                </FooterContent>
            </FooterContainer>
            {/* =============================== Footer responsivo */}
            <FooterContainerResponsive>
                <FooterContentResponsive>
                    <LeftContent>
                        <FooterLogo src={logo} />
                        
                    </LeftContent>
                    <RightContent>
                        <FooterRespAbout>
                            <Slogan></Slogan>
                            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Paragraph>
                        </FooterRespAbout>
                    </RightContent>
                </FooterContentResponsive>
            </FooterContainerResponsive>
        </>
    )
}

export default Footer
