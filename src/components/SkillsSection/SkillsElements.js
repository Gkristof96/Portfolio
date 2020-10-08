import styled from 'styled-components'

export const SkillsContainer = styled.div`
    background: #fff;
    color: #000;
`

export const SkillsWrapper = styled.div`
    display: grid;
    height: 90vh;
    max-width: 80%;
    margin: 0 auto;
    padding-top: 5vh;
    grid-template-rows: 1.5fr 8fr;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "row1 row1" "col1 col2";

    @media (max-width: 768px) {
        height: auto;
        grid-template-rows: 1.5fr auto;
        grid-template-areas: "row1" "row2";
        grid-template-rows: 1fr auto auto;
        grid-template-columns: 1fr;
        grid-template-areas: "row1" "col1" "col2";
    }
`

export const TextWrapper = styled.div`
    grid-area: col1;
    font-size: 28px;
    color: #757575;
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 0;
`

export const SkillWrapper = styled.div`
    grid-area: col2;
    justify-self: center;
    align-self: center;
`