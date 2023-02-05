import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    :root{
        --color-primary:  #27AE60;
        --color-primary-100: #2cc36b;
        --color-primary-50:  #93D7AF;
        --color-secundary: #EB5757;
        --color-grey-100:  #333333;
        --color-grey-50: #828282;
        --color-grey-20: #E0E0E0;
        --color-grey-0: #F5F5F5;
        --color-white: #ffffff;

        --title1: 1.625rem;
        --title2: 1.375rem;
        --title3: 1.125rem;
        --title4: .875rem;
        --fontDefault: 1rem;
        --font1: .875rem;
        --font2: .75rem; 
        --font3: .625rem;
    }

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        list-style: none;
    }

    body{
        min-height:100vh;
        background-color: ${({theme}) => theme.colors.colorGrey0};
    }

`

export default Global

