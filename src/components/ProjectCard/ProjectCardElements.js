import styled  from 'styled-components'

export const CardContainer = styled.div`
    max-width: 375px;
    width: 100%;
    height: 100%;
    max-height: 500px;
    background: #c4c4c4;
    border-radius: 5px;
    display: grid;
    margin: 0 25px;
    padding: 15px;
    grid-template-rows: 1fr 2fr 3fr 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: 'title' 'image' 'desc' 'button';
    @media (max-width: 1376px) {
        grid-template-rows: 1fr 2fr 3fr 1fr;
        max-width: 325px;
    }
    @media (max-width: 768px) {
        grid-template-rows: 1fr 2.5fr 1.5fr 0.5fr;
        max-width: 300px;
        margin: 10px 0;
    }
    &:hover {
        transform: scale(1.009);
    }
`
export const Img = styled.img`
    grid-area: image;
    width: 90%;
    justify-self: center;
    border-radius: 5px;
`

export const Description = styled.p`
    grid-area: desc;
    font-family: 'Roboto', sands-serif;
    color: #212121
    font-size: 18px;
    margin: 15px 0;
    @media screen and (max-width: 768px) {
        align-self: center;
        font-size: 14px;
    }
`