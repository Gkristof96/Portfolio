import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 500px;
    height: 100%;
    max-height: 450px;
    background: #0092CA;
    border-radius: 5px;
    display: grid;
    grid-template-rows: 1fr 3fr;
    grid-template-areas: 'title' 'form';
    @media (max-width: 1376px) {
        height: 400px;
        width: 375px;
    }
    @media screen and (max-width: 768px) {
        margin: 50px 0;
        width: 250px;
        justify-self: center;
    }
`

export const Title = styled.div`
    grid-area: title;
    width: 100%;
    text-align: center;
    margin: 25px 0;
    font-size: 36px;
`