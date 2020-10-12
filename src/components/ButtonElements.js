import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

export const ButtonS = styled(LinkS)`
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
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    }
`

export const ButtonR = styled.a`
    grid-area: button;
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
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    }
`