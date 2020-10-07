import styled from 'styled-components'

export const AboutContainer = styled.div`
    background: #fff;
`

export const AboutWrapper = styled.div`
    display: grid;
    height: 90vh;
    max-width: 80%;
    margin: 0 auto;
    padding-top: 5vh;
    grid-template-rows: 1.5fr 8fr;
    grid-template-columns: 40% 60%;
    grid-template-areas: "row1 row1" "col1 col2";

    @media (max-width: 768px) {
        height: auto;
        grid-template-rows: 1fr 1fr auto;
        grid-template-columns: 1fr;
        grid-template-areas: "row1" "col1" "col2";
    }
`

export const ImageWrapper = styled.div`
    grid-area: col1;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TextWrapper = styled.div`
    grid-area: col2;
    display: flex;
    align-items: center;
    font-size: 28px;
    color: #757575;
    font-family: 'Roboto', sans-serif;
    padding: 0 10px;
    @media (max-width: 1200px) {
        font-size: 18px;
    }
    @media (max-width: 768px) {
        padding: 50px 0;
    }
`

export const Img = styled.img`
    width: 350px;
    height: 350px;
    border-radius: 5px;
    box-shadow: 0 4px 4px 3px rgba(0,0,0,0.25);
    @media (max-width: 1200px) {
        width: 300px;
        height: 300px;
    }
    @media (max-width: 500px) {
        width: 250px;
        height: 250px;
    }
`



