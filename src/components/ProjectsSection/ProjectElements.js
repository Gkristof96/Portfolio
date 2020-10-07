import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    background: #222831;
    color: #000;
`

export const ProjectsWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 90vh;
    max-width: 80%;
    margin: 0 auto;
    padding-top: 5vh;
    grid-template-rows: 1.5fr 8fr;
    grid-template-columns: 1fr;
    grid-template-areas: "row1" "row2";

    @media (max-width: 768px) {
        height: auto;
        grid-template-rows: 1.5fr auto;
        grid-template-areas: "row1" "row2";
    }
`

export const CardWrapper = styled.div`
    display: flex;
    padding: 25px 0;
    grid-area: row2;
    justify-content: space-around;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

