import React from "react";
import styled from "styled-components";

import {
  Image,
  Titulo,
  Content1,
  Content2,
  Content3,
  Content4,
  Content5,
} from "./Service.style";

import Arbol from "../../assets/images/arbol-frutal.png";
import Services from "../../assets/images/ICONOS SERVICIOS-01.png";
import Services2 from "../../assets/images/ICONOS SERVICIOS-02.png";
import Services3 from "../../assets/images/ICONOS SERVICIOS-03.png";
import Camara from "../../assets/images/Enmascarar grupo 19.png";

import { Paragraph, Slogan, Title } from "../../assets/fonts/typesetting";

function Service() {
  return (
    <div id="service"
      style={{
        gap: "64px",
        width: "100%",
        padding: "32px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <Content1>
        <Image bg={Arbol}>
          <Titulo>Servicios</Titulo>
        </Image>
        <Paragraph style={{fontSize:"16px", margin:"50px"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
      </Content1>

      <Content2>
        <Content3>
          <img
            src={Services}
            width="100px"
            height="100px"
            style={{ display: "flex", alignSelf: "center" }}
          />
          <p>Información en tiempo real</p>
          <Paragraph>1 Diagnóstico vía dron cámara multiespectral.</Paragraph>
          <Paragraph>
            2 Identificación de posibles problemas sanitarios.
          </Paragraph>
          <Paragraph>3 Recomendación de solución de diagnóstico.</Paragraph>
        </Content3>

        <Content4>
          <img
            src={Services2}
            width="100px"
            height="100px"
            style={{ display: "flex", alignSelf: "center" }}
          />
          <p>Imagenes RGB y NDVI en directo</p>
          <Paragraph style={{textAline:"justify"}}>Cámara multiespectral permite cambiar entre análisis NDVI e imagenes RGB en tiempo real, facilitando la toma de descisiones desde el momento del vuelo.</Paragraph>
        
          <img
            src={Camara}
            width="300px"
            height="150px"
            style={{ display: "flex", alignSelf: "center", padding: "26px", }}
          />

        </Content4>

        <Content5>
          <img
            src={Services3}
            width="100px"
            height="100px"
            style={{ display: "flex", alignSelf: "center" }}
          />
          <p>Diagnóstico productivo</p>
          <Paragraph>1 Meición del estrés del cultivo.</Paragraph>
          <Paragraph>
            2 Detectar sectores débiles en el fundo.
          </Paragraph>
          <Paragraph>3 Análizar déficit hidrico.</Paragraph>
        </Content5>
      </Content2>
    </div>
  );
}

export default Service;
