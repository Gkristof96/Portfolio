import styled  from 'styled-components'

export const CardContainer = styled.div`
    max-width: 500px;
    background: #c4c4c4;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 25px;
    padding: 25px;
    @media (max-width: 768px) {
        margin: 10px 0;
    }
    &:hover {
        transform: scale(1.009);
    }
`
export const Img = styled.img`
    width: 75%;
    justify-self: center;
    border-radius: 5px;
`

export const Description = styled.p`
    font-family: 'Roboto', sands-serif;
    color: #212121;
    font-size: 24px;
    margin: 25px 0;
    @media screen and (max-width: 1376px) {
        font-size: 12px;
    }
    @media screen and (max-width: 768px) {
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
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
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
    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    }
`