import styled from 'styled-components'

export const ContactContainer = styled.div`
    background: #393E46;
`

export const ContactWrapper = styled.div`
    display: grid;
    height: 90vh;
    max-width: 80%;
    margin: 0 auto;
    padding: 5vh 0;
    grid-template-rows: 1.5fr 8fr;
    grid-template-columns: repeat(2, 1fr);
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px 0;
    margin-left: 50px;
    @media (max-width: 1200px) {
        font-size: 20px;
        margin: 0 25px;
    }
    @media screen and (max-width: 768px) {
        font-size: 18px;
        margin: 25px 0;
    }
`