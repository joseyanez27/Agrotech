import React from "react";
import styled from "styled-components";
import size from "../../assets/config/PageSize";

import {
  Titulo,
  Image,
  BodyContent,
  Container,
  HomeContainer,
  HomeContent,
  HomeHeader,
  HomeTitles,
} from "./Contact.style";

import { ButtonPage } from '../../assets/styles/Buttons.styles'

import Hands from "../../assets/images/hands.png";
import Phone from "../../assets/images/phone-01.png"
import Location from "../../assets/images/OBJECTS.png"
import Mail from "../../assets/images/correo-abierto.png"

import { Paragraph, Slogan, Title } from "../../assets/fonts/typesetting";

const Content1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  
  @media screen and (max-width: ${size.md}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    background-size: 100% auto;
    height: 90vw;
    padding: 24px;
  }
`;

const Content2 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 50%;

  @media screen and (max-width: ${size.md}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    background-size: 100% auto;
    height: 90vw;
    padding: 24px;
  }
`;

const Content3 = styled.div`
  width: 500px;
  background: #FFF;
  position: relative;
  bottom: 150px;
  left: 40px;
  padding: 26px;
  box-shadow: 0 0 8px rgba(0,0,0,.3);

  @media screen and (max-width: ${size.md}) {
  width: 500px;
  background: #FFF;
  position: relative;
  margin: 0px 0px 300px 0px;
  bottom: 150px;
  left: 40px;
  padding: 26px;
  box-shadow: 0 0 8px rgba(0,0,0,.3);
  }
`;

const Content4 = styled.div`
  display: flex; 
  flex-direction: column;

  @media screen and (max-width: ${size.md}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    background-size: 100% auto;
    height: 90vw;
    padding: 24px;
  }
`;

const Content5 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  @media screen and (max-width: ${size.md}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    background-size: 100% auto;
    height: 90vw;
    padding: 24px;
  }
`;

const Content6 = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: ${size.md}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px 0px 50px 0px;
    gap: 8px;
    background-size: 100% auto;
    height: 90vw;
    padding: 24px;
  }
`;


function Contact() {
  return (
    <Content1>
      <Content2>
        {/*<Image bg={Hands} />*/}
        <img src={Hands} width="500px" />
        <Content3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <form>
            <Content4>
              <label>Nombre</label>
              <input />
              <label>Correo electrónico</label>
              <input />
              <ButtonPage
                type="submit"
                style={{
                  width: "100px",
                  display: "flex",
                  alignSelf: "end",
                  textAlign: "center",
                }}
              >
                enviar
              </ButtonPage>
            </Content4>
          </form>
        </Content3>
      </Content2>
      <Content5>
        <Content6>
          <Titulo>Contacto</Titulo>
          <div>
            <img src={Phone} alt="image"  width="70px"/>
            <p style={{position:"relative", bottom:"40px", left:"20px"}}>+1234567890</p>
            <p style={{position:"relative", bottom:"40px", left:"20px"}}>+1234567890</p>
          </div>
          <div style={{position:"relative", left:"50px"}}>
            <img src={Location} alt="image"  width="70px"/>
            <p style={{position:"relative", bottom:"40px", left:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div>
            <img src={Mail} alt="image"  width="70px"/>
            <p style={{position:"relative", bottom:"40px", left:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>
        </Content6>
      </Content5>
    </Content1>
  );
}

export default Contact;
