import styled from 'styled-components'

export const ContactContainer = styled.div`
    background: #393E46;
    height: 1000px;
`

export const ContactWrapper = styled.div`
    display: grid;
    height: 100%;
    max-width: 80%;
    margin: 0 auto;
    grid-template-rows: 2fr 8fr;
    grid-template-columns: 50% 50%;
    grid-template-areas: 'title title' 'col1 col2';

    @media screen and (max-width: 768px) {
        height: auto;
        grid-template-areas: 'title' 'col1' 'col2';
        grid-template-columns: 1fr;
        grid-template-rows: 1.5fr auto auto;
    }
`

export const TextWrapper = styled.div`
    grid-area: col1;
    color: #eee;
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    padding: 25px 0;
    @media (max-width: 1376px) {
        font-size: 20px;
    }
    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`
export const CardWrapper = styled.div`
    grid-area: col2;
    display: flex;
    justify-content: center;
    padding: 25px 0;
`
export const Description = styled.p`
    padding-right: 10px;
    margin-bottom: 20px;
`

export const Mail = styled.p`

`

export const City = styled.p`
`