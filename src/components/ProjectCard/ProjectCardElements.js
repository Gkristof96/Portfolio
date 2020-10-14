import styled  from 'styled-components'

export const CardContainer = styled.div`
    width: 30%;
    height: auto;
    background: #c4c4c4;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
    padding: 20px;
    @media (max-width: 1376px) {
        max-width: 320px;
    }
    @media (max-width: 1023px) {
        max-width: 175px;
    }
    @media (max-width: 768px) {
        width: 100%;
        max-width: 400px;
        margin: 10px 0;
        height: auto;
    }
    &:hover {
        transform: scale(1.009);
    }
`
export const Img = styled.img`
    width: 100%;
    max-width: 300px;
    justify-self: center;
    border-radius: 5px;
`

export const Description = styled.p`
    font-family: 'Roboto', sands-serif;
    color: #212121;
    height: 175px;
    font-size: 22px;
    margin: 20px 0;
    @media screen and (max-width: 1376px) {
        font-size: 18px;
    }
    @media screen and (max-width: 768px) {
        height: auto;
        align-self: center;
        font-size: 18px;
    }
`

export const Button = styled.a`
    border-radius: ${({rounded}) => (rounded ? '50px' : '5px')};
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    background: ${({primary}) => (primary ? '#0092ca' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '6px 6px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-self: flex-end;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    width: 100%;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    }
`