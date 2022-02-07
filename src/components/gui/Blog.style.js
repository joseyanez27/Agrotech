import styled from "styled-components";
import size from "../../assets/config/PageSize"

export const HomeContainer = styled.section`
    padding-top:50px;
    width: 100%;
    @media only screen and (max-width: 600px) {
        padding-top:0;
}
`;

export const HomeHeader = styled.div`
    background-image: ${({ bg }) => bg && `url(${bg})`};
    background-size: 100% 80%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    display: flex;


    @media screen and (max-width: ${size.lg}) {
        background-size: 120% auto;
    }
    @media screen and (max-width: ${size.md}) {
        background-size: 150% auto;
    }
`;

export const BodyContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0px 0px 0px 0px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100px;
    }
    h1{

        align-self: center; 
    }

    h3 {
        margin: 10px auto;
        color: #9344a5;
        font-weight: bold;
    }
    
    p {
        text-align: center;
        font-weight: bold;
    }

    hr {
        border: none;
        border-left: 2px solid rgb(184,184,184);
        height: 9vw;
        width: 2px;
    }

    @media screen and (max-width: ${size.md}) {
        width: 90%;
        h3 { font: normal normal normal 6vw monserrat; }
        p { font: normal normal normal 3vw monserrat; }
        hr { height: 22vw; }
    }

`;

export const Titulo = styled.h1`
  font-size: 25px;
  color: #299174;
  font-family: impact;
`;

export const Image = styled.img`
max-width: 100px;
margin:"50px";
`;

export const Image2 = styled.img`
max-width: 500px;
@media screen and (max-width: ${size.md}) {
    max-width: 300px;
        
    }
`;

export const Content1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  margin: 50px;
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

export const Content2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 100px;
  @media screen and (max-width: ${size.md}) {
    width: 100%;
    height: 100%;
    padding:  32px 0;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    margin: 550px 0px 0px 0px;
    gap: 8px;
    background-size: 100% auto;
    height: 90vw;
    padding: 24px;
  }
`;

export const Content3 = styled.div`
  padding: 50px 0 0 0;
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

export const Content4 = styled.div`
  padding: 0 50px;
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