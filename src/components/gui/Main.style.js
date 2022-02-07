import styled from 'styled-components'
import size from '../../assets/config/PageSize';


export const HomeContainer = styled.section`
    //padding-top:50px;
    width: 100%;
    @media only screen and (max-width: 600px) {
        padding-top:0;
}
`;

export const HomeContent = styled.div`
    background-image: ${({ bg }) => bg && `url(${bg})`};
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 80% auto;
    width: 100%;
    height: 60vw;

    @media screen and (max-width: ${size.lg}) {
        background-size: 100% auto;
        height: 70vw;
    }
    @media screen and (max-width: ${size.md}) {
        background-size: 120% auto;
        height: 90vw;
    }
`;

export const HomeHeader = styled.div`
    background-image: ${({ bg }) => bg && `url(${bg})`};
    background-size: 100% 80%;
    background-repeat: no-repeat;
    width: 100%;
    height: 800px;
    display: flex;


    @media screen and (max-width: ${size.lg}) {
        background-size: 100% auto;
    }
    @media screen and (max-width: ${size.md}) {
        background-size: 250% auto;
        width: 100%;
        height: 900px;
        display: flex;
    }
`;

export const HomeTitles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16vw 0 0 0;

    h1 { //Título
        color: #FFF;
        width: 90%;
        font-weight: bold;
        font-size: 50px;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    h3 { // Slogan
        color: #FFF;
    }

    @media screen and (max-width: ${size.lg}) {
        width: 100%;
        margin: 2px 0 0 0;
        h1 { font: normal normal normal 8vw patrizia; font-weight: bold; text-align: center; }
    }
    @media screen and (max-width: ${size.md}) {
        width: 100%;
        margin: 0vh 0;
        padding: 8vw 0 0 0;
        h1 { font: normal normal normal 10vw patrizia; font-weight: bold; text-align: center; }
    }

`;

export const BodyContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;

   /*  div { */
       /*  display: flex;
        flex-direction: column;
        align-items: center;
        width: 100px;
    } */
    h1{

        align-self: center; 
    }

    h3 {
        margin: 10px auto;
        color: #000;
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
        width: 100%;
        margin: 0px 500px 0  0;
        h3 { font: normal normal normal 6vw monserrat; }
        p { font: normal normal normal 3vw monserrat; }
        hr { height: 22vw; }
    }
`;

export const Titulo = styled.h1`
text-align:left;
padding-right: 50px;
font-size: 35px;
font-family: impact;
`;


export const Image = styled.img`
    max-width: 50px;
    
`;
