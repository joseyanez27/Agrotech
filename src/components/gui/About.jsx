import React from "react";
import styled from "styled-components";
import size from "../../assets/config/PageSize";

import Fondo from "../../assets/images/greenimage.png";
import Dron from "../../assets/images/dron.png";
import Contacts from "../../assets/images/contacts.png";

import { Paragraph, Slogan, Title } from "../../assets/fonts/typesetting";
import Contact from "./Contact";

const Image = styled.div`
  background-image: ${({ bg }) => bg && `url(${bg})`};
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% auto;
  width: 200px;
  height: 200px;
  display:flex;
  align-items:end;
  @media screen and (max-width: ${size.md}) {
    width: 100%;
    height: 100%;
    padding:  32px 0px;
    display: flex; 
    justify-content: space-between;
    gap: 8px;
    background-size: 100% auto;
    height: 90vw;
    padding: 24px;
  }
`;

const Image2 = styled.div`
  background-image: ${({ bg }) => bg && `url(${bg})`};
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% 100%;
  width: 300px;
  height: 400px;
  @media screen and (max-width: ${size.md}) {
    width: 100%;
    height: 100%;
    display: flex; 
    justify-content: space-between;
    margin: 0px 100px;
    gap: 8px;
    background-size: 100% auto;
    height: 90vw;
    padding: 24px 100px;
  }
`;

const Titulo = styled.h1`
  text-align: left;
  padding-right: 50px;
  font-size: 25px;
  color: #299174;
  font-family: impact;
  @media screen and (max-width: ${size.md}) {
    width: 100%;
    height: 100%;
    padding:  32px 0;
    display: flex; 
    justify-content: space-between;
    margin: 100px 10px;
    gap: 8px;
    background-size: 100% auto;
    height: 90vw;
    padding: 24px;
  }
`;

const Content1 = styled.div`
  width: 100%;
  height: 100%;
  padding:  32px 0;
  display: flex; 
  justify-content: space-between;
  @media screen and (max-width: ${size.md}) {
    width: 100%;
    height: 100%;
    padding:  32px 0;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    background-size: 100% auto;
    height: 90vw;
    padding: 24px;
  }
`;

const Content2 = styled.div`
 width: 50%;
 display: flex;
 flex-direction: column;
 margin:50px;
  @media screen and (max-width: ${size.md}) {
    width: 100%;
    height: 100%;
    padding:  32px 0;
    display: flex; 
    justify-content: space-between;
    gap: 8px;
    background-size: 100% auto;
    height: 90vw;
    padding: 24px;
  }
`;

function About() {
  return (
    <Content1>

      <Content2>
        <Image bg={Contacts} >
          <Titulo>Quienes Somos</Titulo>
        </Image>

        <Paragraph style={{ fontSize: "16px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
      </Content2>


      <Image2 bg={Fondo} >
        <img src={Dron} width="400px" height="300px" style={{ position: "relative", top: "25px", right: "200px" }} />
      </Image2>
    </Content1>
  );
}

export default About;
