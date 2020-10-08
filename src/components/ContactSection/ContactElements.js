import styled from 'styled-components'

export const ContactContainer = styled.div`
    background: #393E46;
`

export const ContactWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100vh;
    max-width: 80%;
    margin: 0 auto;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'row1 row1' 'col1 col2';

    @media screen and (max-width: 768px) {
        height: auto;
        grid-template-areas: 'row1' 'col1' 'col2';
        grid-template-columns: 1fr;
        grid-template-rows: 1.5fr auto auto;
    }
`

export const TextWrapper = styled.div`
    grid-area: col1;
    font-size: 28px;
    color: #eee;
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    margin: 60px 0;
    margin-left: 50px;
    @media screen and (max-width: 768px) {
        margin: 0;
    }
`