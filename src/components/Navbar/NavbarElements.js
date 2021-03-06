import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scroll}) => (scroll ? '#222' : 'transparent')};
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    margin-top: -100px;
    z-index: 10;
    @media screen and (max-width: 960px) {
        height: 80px;
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    padding: 0 24px;
    width: 80%
`

export const NavLogo = styled(LinkS)`
    color: #fff;
    justify-self: flex-start;
    align-item: flex-start;
    cursor: pointer;
    font-size: 28px;
    display: flex;
    font-weight: bold;
    text-decoration: none;

`

export const HamburgerIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 40px;
        transform: translateY(-50%);
        right: 25px;
        font-size: 1.8rem;
        cursor:pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavItem = styled.li`
    height: 50px;
    margin: 0 25px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    font-size: 24px;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &:hover {
        color: #0092ca;
        transition: 0.2s ease-in-out;
    }
    &.active {
        border-bottom: 3px solid #0092ca;
    }
`


