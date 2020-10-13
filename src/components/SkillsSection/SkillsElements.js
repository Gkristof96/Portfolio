import styled from 'styled-components'

export const SkillsContainer = styled.div`
    background: #fff;
    color: #000;
`

export const SkillsWrapper = styled.div`
    display: grid;
    height: calc(100vh - 80px);
    max-width: 80%;
    margin: 0 auto;
    grid-template-rows: 2fr 8fr;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "title title" "col1 col2";

    @media (max-width: 768px) {
        height: auto;
        grid-template-rows: 1fr auto auto;
        grid-template-columns: 1fr;
        grid-template-areas: "title" "col1" "col2";
    }
`

export const TextWrapper = styled.div`
    grid-area: col1;
    display: flex;
    align-items: center;
`

export const SkillWrapper = styled.div`
    grid-area: col2;
    justify-self: center;
    align-self: center;
`
export const Description = styled.p`
    color: #757575;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    @media (max-width: 1376px) {
        font-size: 20px;
    }
    @media screen and (max-width: 768px) {
        font-size: 18px;
        margin: 25px 0;
    }
`