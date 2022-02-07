import styled from "styled-components";
import size from "../../assets/config/PageSize"

export const Image = styled.div`
  background-image: ${({ bg }) => bg && `url(${bg})`};
  background-repeat: repeat;
  background-position: center top;
  background-size: auto 100%;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: end;
`;

export const Titulo = styled.h1`
  text-align: left;
  padding-right: 50px;
  font-size: 25px;
  color: #299174;
  font-family: impact;
`;

export const Content1 = styled.div`
  display: flex;
  align-items: end;
  margin:50px;
  @media screen and (max-width: ${size.md}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 0px 100px 0px;
    gap: 8px;
    background-size: 100% auto;
    height: 90vw;
    padding: 24px;
  }
`;

export const Content2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media screen and (max-width: ${size.md}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 0px 100px 0px;
    gap: 8px;
    background-size: 100% auto;
    height: 90vw;
    padding: 24px;
  }
`;

export const Content3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background: #FFF;
  position: relative;
  padding: 26px;
  box-shadow: 0 0 8px rgba(0,0,0,.3);
  @media screen and (max-width: ${size.md}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 100px 0px 0px 0px;
    gap: 8px;
    background-size: 100% auto;
    height: 90vw;
    padding: 24px;
  }
`;

export const Content4 = styled.div`
   display: flex;
   flex-direction: column;
   width: 300px;
   background: #FFF;
   padding: 26px;
   box-shadow: 0 0 8px rgba(0,0,0,.3);
  @media screen and (max-width: ${size.md}) {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px 0px 0px 0px;
    gap: 8px;
    background-size: 100% auto;
    height: 90vw;
    padding: 24px;
  }
`;

export const Content5 = styled.div`
   display: flex;
   flex-direction: column;
   width: 300px;
   background: #FFF;
   position: relative;
   padding: 26px;
   box-shadow: 0 0 8px rgba(0,0,0,.3);
  @media screen and (max-width: ${size.md}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px 0px 0px 0px;
    gap: 8px;
    background-size: 100% auto;
    height: 90vw;
    padding: 24px;
  }
`;

