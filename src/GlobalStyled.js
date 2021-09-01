import { createGlobalStyle } from "styled-components";
import backgroundImage from "./img/doodle.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    *, ::after, ::before {
        box-sizing: inherit;
        -webkit-font-smoothing: inherit;
    }

    body {
        font-family: 'Dela Gothic One', cursive;
        background-color: #005857;
        margin: 0px;
        background-image: url(${backgroundImage});
        background-size: 750px;
        background-position: center;
        background-attachment: fixed;
    }

    a {
        text-decoration: none;
    }
`;