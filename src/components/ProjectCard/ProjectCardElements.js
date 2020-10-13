import styled  from 'styled-components'

export const CardContainer = styled.div`
    max-width: 375px;
    width: 100%;
    background: #c4c4c4;
    border-radius: 5px;
    display: grid;
    margin: 0 25px;
    padding: 15px;
    @media (max-width: 1376px) {
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
    width: 90%;
    justify-self: center;
    border-radius: 5px;
`

export const Description = styled.p`
    font-family: 'Roboto', sands-serif;
    color: #212121;
    font-size: 24px;
    margin: 15px 0;
    @media screen and (max-width: 1376px) {
        font-size: 20px;
    }
    @media screen and (max-width: 768px) {
        align-self: center;
        font-size: 18px;
    }
`