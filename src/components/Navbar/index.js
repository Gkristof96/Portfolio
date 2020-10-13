import React, { useState, useEffect } from 'react'
import { Nav, NavbarContainer, NavLogo, HamburgerIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
import { FaBars } from 'react-icons/fa'
const Navbar = ({toggle}) => {
    const [scroll, setScroll] = useState(false);

    const  changeNav = () => {
        if(window.scrollY >= 80) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    },[])
    return (
        <>
        <Nav scroll={scroll}>
            <NavbarContainer>
                <NavLogo smooth={true} duration={500} spy={true} exact="true" offset={-80} to='home'>
                    Kristóf's Portfolio
                </NavLogo>
                <HamburgerIcon onClick={toggle}>
                    <FaBars />
                </HamburgerIcon>
                <NavMenu>
                    <NavItem><NavLinks smooth={true} duration={500} spy={true} exact="true" offset={-80} to='about'>Rólam</NavLinks></NavItem>
                    <NavItem><NavLinks smooth={true} duration={500} spy={true} exact="true" offset={-80} to='projects'>Projektek</NavLinks></NavItem>
                    <NavItem><NavLinks smooth={true} duration={500} spy={true} exact="true" offset={-80} to='skills'>Skills</NavLinks></NavItem>
                    <NavItem><NavLinks smooth={true} duration={500} spy={true} exact="true" offset={-80} to='contact'>Kapcsolat</NavLinks></NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar