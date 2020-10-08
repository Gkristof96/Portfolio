import styled from 'styled-components'

export const Title = styled.div`
    grid-area: row1;
    align-self: center;
    justify-self: center;
    font-size: ${({bigText}) => (bigText ? '64px' : '24px')};
    color: ${({lightText}) => (lightText ? '#eeeeee' : '#212121')};

    @media screen and (max-width: 768px) {
        font-size: ${({bigText}) => (bigText ? '48px' : '24px')};
    }
`