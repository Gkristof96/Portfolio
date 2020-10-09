import styled from 'styled-components'

export const FullBar = styled.div`
    margin-bottom: 30px;
    width: 500px;
    height: 40px;
    border-radius: 5px;
    background: #c4c4c4;
    @media (max-width: 1200px) {
        width: 350px;
        height: 30px;
    }
    @media screen and (max-width: 768px) {
        width: 250px;
        height: 30px;
    }
`

export const Realbar = styled.div`
    width: ${props => props.percent};
    height: 40px;
    background: #0092ca;
    position: relative;
    border-radius: 5px 0 0 5px;
    @media (max-width: 1200px) {
        height: 30px;
    }
`

export const Title = styled.h1`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: #eee;
`

export const Percent = styled.h1`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: #eee;
`