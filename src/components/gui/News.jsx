import React from 'react'

import {
    HomeContainer,
    HomeHeader,
    BodyContent,
    Titulo,
    Image,
  } from "./News.style";

import { ButtonPage } from '../../assets/styles/Buttons.styles'
import Foto1 from "../../assets/images/100_0098.png";
import { Paragraph, Slogan, Title } from "../../assets/fonts/typesetting";


function News() {
    return (
        <div>
             <HomeContainer id="inicio flex">
        <HomeHeader></HomeHeader>
        <BodyContent></BodyContent>

        <Titulo>Loren Ipsum dolor sit amet,</Titulo>

        <div style={{padding:"10px 150px", width:"100%", display:"flex", flexDirection: "row", justifyContent: "center", gap:"16px" }}>
          
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
          <Image src={Foto1} style={{ display: "flex", flexDirection: "column", justifyContent: "end" }}>

          </Image>
        </div>

        
      </HomeContainer>
        </div>
    )
}

export default News
