import React from "react";
import styled from "styled-components";
import size from "../../assets/config/PageSize"

import {
  HomeContainer,
  HomeHeader,
  BodyContent,
  Titulo,
  Image,
  Image2,
  Content1,
  Content2,
  Content3,
  Content4,
} from "./Blog.style";

import { ButtonPage } from '../../assets/styles/Buttons.styles'
import Foto1 from "../../assets/images/document-signed.png";
import Foto2 from "../../assets/images/7.png";
import { Paragraph, Slogan, Title } from "../../assets/fonts/typesetting";


const Content = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
gap: 160px; 
 
 @media screen and (max-width: ${size.md}) { 
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 150px;
  gap: 10px;
  height: 90vw;
    }
`;

function Blog() {
  return (
    <div>
      <HomeContainer id="blog">
        <HomeHeader></HomeHeader>
        <BodyContent></BodyContent>



        <Content>


          <Content1>
            <Image src={Foto1} />


            <Content2>
              <Titulo>Loren Ipsum dolor sit</Titulo>
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
              <ButtonPage style={{margin:"0 200px 0 0", }}>Leer articulo</ButtonPage>


            </Content2>
          </Content1>

          <Content3>
            <Image2 src={Foto2} style={{ display: "flex", flexDirection: "column", justifyContent: "end" }}></Image2>

          </Content3>

        </Content>

        <Content4>
        <Titulo>Loren Ipsum dolor sit</Titulo>
        <Paragraph>Lorem ipsum dolor sit</Paragraph>
        </Content4>

       
      </HomeContainer>
    </div>
  );
}

export default Blog;
