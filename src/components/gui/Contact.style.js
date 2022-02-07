import styled from "styled-components";
import PageSize from "../../assets/config/PageSize";
import size from "../../assets/config/PageSize"

export const ContactContainer = styled.section`
display: flex;
flex-direction: column;
width: 100%;
`;

export const Titulo = styled.h1`
  text-align: right;
  padding-right: 50px;
  font-size: 25px;
  color: #299174;
  font-family: impact;
`;

export const HomeContainer = styled.section`
    padding-top:50px;
    width: 100%;
    @media only screen and (max-width: 600px) {
        padding-top:0;
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

export const Image = styled.div`
max-width: 50px;
`;

export const Paragraph = styled.p`
    font: normal normal normal 1vw venatici-regular;
`;

