import styled from "styled-components";

export const StyledList = styled.section`
    max-width: 98%;
    flex-basis: 350px;
    text-align: center;
    font-size: 16px;
    color: #005857;
    background-color: #FFF;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 0 10px 10px #00000099;
    margin-top: 30px;
    margin-bottom: 50px;
`;

export const ListHeader = styled.h2`
    padding: 0 0 10px 0;
    font-size: 30px;
`;

export const SavedList = styled.ul`
    list-style-type: none;
    margin: auto;
    padding: 0px;
    overflow-y: auto;
    max-height: 600px;
`;

export const SavedPosition = styled.li`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: baseline;
    color: #000;
    border-bottom: 1px #CCC solid;
    border-top: 1px #AAA solid;
    padding: 7px;
    margin: auto;
    line-height: 2.3;
    &:hover {
        background-color: #def0ef;
    }
`;

export const ListCode = styled.span`
    color: #FFF;
    background-color: #005857;
    font-size: 12px;
    padding: 5px;
    border-radius: 10px;
`;

export const ListValue = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 17px;
`;

export const RemoveButton = styled.button`
    color: rgb(92, 35, 35);
    background-color: rgba(92, 35, 35, 0.219);
    font-size: 15px;
    padding: 8px;
    border: none;
    border-radius: 10px;
    margin: 5px;
    transition: 0.3s;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
        background-color: tomato;
        color: #000;
    }
`;

export const ClearButton = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(92, 35, 35);
    background-color: transparent;
    font-size: 20px;
    padding: 8px;
    border: none;
    border-radius: 10px;
    margin: 5px;
    transition: 0.3s;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
        color: #000;
    }
`;