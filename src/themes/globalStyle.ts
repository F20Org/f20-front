import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        position: relative;
    }

    @font-face {
        font-family: 'Alagard'; 

        src: url('./src/assets/fonts/alagard.ttf') format('truetype');

        font-weight: normal;
        font-style: normal;
    }

    body {
        font-family: "Fira Sans", sans-serif;
    }

    #root{
        position: relative;
        display: flex;
        width: 100%;
        height: 100vh;
        background-color: #FAFAFA;

        padding-left: 320px;
    }
`
