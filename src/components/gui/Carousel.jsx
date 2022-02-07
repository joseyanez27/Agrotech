// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components'

import Foto1 from "../../assets/images/100_0098.png";
import Foto2 from "../../assets/images/6.png";
import Foto3 from "../../assets/images/6.png";
import Foto4 from "../../assets/images/6.png";
import Foto5 from "../../assets/images/6.png";

// Import Swiper styles
import 'swiper/css';
import size from '../../assets/config/PageSize';
import { ButtonPage } from '../../assets/styles/Buttons.styles'
import { Paragraph } from "../../assets/fonts/typesetting";

const Title = styled.h1`
margin: 0px 50px 10px;
    font-family:  impact;
    font-size:16px;
    //padding-left: 50 px;
    color: #299174;
    @media screen and (max-width: ${size.md}) {
      width: 100%;
      height: 100%;
      margin: 0px 0px 0px 0px;
        font: normal normal normal 10px venatici-regular
    }
`;

export default () => {
  return (
    <>
    <Title>Relacionados</Title>
        
    <Swiper
      style={{margin:"0px 50px"}}
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >      
      <SwiperSlide style={{boxShadow: "0 0 8px rgba(0,0,0,.3)"}}><img src={Foto1} width="100%" />
      <Title>Lorem ipsum dolor</Title>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur</Paragraph>
      <ButtonPage>Leer articulo</ButtonPage>
      </SwiperSlide>      
      
      <SwiperSlide style={{boxShadow: "0 0 8px rgba(0,0,0,.3)"}}><img src={Foto1} width="100%" />
      <Title>Lorem ipsum dolor</Title>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur</Paragraph>
      <ButtonPage>Leer articulo</ButtonPage>
      </SwiperSlide>

      <SwiperSlide style={{boxShadow: "0 0 8px rgba(0,0,0,.3)"}}><img src={Foto1} width="100%" />
      <Title>Lorem ipsum dolor</Title>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur</Paragraph>
      <ButtonPage>Leer articulo</ButtonPage>
      </SwiperSlide>      

      <SwiperSlide style={{boxShadow: "0 0 8px rgba(0,0,0,.3)"}}><img src={Foto1} width="100%" />
      <Title>Lorem ipsum dolor</Title>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur</Paragraph>
      <ButtonPage>Leer articulo</ButtonPage>
      </SwiperSlide>      

      <SwiperSlide><img src={Foto1} />
      <Title>Lorem ipsum dolor</Title>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur</Paragraph>
      <ButtonPage>Leer articulo</ButtonPage>
      </SwiperSlide>    
            
    </Swiper>

    </>
  );
};
