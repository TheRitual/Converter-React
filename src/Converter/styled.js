import styled, { css } from "styled-components";

export const StyledConverter = styled.section`
    flex-basis: 400px;
    margin: 30px;
    text-align: center;
    font-size: 20px;
    color: #005857;
    background-color: #FFF;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 0 10px 10px #00000099;
    ${({ hidden }) => hidden && css`display: none;`}
`;

export const ConverterHeader = styled.h2`
    padding: 0px;
`;

export const ConverterSelect = styled.select`
    font-family: 'Dela Gothic One', cursive;
    width: 150px;
    text-align: center;
    border: #000 solid 2px;
    border-radius: 10px;
    padding: 10px;
    background-color: #FFF;
    color: #005857;
    &:active {
       background-color: #005857;
        color: #FFF;
    }
    &:focus {
        background-color: #005857;
        color: #FFF;
    }
`;

export const ConverterField = styled.input`
    font-family: 'Dela Gothic One', cursive;
    width: 250px;
    text-align: center;
    border: #000 solid 2px;
    border-radius: 10px;
    padding: 10px;
    background-color: #FFF;
    color: #005857;
    &:active {
       background-color: #ebebeb;
    }
    &:focus {
        background-color: #def0ef;
        color: #000;
    }
`;

export const ConverterButton = styled.button`
    display: block;
    font-size: 20px;
    margin: 15px auto;
    border: 2px solid;
    border-radius: 10px;
    padding: 7px;
    color: #005857;
    background-color: hsl(179, 100%, 98%);
    transition: 0.3s;
    &:hover {
        background-color: hsl(179, 100%, 20%);
        color: #FFF;
        transform: scale(1.2);
        cursor: pointer;
    }
`;

export const ConverterCode = styled.label`
    color: #FFF;
    background-color: #005857;
    font-size: 18px;
    padding: 7px;
    border-radius: 10px;
    margin-left: 10px;
`;

export const ConverterSection = styled.section`
    margin: 20px 0;
    padding: 0px;
`;