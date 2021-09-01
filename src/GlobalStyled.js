import { createGlobalStyle } from "styled-components";
import backgroundImage from "./img/doodle.jpg";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;0,700;1,400&display=swap');

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