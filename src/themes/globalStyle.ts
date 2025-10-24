import { createGlobalStyle } from 'styled-components'

import AlagardFont from 'assets/fonts/alagard.ttf'
import AlkhemikalFont from 'assets/fonts/Alkhemikal.ttf'

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

        src: url(${AlagardFont}) format('truetype');

        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Alkhemikal'; 

        src: url(${AlkhemikalFont}) format('truetype');

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
        background-color: #FFF;
    }
`
