/** @format */

import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    h1, h3, p{
        margin: 0;
        padding: 0;
    }

    ul{
        list-style: none;
        padding: 0;
    }
`;
