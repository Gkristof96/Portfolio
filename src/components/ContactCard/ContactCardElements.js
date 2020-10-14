import styled from 'styled-components'

export const CardContainer = styled.div`
    background: #0092CA;
    border-radius: 5px;
    width: 70%;
    max-width: 400px;
    height: 500px;
    display: grid;
    grid-template-rows: 0.5fr minmax(5fr,auto);
    grid-template-areas: 'title' 'form';
    @media (max-width: 1376px) {
        
    }
    @media screen and (max-width: 768px) {
        width: 90%;
        height: 100%;
        margin: 25px 0;
        justify-self: center;
    }
`

export const Title = styled.div`
    grid-area: title;
    width: 100%;
    text-align: center;
    align-self: center;
    margin: 25px 0;
    font-size: 36px;
    @media (max-width: 1376px) {
        font-size: 24px;
    }
`