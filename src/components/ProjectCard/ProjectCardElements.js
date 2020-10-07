import styled  from 'styled-components'

export const CardContainer = styled.div`
    max-width: 375px;
    width: 100%;
    height: 600px;
    background: #c4c4c4;
    border-radius: 5px;
    margin: 0 10px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-conten: center;

    @media (max-width: 768px) {
        max-width: 250px;
        height: 550px;
        margin: 10px 0;
    }

    &:hover {
        transform: scale(1.009);
    }
`
export const Img = styled.img`
    margin: 25px 0;
    max-width: 325px;
    width: 100%;
    border-radius: 5px;
    @media (max-width: 768px) {
        max-width: 200px;
    }
`

export const Description = styled.p`
    font-family: 'Roboto', sands-serif;
    margin: 25px 0;
    color: #212121
    font-size: 18px;
`