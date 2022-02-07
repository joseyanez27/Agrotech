import React, { useEffect, useState } from "react";
import styled from "styled-components";
import size from "../../assets/config/PageSize";

import {
  BodyContent,
  Container,
  HomeContainer,
  HomeContent,
  HomeHeader,
  HomeTitles,
} from "./Main.style";
import Fondo from "../../assets/images/dron2.png";
import Foto1 from "../../assets/images/8.png";
import Foto2 from "../../assets/images/3.png";
import Foto3 from "../../assets/images/5.png";
import Foto4 from "../../assets/images/100_0036.jpg";
import Foto5 from "../../assets/images/2031983.jpeg";
import Foto6 from "../../assets/images/administracion.png";
import { Paragraph, Title } from "../../assets/fonts/typesetting";

const Titulo = styled.h1`
  text-align: center;
  padding-right: 50px;
  font-size: 25px;
  color: #299174;
  font-family: "avenir-bold";
`;

const Slogan = styled.h3`
  font-family: avenir-regular;
  font-size: 20px;
  @media screen and (max-width: ${size.md}) {
    padding: 16px;
    font-size: 20px;
  }
`;

const Image = styled.img`
  background-image: ${({ bg }) => bg && `url(${bg})`};
  background-repeat: repeat;
  background-position: center top;
  background-size: auto 100%;
  width: 200px;
  height: 300px;

  @media screen and (max-width: ${size.md}) {
    width: 100px;
    height: 150px;
  }
`;

const Image2 = styled.div`
  background-image: ${({ bg }) => bg && `url(${bg})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: auto 100%;
  width: 400px;
  height: 600px;

  @media screen and (max-width: ${size.md}) {
    width: 100%;
    height: 400px;
    background-size: cover;
    flex: 1 1 auto;
  }
`;

const Image3 = styled.div`
  background-image: ${({ bg }) => bg && `url(${bg})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: auto 60%;
  height: 600px;
  width: 400px;

  p {
    width: 100%;
  }
  @media screen and (max-width: ${size.md}) {
    background-size: 80% auto;
    margin: 0 0px 0 0px;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: contain 100%;
    width: 100%;
    height: 600px;

    p {
      width: 100%;
      padding: 16px;
    }
  }
`;

const Content1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 56px;
  @media screen and (max-width: ${size.md}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 100px 0px 500px 0px;
    gap: 8px;
    background-size: 100% auto;
    height: 90vw;
    padding: 24px;
  }
`;

const Content2 = styled.div`
  margin: 0 200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media screen and (max-width: ${size.md}) {
    margin: 0 200px;
    width: 100%;
    display: flex;
    gap: 10px;
    height: 90vw;
  }
`;

const Cont1 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 300px;
  @media screen and (max-width: ${size.md}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 200px;
    gap: 10px;
  }
`;

const Cont2 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 250px;
  @media screen and (max-width: ${size.md}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 200px;
    gap: 10px;
  }
`;

const Cont3 = styled.div`
  position: relative;
  bottom: 200px;
  display: flex;
  flex-direction: row;
  gap: 64px;
  padding: 24px;
  @media screen and (max-width: ${size.md}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 200px;
    gap: 10px;
  }
`;

const ContColumn1 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media screen and (max-width: ${size.md}) {
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 200px;
    gap: 10px;
    height: 90vw;
  }
`;

const ContColumn2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media screen and (max-width: ${size.md}) {
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 150px;
    gap: 10px;
    height: 90vw;
  }
`;

const Pharagraph1 = styled.p`
  width: 100%;
  font-family: avenir-regular;
  color: #000;
  font-size: 20px;
  @media screen and (max-width: ${size.md}) {   
    width: 100%;
    display: flex;
    flex-direction: center;
    position: relative;
    margin: 0px 0px 100px 0px;
    gap: 10px;
    height: 90vw;
  }
`;

function Main() {
  return (
    <HomeContainer id="inicio flex">
      <HomeHeader bg={Fondo}>
        <HomeTitles>
          <img id="imagen" />
          <Title style={{ fontSize: "40px", paddingTop: "100px" }}>
            Lorem ipsum dolor
          </Title>
          <Slogan style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Slogan>
        </HomeTitles>
      </HomeHeader>
      <BodyContent>
        <Content2>
          <ContColumn1>
            <Cont1>
              <Image bg={Foto1} />
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Paragraph>
            </Cont1>
            <Cont2>
              <Image bg={Foto2} />
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Paragraph>
            </Cont2>
          </ContColumn1>

          <ContColumn2>
            <Cont1>
              <Image bg={Foto3} />
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Paragraph>
            </Cont1>
            <Cont2>
              <Image bg={Foto4} />
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Paragraph>
            </Cont2>
          </ContColumn2>
        </Content2>
      </BodyContent>
      <Cont3>
        <Titulo>Loren Ipsum dolor</Titulo>
        <Image2 bg={Foto5} /> 
        <Content1>
          <Image3
            bg={Foto6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
            }}
          >
            <Titulo>Lorem Ipsum</Titulo>
            <Pharagraph1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Pharagraph1>
          </Image3>
        </Content1>
      </Cont3>
    </HomeContainer>
  );
}

export default Main;
