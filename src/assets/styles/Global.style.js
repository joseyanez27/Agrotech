import { createGlobalStyle } from "styled-components";
import { avenir } from "../fonts/fonts";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'avenir-regular';
        src: url(${avenir.regular}) format('woff');
    }


    @font-face {
        font-family: 'avenir-semibold';
        src: url(${avenir.semibold}) format('woff');
    }

    @font-face {
        font-family: 'avenir-bold';
        src: url(${avenir.bold}) format('woff');
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        width: 100%;
        font-family: 'avenir-regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        z-index: 100;
    }

    a {
        text-decoration: none;
    }

`;