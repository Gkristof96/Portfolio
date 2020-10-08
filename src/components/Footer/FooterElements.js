import styled from 'styled-components'

export const FooterContainer = styled.div`
    background: #222831;
`

export const FooterWrapper = styled.div`
    width: 80%;
    height: 10vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px) {
        height: auto;
        grid-template-areas: 'col1' 'col2';
        grid-template-columns: 1fr;
        grid-template-rows: 2fr 5fr;
    }
`
export const Logo = styled.h1`
    grid-area: col1;
    font-size: 48px;
    align-self: center;
    justify-self: flex-start;
    color: #eee;
    @media screen and (max-width: 768px) {
        justify-self: center;
    }
`
export const CopyRight = styled.div`
    max-height: 5vh;
    background: #393E46;
    text-align: center;
    font-size: 18px;
    color: #eee;
    font-family: 'Roboto', sans-serif;
    padding: 1vh 0;
`

export const FooterMenu = styled.ul`
    grid-area: col2;
    align-self: center;
    list-style: none;
    display: flex;
    justify-self: flex-end;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-self: center;
    }
`