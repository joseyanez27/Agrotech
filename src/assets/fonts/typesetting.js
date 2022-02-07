import styled from "styled-components";
import size from "../config/PageSize";

export const Title = styled.h1`
    font-family:  "avenir-bold";
    font-size:12px;
    padding-left: 50 px;
    @media screen and (max-width: ${size.md}) {
        font-family: "avenir-bold",
    }
`;

export const SubTitle = styled.h2`
    font: normal normal normal 15vw avenir-regular;
`;

export const Slogan = styled.h3`
    font: normal normal normal 2.5vw avenir-regular;
    padding-left: 50px;
`;

export const Paragraph = styled.p`
    font: normal normal normal 1vw avenir-regular;
    color: #000;
`;
export const NavParagraph = styled.p`
    font: normal normal normal 1vw avenir-regular;
    color: #FFF;
`;

// ===================================================== Dashboard Cards
export const CardTitle = styled.h3`
    font: normal normal normal 22px avenir-regular;
    font-weight: bold;
    color: rgb(147,69,165);
`;
export const CardSubTitle = styled.h5`
    font: normal normal normal 14px avenir-regular;
    font-weight: bold;
    color: rgb(147,69,165);
`;

export const CardParagraph = styled.p`
    font: normal normal normal 12px avenir-regular;
    color: rgb(0,0,0);
`;

export const CardData = styled.span`
    font: normal normal normal 12px avenir-regular;
    color: rgb(0,0,0);
`;

// ========================================================== Modals

export const ModalTitle = styled.h3`
    font: normal normal normal 22px avenir-regular;
    font-weight: bold;
    color: rgb(147,69,165);
`;

export const ModalSubTitle = styled.h5`
    font: normal normal normal 14px avenir-regular;
    font-weight: bold;
    color: rgb(147,69,165);

`;

export const ModalParagraph = styled.p`
    font: normal normal normal 12px avenir-regular;
    color: rgb(0,0,0);
`;

export const ModalData = styled.span`
    font: normal normal normal 12px avenir-regular;
    color: rgb(0,0,0);
`;

// =========================================================== Webpay
export const WebpayTitle = styled.h1`
    font: normal normal normal 32px avenir-regular;
    font-weight: bold;
    color: rgb(147,69,165);
`;
export const WebpaySubtitle = styled.h4`
    font: normal normal normal 16px avenir-regular;
    font-weight: bold;
    color: rgb(147,69,165);
`;
export const WebpayPharagraph = styled.p`
    font: normal normal normal 12px avenir-regular;
    color: rgb(0,0,0);
`;
export const WebpayMessage = styled.p`
    font: normal normal normal 12px avenir-regular;
    color: red;
`;

// ============================================================ Button
export const BtnWhatsapp = styled.p`
    font: normal normal normal 40px avenir-regular;
    color: #FFFFFF;
    font-weight: bold;
`;