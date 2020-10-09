import styled  from 'styled-components'

export const CardContainer = styled.div`
    max-width: 375px;
    width: 100%;
    height: 550px;
    background: #c4c4c4;
    border-radius: 5px;
    margin: 0 10px;
    padding: 25px;
    display: grid;
    grid-template-rows: 1fr 3fr 2fr 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: 'title' 'image' 'desc' 'button';
    @media (max-width: 1200px) {
        grid-template-rows: 1fr 2.5fr 2fr 1fr;
        max-width: 325px;
    }
    @media (max-width: 768px) {
        max-width: 300px;
        margin: 10px 0;
    }

    &:hover {
        transform: scale(1.009);
    }
`
export const Img = styled.img`
    grid-area: image;
    width: 100%;
    margin: 0 auto;
    margin-top: 25px;
    border-radius: 5px;
`

export const Description = styled.p`
    grid-area: desc;
    font-family: 'Roboto', sands-serif;
    color: #212121
    font-size: 18px;
    margin: 25px 0;
    @media screen and (max-width: 768px) {
        align-self: center;
        font-size: 14px;
        tex-align: left;
    }
`