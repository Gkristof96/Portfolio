import styled from 'styled-components'

export const Title = styled.div`
    grid-area: title;
    justify-self: center;
    align-self: center;
    padding: ${({bigText}) => (bigText ? '25px 0' : '0')};
    font-size: ${({bigText}) => (bigText ? '64px' : '24px')};
    color: ${({lightText}) => (lightText ? '#eeeeee' : '#212121')};
    @media screen and (max-width: 1376px) {
        font-size: ${({bigText}) => (bigText ? '48px' : '20px')};
    }
    @media screen and (max-width: 768px) {
        font-size: ${({bigText}) => (bigText ? '48px' : '18px')};
    }
`