import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    background: #222831;
    color: #000;
`

export const ProjectsWrapper = styled.div`
    display: grid;
    height: calc(100vh - 80px);
    max-width: 80%;
    margin: 0 auto;
    grid-template-rows: 2fr 8fr;
    grid-template-columns: 1fr;
    grid-template-areas: "title" "row2";
    @media (max-width: 768px) {
        height: auto;
        grid-template-rows: 1.5fr auto;
        grid-template-areas: "title" "row2";
    }
`

export const CardWrapper = styled.div`
    grid-area: row2;
    display: flex;
    padding-bottom: 50px;
    justify-content: space-around;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding-bottom: 25px;
    }
`

